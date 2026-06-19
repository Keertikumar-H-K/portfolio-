<div align="center">

# ⚡ Keerti Kumar HK — Personal Portfolio

### Full Stack Developer · Python Engineer · AI-Integrated Applications

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit_Site-E8272A?style=for-the-badge)](https://portfolio-nine-drab-96i54lsaq0.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/keertikumar-h-k-363a88327/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github)](https://github.com/Keertikumar-H-K)

</div>

---

## 🖥️ Preview

🖥️ Preview

🚀 Live Site:
https://portfolio-54f6j0v3z-keertikumar-h-ks-projects.vercel.app/


### Homepage

![Portfolio Homepage](./public/portfolio-preview.png)

### Projects Section

![Portfolio Projects](./public/portfolio-preview1.png)

| Section | Preview |
|---------|---------|
| Hero | Animated typewriter · Stats card · Intro video |
| About | Timeline (Internship → Hackathon → Education) |
| Expertise | 6 skill domains with hover cards |
| Skills | Tabbed animated progress bars |
| Projects | Filterable cards with Live/GitHub links |
| Certifications | SphereNeX · Udemy · Hackathon badge |
| Contact | Form → email delivered to inbox |

---

## 🏗️ Tech Stack

### Frontend
| Tech | Purpose |
|------|---------|
| **React.js 19** | UI framework |
| **Vite 8** | Build tool & dev server |
| **Lucide React** | Icon library |
| **CSS Variables** | Theming (dark mode, red accent) |
| **Intersection Observer** | Scroll-triggered animations |

### Backend
| Tech | Purpose |
|------|---------|
| **Node.js + Express** | API server |
| **Nodemailer** | Email delivery via Gmail |
| **CORS** | Cross-origin requests |
| **dotenv** | Secrets management |

---

## 📁 Project Structure

```
keertikumar-portfolio/
│
├── 📂 src/
│   ├── 📂 components/
│   │   ├── Navbar.jsx          # Fixed nav with scroll detection
│   │   ├── Hero.jsx            # Typewriter · stats · intro video modal
│   │   ├── About.jsx           # Bio + experience timeline
│   │   ├── Expertise.jsx       # 6 expertise cards (hover effects)
│   │   ├── Skills.jsx          # Tabbed skill bars + tech badges
│   │   ├── Projects.jsx        # Filterable project showcase
│   │   ├── Certifications.jsx  # Certs + hackathon highlight
│   │   ├── Contact.jsx         # Form → backend → Gmail
│   │   └── Footer.jsx
│   ├── App.jsx
│   └── index.css               # Global styles + CSS variables
│
├── 📂 backend/
│   ├── server.js               # Express API — contact form email handler
│   ├── .env.example            # Environment variable template
│   └── package.json
│
├── 📂 public/
│   ├── intro-video.mp4         # ← Add your intro video here
│   └── 📂 projects/            # ← Add project screenshots here
│       ├── code-editor.png
│       ├── ai-fitness.png
│       ├── yogaalign.png
│       ├── voicebot.png
│       └── todo.png
│
├── .env.example
├── .gitignore
└── package.json
```

---

## 🚀 Local Setup

### Prerequisites
- Node.js 18+
- npm 9+
- Gmail account (for contact form)

### 1. Clone the repository

```bash
git clone https://github.com/keertikumar/portfolio.git
cd portfolio
```

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Set up & start the backend

```bash
cd backend
npm install
cp .env.example .env
```

Edit `backend/.env`:
```env
EMAIL_USER=keertikumar543@gmail.com
EMAIL_PASS=your_gmail_app_password
PORT=5000
```

> **How to get Gmail App Password:**
> Google Account → Security → 2-Step Verification → App Passwords → Generate for "Mail"

Start the backend:
```bash
npm start
# Server running at http://localhost:5000
```

### 4. Start the frontend

```bash
# In root directory
npm run dev
# Site at http://localhost:5173
```

---

## 📧 Contact Form Flow

```
User fills form → POST /api/contact
       ↓
Express validates fields
       ↓
Nodemailer sends 2 emails:
  ├── 🔔 Notification to keertikumar543@gmail.com (with reply button)
  └── ✅ Auto-reply to the sender (professional confirmation)
```

---

## 🌐 Deployment

### Frontend → Vercel (free, recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from root
vercel

# Production deploy
vercel --prod
```

Set environment variable in Vercel dashboard:
```
VITE_BACKEND_URL = https://your-backend.railway.app
```

### Backend → Railway (free tier)

1. Push `backend/` folder to a separate GitHub repo (or use a monorepo)
2. Go to [railway.app](https://railway.app) → New Project → Deploy from GitHub
3. Add environment variables: `EMAIL_USER`, `EMAIL_PASS`, `PORT`
4. Copy the Railway URL → paste into Vercel's `VITE_BACKEND_URL`

> **Alternative backend hosts:** Render · Fly.io · Heroku

---

## 🎨 Customisation Guide

| What to change | File | Variable/Line |
|---|---|---|
| Your name | `Navbar.jsx`, `Hero.jsx`, `Footer.jsx` | Text content |
| Intro video | `public/intro-video.mp4` | Replace file |
| Project images | `public/projects/*.png` | Add screenshots |
| GitHub links | `Projects.jsx` | `github:` field per project |
| Live demo links | `Projects.jsx` | `live:` field per project |
| Email recipient | `backend/server.js` | Line with `to:` |
| Social links | `Contact.jsx`, `Hero.jsx` | `href` attributes |
| Color scheme | `src/index.css` | `--red`, `--black` etc. |

---

## 📦 Adding Your Project Screenshots

Drop images into `public/projects/` and update `Projects.jsx`:

```jsx
// In Projects.jsx, find your project and add:
{
  title: 'Realtime Code Editor',
  image: '/projects/code-editor.png',   // ← add this line
  ...
}
```

---

## 📄 License

MIT © 2026 Keerti Kumar HK

---

<div align="center">

**⭐ If this helped you, consider starring the repo!**

Made with ❤️ by [Keerti Kumar HK](https://github.com/keertikumar)

</div>