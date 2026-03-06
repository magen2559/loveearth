# AI Prompt Documentation

This document serves as the required **AI Prompt Documentation** for the 7-Day New Hire Onboarding System assignment. It details how AI (specifically, an agentic AI assistant) was used to design and build the prototype, and how future users can maintain it using AI prompts.

---

## 1. Initial Planning & Architecture Prompts

**Objective:** Understand the assignment requirements and plan the database schema to ensure tasks are configurable (not hardcoded).

**Prompt Used:**
> "I have a PDF assignment to build a 7-day onboarding system. The system must have an Employee View to complete 7 specific tasks, and an HR Admin View to track progress. A critical requirement is that the tasks must not be hardcoded—they must be configurable via a table so HR can edit them. Can you please plan out the prototype structure, tech stack, and the exact database schema we need to use?"

**Why it worked:**
By explicitly mentioning the constraints ("not hardcoded", "configurable table"), the AI immediately suggested a relational database structure with an `onboarding_tasks` table and an `employee_tasks` junction table, ensuring the architecture met the core assignment criteria from day one.

---

## 2. Generating the Database & Content Prompts

**Objective:** Create the actual SQL commands to build the database, including the specific 7 tasks required in the assignment instructions.

**Prompt Used:**
> "Let's use Supabase for the database. Please write the SQL migration to create the 4 tables we discussed. Then, write a SQL insert script to seed the `onboarding_tasks` table with the exact 7 tasks from the assignment PDF. Make sure to define a `task_type` column (like 'checkbox', 'asset_collection', 'photo_upload') so the frontend knows how to render each task differently without hardcoding."

**Why it worked:**
Asking the AI to define `task_type` was the key to making the UI dynamic. Instead of writing separate HTML for Task 1 and Task 6, a single frontend renderer can look at the `task_type` database column and display the right input field automatically.

---

## 3. Building the Frontend UI Prompts

**Objective:** Generate clean, modern HTML/CSS for the HR Admin Dashboard.

**Prompt Used:**
> "Build the HR Admin dashboard UI using vanilla HTML, CSS, and JS. It needs to show a summary table of all employees and their onboarding progress (e.g. 4/7 complete with a progress bar). Most importantly, include a 'Task Configuration' tab. This tab should load the `onboarding_tasks` table from Supabase and let HR freely edit the title, description, and active status of tasks, then save them back to the database."

**Why it worked:**
By breaking the frontend request down into specific views connected to the database output ("summary table", "Task Configuration tab"), the AI avoided building a generic admin panel and focused exactly on the assignment's "easy modification" requirement.

---

## 4. How Future Users (HR) Can Use AI to Maintain the System

If HR wants to add a completely new *type* of task in the future (e.g., a "Quiz" task), they do not need to know how to code. They can use the following prompt with an AI assistant like Gemini, Claude, or ChatGPT:

**Maintenance Prompt Example:**
> "I have a JavaScript application that reads from a Supabase table called `onboarding_tasks`. Currently, it supports task types like 'checkbox', 'text_input', and 'photo_upload'. I want to add a new task type called 'quiz_link'. 
> 
> Here is my current `employee.js` file: [Paste code]
> 
> Can you update the JavaScript so that if `task_type === 'quiz_link'`, it renders a clickable button that goes to a URL stored in the task description, instead of a checkbox?"

**Process for HR:**
1. Copy the frontend code.
2. Paste it into an AI tool alongside the maintenance prompt above.
3. The AI will output the modified JavaScript.
4. Replace the old file with the new file.
