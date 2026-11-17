# SDE Portfolio Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/747b5244-a508-40ea-837d-1ae0381bdebd/deploy-status)](https://app.netlify.com/projects/lalith-reddy-portfolio)
**Live Site:** [https://lalith-reddy-portfolio.netlify.app](https://lalith-reddy-portfolio.netlify.app)

A modern, high-performance **Software Development Engineer (SDE)** portfolio website built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**.

Designed specifically to impress tech recruiters and engineering hiring managers by focusing on architecture, measurable performance impact, clean typography, and fast scannability.

---

## ⚡ Key Highlights

- **Bento Grid Layout:** Clean visual hierarchy highlighting high-scale engineering achievements.
- **Measurable Metrics First:** Built-in badges for latency reductions, QPS/throughput, and reliability SLAs.
- **One-Click Actions:** Instant "Copy Email" with visual feedback, "Download Resume", and GitHub/LinkedIn integration.
- **Type-Safe Centralized Data:** Update all personal info, projects, experience, and skills in a single file (`src/data/portfolio.ts`).
- **Dark Mode Aesthetic:** Inspired by Linear, Vercel, and Stripe with subtle glowing gradients.
- **Production-Ready:** Statically pre-rendered, fully responsive, and SEO-optimized.

---

## 📂 Project Structure

```text
├── src/
│   ├── app/
│   │   ├── globals.css      # Tailwind CSS v4 styling & dark theme variables
│   │   ├── layout.tsx       # Root layout with metadata
│   │   └── page.tsx         # Assembled portfolio page
│   ├── components/
│   │   ├── Navbar.tsx       # Sticky blur navigation with mobile drawer
│   │   ├── Hero.tsx         # Availability beacon, elevator pitch, stats strip
│   │   ├── ProjectsSection.tsx # Deep-dive cards with architecture & metrics
│   │   ├── ExperienceSection.tsx # Career timeline with STAR-method bullet points
│   │   ├── SkillsSection.tsx   # Categorized technical skills matrix
│   │   ├── EducationSection.tsx# CS degree & relevant coursework
│   │   ├── ContactSection.tsx  # Direct email copy, social links, resume CTA
│   │   ├── Footer.tsx       # Minimalist footer & back-to-top anchor
│   │   └── icons.tsx        # Optimized SVG brand icons
│   └── data/
│       └── portfolio.ts     # ⭐️ EDIT HERE: All personal content & projects
├── public/
│   └── resume.pdf           # Place your PDF resume here
└── package.json
```

---

## 🚀 How to Customize Your Details

You only need to edit **`src/data/portfolio.ts`** to update:
1. **Personal Information:** Name, role title, bio, email, GitHub URL, LinkedIn URL.
2. **Key Stats:** DSA solved count, API latency metrics, production uptime, primary stack.
3. **Projects:** Add or edit your projects with architecture bullet points, performance metrics, and repository links.
4. **Work Experience:** Update company names, dates, and bullet points using the **STAR** method (Situation, Task, Action, Result).
5. **Skills:** Modify categorized tags for Languages, Backend, Databases, Cloud/DevOps, and CS fundamentals.
6. **Resume:** Replace `public/resume.pdf` with your actual resume file.

---

## 🛠️ Development & Deployment

### Start the Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
```

### Deploy to Netlify (Recommended)

#### Option 1: Git Integration (Continuous Deployment)
1. Push this repository to GitHub:
   ```bash
   git push -u origin main
   ```
2. Log into [Netlify](https://app.netlify.com) and click **"Add new site" > "Import an existing project"**.
3. Select your GitHub repository. Netlify will automatically detect the settings from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
4. Click **Deploy portfolio**. Every push to `main` will automatically trigger a fresh production deployment.

#### Option 2: Instant Manual Deploy (Netlify Drop)
1. Run `npm run build` locally to generate the static `out/` folder.
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
3. Drag and drop the `out` folder from this project directory. Your site will be live instantly!

#### Option 3: Netlify CLI
```bash
npx netlify deploy --prod --dir=out
```
