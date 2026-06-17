import { useEffect, useRef, useState } from 'react'
import { Github, ExternalLink, Play, Image } from 'lucide-react'

function useInView() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold: 0.05 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, inView]
}

const projects = [
  {
    id: 1,
    title: 'CodeSync',
    subtitle: 'Live Collaborative Coding Platform',
    desc: 'Production-deployed collaborative editor enabling simultaneous multi-developer coding via WebSocket synchronisation. Monaco Editor delivers VS Code-like syntax highlighting and auto-complete in-browser with sub-100ms latency via Socket.io on Vercel.',
    tags: ['React', 'Node.js', 'Socket.io', 'Monaco Editor', 'Vercel'],
    stat: 'Live & Deployed on Vercel',
    statColor: '#4ade80',
    github: 'https://github.com/Keertikumar-H-K',
    live: 'https://realtime-code-editor-alpha.vercel.app/',
    isLive: true,
    featured: true,
    image: '/projects/codesync.png',
    color: '#7c3aed',
  },
  {
    id: 2,
    title: 'AI Fitness Coach',
    subtitle: 'GPT-Powered Workout & Diet Planner',
    desc: 'AI coaching platform generating personalised workout and diet plans via GPT models from user goals and biometric input. Next.js frontend with goal-tracking dashboard enables users to review, adjust, and monitor AI-generated plans over time.',
    tags: ['Next.js', 'TypeScript', 'OpenAI API', 'GPT', 'AI'],
    stat: 'GPT-Powered Personalisation',
    statColor: '#a78bfa',
    github: 'https://github.com/Keertikumar-H-K',
    live: 'https://your-aifitness-link.vercel.app',
    isLive: true,
    image: '/projects/aifitness.png',
    color: '#a78bfa',
  },
  {
    id: 3,
    title: 'YogaAlign',
    subtitle: 'Real-Time Pose Detection & Correction',
    desc: 'Real-time yoga and fitness pose detection running full computer vision inference client-side via MediaPipe Pose and TensorFlow.js, eliminating backend round-trip latency. Live alignment feedback enables posture self-correction during workouts.',
    tags: ['React', 'TensorFlow.js', 'MediaPipe', 'Node.js', 'Computer Vision'],
    stat: 'Zero Backend Latency — Client-Side AI',
    statColor: '#34d399',
    github: 'https://github.com/Keertikumar-H-K',
    live: 'https://your-yogaalign-link.vercel.app',
    isLive: true,
    image: '/projects/yogaalign.png',
    color: '#10b981',
  },
  {
    id: 4,
    title: 'Indian Cafe',
    subtitle: 'Full-Stack Coffee Shop Website',
    desc: 'Full-stack cafe website with user authentication (login/signup), product browsing, menu pages, and an online ordering flow. Built with vanilla HTML, CSS and JavaScript with a clean dark theme and responsive design.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Auth'],
    stat: 'Full Auth + E-Commerce Flow',
    statColor: '#f59e0b',
    github: 'https://github.com/Keertikumar-H-K',
    live: 'https://your-indiancafe-link.vercel.app',
    isLive: true,
    image: '/projects/indiancafe.png',
    color: '#f59e0b',
  },
  {
    id: 5,
    title: 'TaskHub',
    subtitle: 'Smart Task Manager with Priority Tracking',
    desc: 'Smart task manager with priority labels, category filtering, due dates, and progress tracking. Features dark/light mode toggle, user profiles with streak tracking, and full authentication. Type-safe full-stack with PostgreSQL.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'AI'],
    stat: 'Type-Safe Full-Stack TypeScript',
    statColor: '#60a5fa',
    github: 'https://github.com/Keertikumar-H-K',
    live: 'https://your-taskhub-link.vercel.app',
    isLive: true,
    image: '/projects/taskhub.png',
    color: '#3b82f6',
  },
]
function ProjectCard({ project, index, inView }) {
  const [imgModal, setImgModal] = useState(false)
  const isFeatured = project.featured

  return (
    <div style={{
      borderRadius: 24, overflow: 'hidden',
      background: 'rgba(255,255,255,0.02)',
      border: `1px solid ${isFeatured ? `${project.color}44` : 'rgba(255,255,255,0.06)'}`,
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(50px)',
      transition: `all 0.6s ease ${index * 0.12}s`,
      gridColumn: isFeatured ? 'span 2' : 'span 1',
      display: isFeatured ? 'grid' : 'flex',
      gridTemplateColumns: isFeatured ? '1fr 1fr' : undefined,
      flexDirection: isFeatured ? undefined : 'column',
    }}>
      {/* Image area */}
      <div style={{
        position: 'relative',
        background: `linear-gradient(135deg, ${project.color}18 0%, rgba(0,0,0,0.3) 100%)`,
        minHeight: isFeatured ? 320 : 200,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: project.image ? 'pointer' : 'default',
        overflow: 'hidden',
      }} onClick={() => project.image && setImgModal(true)}>
        {project.image ? (
          <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', position: 'absolute', inset: 0 }} />
        ) : (
          <div style={{ textAlign: 'center', padding: 32 }}>
            <div style={{
              width: 80, height: 80, borderRadius: 24,
              background: `${project.color}22`, border: `2px solid ${project.color}44`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px',
              fontSize: 36
            }}>
              {['💻', '🏋️', '🧘', '🎙️', '✅'][index]}
            </div>
            <p style={{ fontSize: 12, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'center' }}>
              <Image size={14} /> Add project screenshot to <code style={{ color: project.color }}>/public/projects/</code>
            </p>
          </div>
        )}

        {/* Live badge */}
        {project.isLive && (
          <div style={{
            position: 'absolute', top: 16, left: 16,
            display: 'flex', alignItems: 'center', gap: 6,
            background: 'rgba(74,222,128,0.15)', border: '1px solid rgba(74,222,128,0.4)',
            borderRadius: 50, padding: '6px 14px'
          }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ade80', animation: 'ping 2s infinite' }} />
            <span style={{ fontSize: 12, color: '#4ade80', fontWeight: 600 }}>Live</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div>
          <div style={{ fontSize: 12, color: project.color, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>{project.subtitle}</div>
          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: isFeatured ? 28 : 22, fontWeight: 800, marginBottom: 10 }}>{project.title}</h3>
          <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7 }}>{project.desc}</p>
        </div>

        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: `${project.statColor}14`, borderRadius: 50,
          padding: '6px 14px', border: `1px solid ${project.statColor}30`,
          alignSelf: 'flex-start', marginTop: 4
        }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: project.statColor }} />
          <span style={{ fontSize: 12, color: project.statColor, fontWeight: 600 }}>{project.stat}</span>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {project.tags.map(t => (
            <span key={t} style={{
              fontSize: 12, padding: '4px 12px', borderRadius: 20,
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
              color: 'var(--text-muted)'
            }}>{t}</span>
          ))}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 'auto', paddingTop: 12 }}>
          <a href={project.github} target="_blank" rel="noreferrer"
            style={{
              display: 'flex', alignItems: 'center', gap: 8, padding: '10px 20px',
              background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 50, color: 'var(--text)', fontSize: 13, fontWeight: 600,
              textDecoration: 'none', transition: 'all 0.2s'
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)' }}>
            <Github size={15} /> GitHub
          </a>
          {project.isLive ? (
            <a href={project.live} target="_blank" rel="noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: 8, padding: '10px 20px',
                background: project.color, border: 'none',
                borderRadius: 50, color: 'white', fontSize: 13, fontWeight: 600,
                textDecoration: 'none', transition: 'all 0.2s'
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}>
              <Play size={14} fill="white" /> Live Demo
            </a>
          ) : (
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8, padding: '10px 20px',
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 50, color: 'var(--text-muted)', fontSize: 13, fontWeight: 500
            }}>
              <ExternalLink size={14} /> In Progress
            </div>
          )}
        </div>
      </div>

      {imgModal && project.image && (
        <div onClick={() => setImgModal(false)} style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={project.image} alt={project.title} style={{ maxWidth: '90vw', maxHeight: '80vh', borderRadius: 16 }} />
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  const [ref, inView] = useInView()
  const [filter, setFilter] = useState('All')
  const tags = ['All', 'React', 'AI', 'Python', 'Node.js', 'TypeScript']

  const filtered = filter === 'All' ? projects : projects.filter(p => p.tags.some(t => t.includes(filter)))

  return (
    <section id="projects" ref={ref} style={{ padding: '100px 48px', background: 'var(--black)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48, opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.6s ease' }}>
          <span style={{ fontSize: 13, color: 'var(--red)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Portfolio</span>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 800, marginTop: 8, color: 'var(--white)' }}>
          Things I've <span style={{ color: 'var(--red)' }}>Built</span>
          </h2>
          <p style={{ fontSize: 16, color: 'var(--text-muted)', marginTop: 12, maxWidth: 500, margin: '12px auto 0' }}>
            From production-deployed real-time editors to AI coaching platforms — each project solves a real problem.
          </p>
        </div>

        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 40 }}>
          {tags.map(t => (
            <button key={t} onClick={() => setFilter(t)}
              style={{
                padding: '8px 20px', borderRadius: 50, fontSize: 13, fontWeight: 600, cursor: 'pointer',
                fontFamily: "'Inter', sans-serif", transition: 'all 0.2s',
                background: filter === t ? 'var(--red)' : 'rgba(255,255,255,0.04)',
                border: filter === t ? '1px solid var(--red)' : '1px solid rgba(255,255,255,0.08)',
                color: filter === t ? 'white' : 'var(--text-muted)'
              }}>
              {t}
            </button>
          ))}
        </div>

        <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
          {filtered.map((p, i) => <ProjectCard key={p.id} project={p} index={i} inView={inView} />)}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48, opacity: inView ? 1 : 0, transition: 'opacity 0.6s ease 0.4s' }}>
          <a href="https://github.com/Keertikumar-H-K" target="_blank" rel="noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '14px 32px', borderRadius: 50,
              border: '2px solid rgba(255,255,255,0.12)', color: 'var(--text)',
              textDecoration: 'none', fontSize: 15, fontWeight: 600, transition: 'all 0.2s'
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.color = 'var(--red)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'var(--text)' }}>
            <Github size={18} /> View All on GitHub
          </a>
        </div>
      </div>

      <style>{`
        @keyframes ping { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @media (max-width: 900px) {
          .projects-grid { grid-template-columns: 1fr !important; }
          .projects-grid > div { grid-column: span 1 !important; grid-template-columns: 1fr !important; }
          #projects { padding: 60px 24px !important; }
        }
        @media (max-width: 480px) {
          .projects-grid { gap: 16px !important; }
        }
      `}</style>
    </section>
  )
}