# ⚔️ Aditya Kumar - The Realm of Code Portfolio

A cinematic, Game of Thrones-inspired personal portfolio for Aditya Kumar, Backend Software Engineer. Forged with React, Tailwind CSS, and Framer Motion. 

This repository houses a highly immersive, interactive portfolio designed to showcase projects, skills, and experience through a dark fantasy, medieval aesthetic.

## 🐉 Features
- **Cinematic UI/UX:** Parallax scrolling, dynamic background transitions, and custom cursors.
- **Game of Thrones Theme:** Features custom Typography (Cinzel Decorative), Iron Throne graphics, and a stylized map of the 'Seven Kingdoms'.
- **Interactive Elements:** Smooth scroll animations with Framer Motion, dynamic hover states across projects and skills.
- **Component-Driven:** Modular data structure making updates to skills, experiences, and projects incredibly straightforward.
- **Fully Responsive:** Beautifully crafted layouts for mobile, tablet, and desktop viewports.

## 🛠️ Tech Stack
- **Frontend Framework:** React (built with Vite)
- **Styling:** Tailwind CSS v3
- **Animations:** Framer Motion (Scroll & Parallax effects)
- **Icons:** Lucide React

## 🚀 Getting Started

To run the project locally on your machine, follow these steps:

1. **Navigate into the project directory:**
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
   Open your browser and navigate to the local URL (usually `http://localhost:5173`).

---

## 📜 How to Update Content

The website content is strictly separated from the cinematic layout to ensure easy maintainability. To update information, edit the following components located in the `src/components/` directory:

- **Adding New Skills:** Edit the `skillsData` array inside `src/components/Skills.jsx`.
- **Adding New Experience:** Edit the `experiences` array inside `src/components/Experience.jsx`.
- **Adding New Projects:** Edit the `projects` array inside `src/components/Projects.jsx`.
- **Updating the Timeline:** Edit the `milestones` array inside `src/components/Timeline.jsx`.
- **Updating Contact Info:** Modify the hardcoded details inside `src/components/Contact.jsx` and `src/components/Footer.jsx`.
- **Updating the Professional Summary:** Modify the text content inside `src/components/About.jsx`.

The highly modular codebase means each section's data is isolated—enabling seamless updates without breaking the immersive layout!

## 🌍 Deployment
This application is optimized for deployment on Vercel or any modern edge platform. Simply link your GitHub repository to Vercel, and Vite's build settings will be automatically detected.
