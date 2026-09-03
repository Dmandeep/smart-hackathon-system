import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  image: text("image"),
  role: text("role", { enum: ["hacker", "organizer", "judge"] }).default("hacker").notNull(),
  skills: text("skills", { mode: "json" }).default(sql`'[]'`),
  createdAt: integer("created_at", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`).notNull(),
});

export const hackathons = sqliteTable("hackathons", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  organizerId: text("organizer_id").references(() => users.id).notNull(),
  status: text("status", { enum: ["draft", "registration", "hacking", "judging", "completed"] }).default("draft").notNull(),
  startDate: integer("start_date", { mode: "timestamp" }).notNull(),
  endDate: integer("end_date", { mode: "timestamp" }).notNull(),
  timelineConfig: text("timeline_config", { mode: "json" }),
  createdAt: integer("created_at", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`).notNull(),
});

export const teams = sqliteTable("teams", {
  id: text("id").primaryKey(),
  hackathonId: text("hackathon_id").references(() => hackathons.id).notNull(),
  name: text("name").notNull(),
  inviteCode: text("invite_code").notNull().unique(),
  leaderId: text("leader_id").references(() => users.id).notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`).notNull(),
});

export const teamMembers = sqliteTable("team_members", {
  teamId: text("team_id").references(() => teams.id).notNull(),
  userId: text("user_id").references(() => users.id).notNull(),
  joinedAt: integer("joined_at", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`).notNull(),
});

export const submissions = sqliteTable("submissions", {
  id: text("id").primaryKey(),
  teamId: text("team_id").references(() => teams.id).notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  githubUrl: text("github_url"),
  demoUrl: text("demo_url"),
  videoUrl: text("video_url"),
  forensicsScore: integer("forensics_score"), 
  forensicsReport: text("forensics_report", { mode: "json" }),
  submittedAt: integer("submitted_at", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`).notNull(),
});

export const evaluations = sqliteTable("evaluations", {
  id: text("id").primaryKey(),
  submissionId: text("submission_id").references(() => submissions.id).notNull(),
  judgeId: text("judge_id").references(() => users.id).notNull(),
  rawScore: real("raw_score").notNull(),
  normalizedScore: real("normalized_score"), 
  comments: text("comments"),
  createdAt: integer("created_at", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`).notNull(),
});
