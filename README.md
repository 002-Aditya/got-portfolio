# Aditya Kumar - The Realm of Code Portfolio

A cinematic, Game of Thrones-inspired personal portfolio for Aditya Kumar, Backend Software Engineer. Forged with React, Tailwind CSS, and Framer Motion.

## ⚔️ Tech Stack

- **React (Vite)**
- **Tailwind CSS v3**
- **Framer Motion** (Animations & Parallax)
- **Lucide React** (Icons)

## 🚀 How to Run Locally

To run the project locally on your machine, follow these steps:

1. **Navigate to the project directory:**

   ```bash
   cd portfolio
   ```

2. **Install dependencies:**
   Make sure you have Node.js installed, then run:

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **View the application:**
   Open your browser and navigate to the local URL provided in your terminal (usually `http://localhost:5173`).

---

## 📜 How to Update Content

The website content is strictly based on your `portfolio.md`.
If you need to update any information to keep it aligned with a newer version of `portfolio.md`, you can edit the following components located in the `src/components/` directory:

- **Adding New Skills:** Edit the `skillsData` array inside `src/components/Skills.jsx`.
- **Adding New Experience:** Edit the `experiences` array inside `src/components/Experience.jsx`.
- **Adding New Projects:** Edit the `projects` array inside `src/components/Projects.jsx`.
- **Updating the Timeline:** Edit the `milestones` array inside `src/components/Timeline.jsx`.
- **Updating Contact Info:** Modify the hardcoded emails, phone numbers, and links inside `src/components/Contact.jsx` and `src/components/Footer.jsx`.
- **Updating the Professional Summary:** Modify the text content inside `src/components/About.jsx`.

The codebase is highly modular, so each section's data is isolated within its respective component file, making future updates straightforward without risking the cinematic layout!
