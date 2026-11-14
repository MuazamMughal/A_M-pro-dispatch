# A&M Pro Dispatch — Official Website

> **"Your Freight. Our Focus."**  
> Dedicated Freight Dispatching for Owner-Operators & Fleet Carriers in the USA.

---

## 🚛 Overview

A modern, high-performance web application built with **Next.js 15 (App Router)**, **Tailwind CSS**, and **Resend** for **A&M Pro Dispatch**.

* **Live Dispatch Operations:** Esmeralda Arenas (Director of Dispatch Operations)
* **Phone:** (770) 601-6344 *(Call or Text)*
* **Email:** Esmeralda@amprodispatch.com
* **Socials:** [Instagram](https://instagram.com/amprodispatch) • [Facebook](https://facebook.com/amprodispatch)

---

## ✨ Features

- **High-Converting Hero Section:** Professional dispatch messaging, live rate preview ($3.84/mile), and quick CTAs.
- **Interactive Freight Profitability Calculator:** Real-time weekly gross revenue, dispatch fee, and net take-home calculation.
- **6-Pillar Core Services:** Load sourcing, rate negotiation, paperwork handling, factoring coordination, 24/7 driver support, and new MC authority acceleration.
- **Equipment Fleet Showcase:** Interactive tabbed view for Dry Van (53'), Reefer (53'), Flatbed/Stepdeck, Box Truck (24–26'), Power Only, and Hotshot (40').
- **Carrier Onboarding Intake Form:** Multi-field carrier profile form powered by **Resend** for instant email transmission to operations.
- **Contact Desk Form:** Validated direct messaging with instant alert notifications.
- **Full SEO & Search Rich Snippets:**
  - Automated XML Sitemap (`/sitemap.xml`)
  - Search engine crawler directives (`/robots.txt`)
  - Web App Manifest (`/manifest.webmanifest`)
  - Schema.org `LocalBusiness` & `FAQPage` structured data (for Google SERP accordion rich results)
  - OpenGraph & Twitter Cards (`1200x630` banner support)
- **Security & Performance:** HTTP security headers (`nosniff`, `SAMEORIGIN`, CSP/Permissions policies) and Next.js image optimization.

---

## 🛠️ Tech Stack

* **Framework:** [Next.js 15](https://nextjs.org/) (App Router, Server-Side Rendering)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Email API:** [Resend](https://resend.com/)
* **Language:** TypeScript

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/MuazamMughal/A_M-pro-dispatch.git
cd A_M-pro-dispatch
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Copy `.env.local.example` to `.env.local`:
```bash
cp .env.local.example .env.local
```

Add your Resend API credentials:
```env
RESEND_API_KEY=re_your_api_key_here
DISPATCH_EMAIL_TO=Esmeralda@amprodispatch.com
DISPATCH_EMAIL_FROM=A&M Pro Dispatch <onboarding@resend.dev>
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Production Build
```bash
npm run build
npm start
```

---

## 📄 License

Copyright © 2026 A&M Pro Dispatch L.L.C. All rights reserved.

