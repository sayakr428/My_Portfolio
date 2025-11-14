<img width="981" height="904" alt="image" src="https://github.com/user-attachments/assets/8d6dc8cd-474c-4c6b-b48e-2d75c713b7a5" />


# My_Portfolio – Sayak Roy

Premium, dark-themed, single-page portfolio for Sayak Roy — AI Infrastructure & Automation Engineer (Cloud, DevOps, SDN).

## Overview
- Built with React + Vite, Tailwind CSS, Three.js, and Framer Motion.
- Sections: Navbar, Hero, About, Skills, Featured Projects, Experience, Testimonials, Contact, Footer.
- Visuals: glassmorphism, neon accents, glow borders, interactive 3D hero, auto-scrolling sliders, smooth animations, and a dynamic background grid with cursor-follow glow.

## Tech Stack
- Frontend: React, Vite
- Styling: Tailwind CSS
- 3D: three, @react-three/fiber, @react-three/drei
- Animations: framer-motion
- Build tooling: @vitejs/plugin-react, postcss, autoprefixer
- Deployment: Netlify

## Packages Installed
- Dependencies:
  - react, react-dom
  - framer-motion
  - three, @react-three/fiber, @react-three/drei
- Dev Dependencies:
  - vite@4
  - @vitejs/plugin-react
  - tailwindcss, postcss, autoprefixer

## Project Structure
- index.html
- vite.config.js
- tailwind.config.js
- postcss.config.js
- netlify.toml
- src/
  - main.jsx, index.css
  - App.jsx
  - components/
    - Navbar.jsx
    - Background.jsx
    - Hero.jsx
    - About.jsx
    - Skills.jsx
    - ProjectsSlider.jsx
    - Timeline.jsx
    - Testimonials.jsx
    - Contact.jsx
    - Footer.jsx
- public/
  - Sayak_Roy_CV.pdf (hero button uses Google Drive link)

## Setup
Prerequisites: Node.js (LTS recommended), npm

```bash
npm install
npm run dev
```

## Scripts
```bash
# Start dev server
npm run dev

# Build production
npm run build

# Preview local production build
npm run preview
```

## Git & GitHub
```bash
# Initialize repository
git init
git checkout -b main
git add .
git commit -m "Initial commit: portfolio site"

# Add remote
git remote add origin https://github.com/sayakr428/My_Portfolio.git

# If remote has existing content, pull and resolve
git pull origin main --allow-unrelated-histories
# fix conflicts, then
git add <files>
git commit -m "Resolve conflicts"

# Push
git push -u origin main
```

## Netlify Deployment
Using Netlify UI (recommended):
- New site from Git → GitHub → select `sayakr428/My_Portfolio`.
- Build command: `npm run build`
- Publish directory: `dist`
- SPA routing handled by `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

Optional: Netlify CLI
```bash
npm i -g netlify-cli
netlify login
netlify init

# Deploy preview
netlify deploy --dir=dist

# Deploy production
netlify deploy --prod --dir=dist
```

## Features
- Premium dark theme with neon accents and glassmorphism.
- Sticky navbar with active section highlighting.
- 3D hero with wireframe sphere + particle stars (auto-rotate, mouse-reactive light).
- About includes overview, location, email, phone, and quick links.
- Skills match resume categories exactly.
- Featured Projects: responsive auto-scrolling cards and detail modal.
- Experience timeline with glowing connectors.
- Testimonials horizontal slider.
- Contact form with validation and social links.

## CV Download
- Hero “Download CV” links to Google Drive:
`https://drive.google.com/file/d/1sRO8zcEfGFu98omSCAnXw-cFqJFn3OJs/view?usp=sharing`
