"use server";

import { db } from "@/lib/db";
import { hackathons, teams } from "@/lib/db/schema";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { randomUUID } from "crypto";

export async function createHackathon(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) {
    console.error("Unauthorized");
    return;
  }

  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const startDateStr = formData.get("startDate") as string;
  const endDateStr = formData.get("endDate") as string;

  try {
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Math.random().toString(36).substring(2, 6);
    
    // SQLite mode timestamp is an integer
    const startDate = Math.floor(new Date(startDateStr).getTime() / 1000);
    const endDate = Math.floor(new Date(endDateStr).getTime() / 1000);

    await db.insert(hackathons).values({
      id: randomUUID(),
      name,
      slug,
      description,
      startDate: new Date(startDate * 1000), // Drizzle SQLite timestamp mode expects Date objects
      endDate: new Date(endDate * 1000),
      organizerId: session.user.id,
      status: "draft"
    });
    
    revalidatePath("/organizer/hackathons");
  } catch (error) {
    console.error("Failed to create hackathon:", error);
  }
}

export async function createTeam(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) {
    console.error("Unauthorized");
    return;
  }

  const name = formData.get("name") as string;
  const hackathonId = formData.get("hackathonId") as string;

  try {
    const inviteCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    await db.insert(teams).values({
      id: randomUUID(),
      name,
      hackathonId,
      inviteCode,
      leaderId: session.user.id,
    });
    revalidatePath("/hacker");
  } catch (error) {
    console.error("Failed to create team:", error);
  }
}
