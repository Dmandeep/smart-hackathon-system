# HackVerse AI 🚀

> The Intelligent Operating System for Hackathons.

An advanced, enterprise-grade Hackathon Management Platform designed to eliminate plagiarism, automate team matching using AI, and normalize judge scoring. Built specifically for serious hackathon organizers and universities.

## 🌟 Core Features

- **Advanced Code Forensics Engine (AI):** Analyzes GitHub repositories using AST similarity scores and commit timeline analytics to flag cloned projects, boilerplate spam, and plagiarism.
- **Intelligent Team Matchmaker (AI):** Uses complementary skill algorithms (simulated via Integer Linear Programming logic) to match solo developers into balanced, capable teams based on missing skill sets.
- **Judge Z-Score Normalization:** Evaluates raw judge scores and normalizes them across tracks to ensure fair evaluation, eliminating the "easy judge vs. strict judge" bias.
- **AAA Glassmorphism UI:** Built with Next.js App Router, Tailwind CSS v4, and Framer Motion for a stunning, responsive, dark/light mode interface.

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4 + Framer Motion
- **UI Components:** Shadcn/ui
- **Database:** PostgreSQL (via Drizzle ORM)
- **Authentication:** NextAuth.js (Auth.js v5) with Google/GitHub providers
- **Architecture:** Server Actions for graceful degradation and secure data fetching.

## 🚀 Getting Started

### 1. Setup Environment
Clone the repository and install dependencies:
```bash
npm install
```

Copy the example environment file and add your credentials:
```bash
cp .env.example .env
```
*Note: You will need a PostgreSQL connection string (from Supabase, Neon, etc.) and OAuth credentials.*

### 2. Run the Development Server
```bash
npm run dev
```
Navigate to `http://localhost:3000` to view the application.

## 📁 Key Routes to Explore

- `/organizer` - Main Organizer Dashboard
- `/organizer/hackathons` - Manage and create new events
- `/organizer/participants` - Browse registered developers
- `/organizer/forensics` - View AI plagiarism reports
- `/hacker` - Hacker Portal to view active enrollments and find teams
- `/judge` - Dedicated Judge scoring workspace
- `/pricing` - Pricing tiers
- `/login` - Authentication page

---
*Built as a Final Year Engineering Project to redefine how Hackathons are executed.*
