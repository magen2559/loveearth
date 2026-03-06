# Presentation Deck Outline: 7-Day Onboarding System

## Slide 1: Title Slide
*   **Headline:** Automating the 7-Day New Hire Onboarding System
*   **Subheadline:** A scalable, low-code prototype powered by AI & Supabase
*   **Visual:** Screenshot of the `index.html` login page

## Slide 2: The Problem & The Solution
*   **The Problem:** Manual tracking of new hires, hardcoded task lists, fragmented asset management, and no central dashboard for HR.
*   **The Solution:** A web-based port featuring two distinct views (Employee & Admin), built on a centralized database that makes tasks dynamically configurable without touching code.

## Slide 3: Prototype Overview (Employee View)
*   **Features:**
    *   Personalized welcome with start date.
    *   Live 0-100% progress bar.
    *   Clickable task cards that open dynamic modals.
*   **Visual:** Screenshot of the Employee Checklist (`employee.html`) showing the progress bar and task list.

## Slide 4: Data Entry & Asset Collection
*   **Features:**
    *   Asset Tagging: Employees can input specific tag numbers (e.g., Lanyard, Laptop).
    *   N/A Toggle: If an asset is not applicable, they can mark it out.
    *   Order Tracking: Input fields for Webstore Order IDs.
*   **Visual:** Screenshot of the `Collection of Company Assets` modal open.

## Slide 5: Prototype Overview (HR Admin View)
*   **Features:**
    *   High-level metrics (Total Employees, In Progress, Complete).
    *   Tracker table sorting employees by completion percentage.
    *   Click-to-view detailed breakdown of every employee's tasks and timestamps.
*   **Visual:** Screenshot of the HR Dashboard (`admin.html`) showing the tracker table.

## Slide 6: The "No Hardcoding" Requirement
*   **How it Works:** The system uses a `Task Configuration` tab in the HR dashboard.
*   **Benefit:** HR can change task titles, descriptions, reorder them, or disable them entirely. The UI reads from the database (`onboarding_tasks` table) instead of static HTML.
*   **Visual:** Screenshot of the Task Configuration tab showing the editable table.

## Slide 7: Underlying Architecture & Data Structure
*   **Tech Stack:** HTML/CSS/JS Frontend + Supabase (Postgres) Database + Vercel Hosting.
*   **Core Tables:**
    *   `employees`: User accounts and roles.
    *   `onboarding_tasks`: The HR-editable template of the 7 tasks.
    *   `employee_tasks`: The junction table tracking timestamps when an employee completes a task.
    *   `asset_records`: Stores individual item tag codes.
*   **Visual:** A simple bulleted list or block diagram of the 4 tables.

## Slide 8: AI-Assisted Development
*   **How it was built:** Antigravity AI was used to architect the database schema, write SQL migrations, and generate the vanilla JS frontend.
*   **Prompt Example:** "Build the HR Admin dashboard... Most importantly, include a Task Configuration tab that reads the `onboarding_tasks` table so HR can freely edit task text."
*   **Visual:** A snippet of the prompt used (from `AI_PROMPTS.md`).

## Slide 9: Maintenance Guide for HR
*   **Updating Tasks Today:** Use the built-in Task Config tab to edit text.
*   **Adding New Features Tomorrow:** HR can copy the frontend code, paste it into ChatGPT/Gemini, and say: *"I am an HR admin. I want to add a 'quiz' task type to this Javascript file. Update the modal to show a link to Google Forms if `task_type === 'quiz'`."*
*   **Visual:** Side-by-side icon of a human and an AI bot.

## Slide 10: Conclusion & Live Demo
*   **Summary:** Built in under 3 days, fully functional, secure, and easily maintainable.
*   **Live Link:** [Insert your Vercel URL here]
*   **Demo Accounts:** alice@company.com (Employee), hr@company.com (HR).
