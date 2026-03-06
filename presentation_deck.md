# Crextio: 7-Day New Hire Onboarding System
*AI Engineer Internship Trainee Submission*

---

## Slide 1: Title Slide
**Title:** Crextio: 7-Day New Hire Onboarding System
**Subtitle:** Automating Onboarding with Dynamic Database-Driven Architectures
**Presenter:** [Insert Name]
**Role:** AI Engineer Internship Trainee Candidate

---

## Slide 2: The Problem
**Pain Points in Standard Onboarding:**
1. **Hardcoded Systems:** Traditional onboarding apps require developers to constantly update code when HR wants to change a task (e.g., adding a new piece of uniform to collect).
2. **Lack of Visibility:** HR teams struggle to see a live "completion percentage" across new hires.
3. **Disjointed Processes:** New hires rely on emails or PDFs to track tasks, resulting in confusion and missing documentation.

---

## Slide 3: The Solution
**A Dynamic, No-Code Friendly Dashboard**
1. **Configurable Database Tasks:** The onboarding tasks are stored as JSONB metadata in Supabase. HR can actively modify task descriptions, types, and required metadata without engineering help!
2. **Real-Time HR Tracking:** The Admin Dashboard calculates completion percentages based on dynamic relational joints (`tasks` to `employee_tasks`).
3. **Streamlined Employee Experience:** The Employee Dashboard securely queries the active task list and generates UI elements dynamically (checkboxes vs. text inputs) based on the database configuration.

---

## Slide 4: Real-World Demonstration
*(Insert Screenshots or Live Demo Here)*

**Employee View:**
- Beautiful Bento-Grid layout powered by Vanilla HTML/CSS.
- GSAP and Lenis used for ultra-smooth entrance animations and inertia scrolling.
- Tasks are completed inline and sync effortlessly with Supabase.

**HR Admin View:**
- Global Overview Dashboard with metrics (Total Employees, Completions, Active).
- Dynamic Table modifying the live tasks schema (Toggle Active status, reorder, edit).

---

## Slide 5: The Architecture
**Tech Stack Breakdown:**
1. **Frontend:** Pure HTML, CSS, Vanilla JavaScript (Zero build-step frameworks to maintain agility and rapid prototyping speed).
2. **Design Language:** Custom CSS tokens, Glassmorphism, Phosphor Icons.
3. **Backend & Database:** Supabase (PostgreSQL).
   - `employees` (Role-based profiles)
   - `tasks` (Generic task configurations with JSONB metadata)
   - `employee_tasks` (Employee completion logs)
4. **Security:** Supabase Auth with Row Level Security (RLS) enforcing Role-Based Access Control via JavaScript client fetching.

---

## Slide 6: Prompt Engineering Strategy
**How AI Was Leveraged to Build This Faster:**
Instead of handwriting boilerplate, AI was used strategically for:
1. **Database Modeling:** "Design a Supabase schema with generic UI types mapped to JSONB metadata to prevent future code updates when HR adds new tasks."
2. **Vanilla JS Dynamic Rendering:** "Write a Vanilla JS loop to parse JSONB task metadata and create custom DOM input fields on the fly."
3. **Frontend Aesthetic:** "Generate advanced CSS definitions for a premium, high-fidelity Bento Grid using GSAP entrance stagger effects."

*See `ai_prompts.md` for full prompt transcriptions.*

---

## Slide 7: Future Scalability
**Where can we take this next?**
1. **Automated Reminders:** Trigger Supabase Edge Functions / webhooks on Day 6 for uncompleted tasks.
2. **Multi-Department Scopes:** Add a `department_id` to the tasks table so engineering hires see different tasks than marketing hires.
3. **Media Storage Integration:** Finalize Supabase Storage Buckets to handle document signing and photo uploads securely via the dashboard.

---

## Slide 8: Thank You
**Contact Information & Q&A**
- GitHub Link: [Insert Repo URL]
- Live Vercel Link: [Insert Vercel URL]
- Email: [Insert Email]
