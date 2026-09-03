import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { randomUUID } from "crypto";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Demo Login",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "demo" },
        password: { label: "Password", type: "password", placeholder: "demo" },
      },
      async authorize(credentials) {
        if (!credentials?.username) return null;
        
        // Find or create user for the demo
        const username = credentials.username as string;
        let [user] = await db.select().from(users).where(eq(users.name, username));
        
        if (!user) {
          const id = randomUUID();
          await db.insert(users).values({
            id,
            name: username,
            email: `${username}@demo.com`,
          });
          [user] = await db.select().from(users).where(eq(users.name, username));
        }

        return { id: user.id, name: user.name, email: user.email };
      }
    })
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub;
      }
      return session;
    }
  }
});
