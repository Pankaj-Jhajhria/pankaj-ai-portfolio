# Pankaj Jhajhria — AI Engineer Portfolio Website

A modern personal portfolio for **Pankaj Jhajhria** — AI & Machine Learning Engineer, built with Next.js App Router, TypeScript, Tailwind CSS, and Three.js.

Designed to showcase engineering work across **Agentic AI & RAG**, **Multimodal Deep Learning / Vision**, and **Large-Scale Data & ML Systems** with verified benchmarks and live deployments.

---

## 🌟 Key Highlights & Visual Architecture

* **Interactive 3D Hero Scene**: Custom client-side Three.js geodesic neural network orb with glowing nodes, warm amber/copper and electric cyan data particle ribbons, and mouse-parallax damping. Respects `prefers-reduced-motion` and provides automatic fallback.
* **Distinctive Color & Depth Palette**: Dark graphite base (`#08090d`) accented by warm copper (`#d97706`), amber (`#f59e0b`), electric cyan (`#06b6d4`), subtle glassmorphism blur, and fine technical grids.
* **Curated Featured Projects (Strict Priority Order)**:
  1. **MuseGuide — AI Museum Guide Using RAG & Vector Search** *(Groq Cloud LLM, Sentence-Transformers, FAISS, Whisper, Piper ONNX)*
  2. **ReviewRadar — High-Throughput Sentiment Analysis & Data Pipeline** *(DuckDB, scikit-learn, 5M+ Amazon reviews, 2.04M test reviews evaluated)*
  3. **RGB-Thermal Semantic Segmentation & 4-Architecture Benchmark App** *(PyTorch dual-stream ResNet-18, live Streamlit multi-model comparator)*
  4. **FilmSense — Content-Based Movie Recommendation Engine** *(Consolidated TMDB metadata, TF-IDF, cosine NearestNeighbors, live Streamlit app)*
* **Substantiated Metrics Only**: Every quantitative figure reflects actual evaluation logs and test splits (e.g. 100% Recall@5, 0.944 MRR, 14.7ms latency in MuseGuide; 86.99% accuracy on 2,043,926 test reviews in ReviewRadar; 46% 9-class mIoU in RGB-T).
* **ATS Resume Integration**: Prominently features the newly generated, verified one-page resume (`/assets/Pankaj_Jhajhria_AI_ML_Resume.pdf`).

---

## 🏗️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | Next.js 16 (App Router, Turbopack, React 19) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 + Vanilla CSS Design Tokens |
| **3D & Graphics** | Three.js (`three`, `@types/three`) |
| **Icons** | Lucide React + Custom SVG Brand Components |
| **Deployment** | Vercel (Root Directory: `portfolio-site`) |

---

## 🚀 Local Development & Build Commands

Inside `portfolio-site/`:

```powershell
# 1. Install dependencies
npm install

# 2. Start local development server (http://localhost:3000)
npm run dev

# 3. Compile optimized production build (TypeScript & static prerendering)
npm run build

# 4. Run local production server
npm start
```

---

## ☁️ Vercel Deployment Instructions

This website lives inside `Overview_Repo/portfolio-site/` and is configured for seamless deployment on Vercel:

### Option A: Via Vercel Web Dashboard (Recommended)

1. Log in to [Vercel](https://vercel.com/) with account **`pk-flamer`**.
2. Click **"Add New..."** > **"Project"**.
3. Import the Git repository containing `Overview_Repo`.
4. In the **Configure Project** screen:
   * **Project Name**: `pankaj-ai-portfolio`
   * **Framework Preset**: `Next.js`
   * **Root Directory**: Click **Edit** and select **`portfolio-site`** (Crucial step!).
5. Click **"Deploy"**. Vercel will automatically detect the Next.js App Router, run `npm install`, compile the static routes, and publish the live production URL.

### Option B: Via Vercel CLI

```powershell
cd portfolio-site
vercel login
vercel --prod
```

---

## 📂 Project Structure

```text
portfolio-site/
├── app/
│   ├── layout.tsx         # Global layout with SEO metadata & OpenGraph
│   ├── page.tsx           # Assembles all portfolio sections
│   ├── globals.css        # Dark graphite theme & custom utilities
│   ├── not-found.tsx      # Custom 404 page
│   ├── robots.ts          # Search engine indexing rules
│   └── sitemap.ts         # Automated XML sitemap
├── components/
│   ├── common/            # Custom SVG Brand Icons (GitHub, LinkedIn)
│   ├── navigation/        # Glassmorphism Navbar & Mobile Drawer
│   ├── hero/              # 3D Three.js canvas & Hero text/CTAs
│   ├── about/             # About & engineering principles
│   ├── focus/             # 4 core engineering domains
│   ├── projects/          # Featured projects & Additional work
│   ├── skills/            # Skills matrix (Applied vs. Exploring)
│   ├── experience/        # CoolieMate startup & IIITDM education
│   ├── resume/            # Prominent resume download/view CTA
│   ├── contact/           # Direct email & verified social links
│   └── footer/            # Dynamic year & back-to-top button
├── data/
│   └── portfolioData.ts   # Centralized typed data file
└── public/
    └── assets/
        └── Pankaj_Jhajhria_AI_ML_Resume.pdf   # Verified ATS resume
```
