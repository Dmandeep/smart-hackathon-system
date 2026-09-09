import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { randomUUID } from "crypto";

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: "hackverse-demo-secret-key-1234567890-do-not-use-in-real-prod",
  providers: [
    CredentialsProvider({
      name: "Demo Login",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "demo" },
        password: { label: "Password", type: "password", placeholder: "demo" },
      },
      async authorize(credentials) {
        if (!credentials?.username) return null;
        
        // Return a mock user for the hackathon demo. 
        // This prevents Vercel serverless functions from crashing when trying to write to a local SQLite file.
        const username = credentials.username as string;
        return { 
          id: randomUUID(), 
          name: username, 
          email: `${username}@demo.com` 
        };
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
