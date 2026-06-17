import { useEffect, useRef, useState } from 'react'
import { Globe, Server, Brain, Database, GitBranch, Terminal } from 'lucide-react'

function useInView() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, inView]
}

const expertises = [
  {
    icon: <Globe size={28} />,
    num: '01',
    title: 'Frontend Development',
    desc: 'Crafting responsive, interactive UIs with React, Next.js, Redux, and Tailwind CSS. Specialist in WebSocket-based real-time interfaces and TensorFlow.js computer vision in-browser.',
    tags: ['React.js', 'Next.js', 'TypeScript', 'TailwindCSS', 'Redux'],
  },
  {
    icon: <Server size={28} />,
    num: '02',
    title: 'Backend Development',
    desc: 'Building secure REST APIs, authentication systems, and server-side apps. Experienced with Node.js, Express, FastAPI, and Socket.io for real-time event-driven architectures.',
    tags: ['Node.js', 'FastAPI', 'Express.js', 'Socket.io', 'REST APIs'],
  },
  {
    icon: <Brain size={28} />,
    num: '03',
    title: 'AI & Machine Learning',
    desc: 'Integrating OpenAI APIs, building NLP-driven applications, and running computer vision pipelines with MediaPipe and TensorFlow.js — all client-side, zero backend latency.',
    tags: ['OpenAI API', 'MediaPipe', 'TensorFlow.js', 'Prompt Engineering', 'Computer Vision'],
  },
  {
    icon: <Database size={28} />,
    num: '04',
    title: 'Database & Cloud',
    desc: 'Schema-driven data access with Prisma ORM, real-time data with Firebase, and full-text queries with PostgreSQL and MongoDB. Deployed on Vercel with CI/CD.',
    tags: ['PostgreSQL', 'MongoDB', 'Firebase', 'Prisma ORM', 'Vercel'],
  },
  {
    icon: <Terminal size={28} />,
    num: '05',
    title: 'Python Engineering',
    desc: 'FastAPI microservices, OpenAI orchestration, and data pipelines in Python. Comfortable with async patterns, dependency injection, and production API design.',
    tags: ['Python', 'FastAPI', 'OpenAI SDK', 'Async', 'REST'],
  },
  {
    icon: <GitBranch size={28} />,
    num: '06',
    title: 'Mobile & DevOps',
    desc: 'Cross-platform Flutter apps with backend API integration (NIT Surathkal hackathon). Version control via Git/GitHub, Linux workflows, and Android Studio experience.',
    tags: ['Flutter', 'Dart', 'Git', 'GitHub', 'Linux'],
  },
]

export default function Expertise() {
  const [ref, inView] = useInView()
  const [hovered, setHovered] = useState(null)

  return (
    <section id="expertise" ref={ref} style={{
      padding: '100px 48px', background: 'var(--black)',
      position: 'relative'
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64, opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.6s ease' }}>
          <span style={{ fontSize: 13, color: 'var(--red)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>What I Do</span>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 800, marginTop: 8, lineHeight: 1.2, color: 'var(--white)' }}>
          Building Modern Digital<br /><span style={{ color: 'var(--red)' }}>Solutions with Code & AI</span>
          </h2>
          <p style={{ fontSize: 16, color: 'var(--text-muted)', marginTop: 16, maxWidth: 560, margin: '16px auto 0' }}>
            Combining full-stack development, artificial intelligence, and cloud technologies to create scalable and impactful digital experiences.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {expertises.map((ex, i) => (
            <div key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                padding: 28, borderRadius: 20,
                background: hovered === i ? 'rgba(232,39,42,0.08)' : 'rgba(255,255,255,0.02)',
                border: hovered === i ? '1px solid rgba(232,39,42,0.4)' : '1px solid rgba(255,255,255,0.06)',
                cursor: 'default', transition: 'all 0.3s ease',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(40px)',
                transitionDelay: `${i * 0.08}s`,
              }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: 'rgba(232,39,42,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--red)', transition: 'background 0.3s',
                  ...(hovered === i ? { background: 'rgba(232,39,42,0.25)' } : {})
                }}>
                  {ex.icon}
                </div>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 40, fontWeight: 800, color: 'rgba(255,255,255,0.04)', lineHeight: 1 }}>{ex.num}</span>
              </div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 700, marginBottom: 10 }}>{ex.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 16 }}>{ex.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {ex.tags.map(t => (
                  <span key={t} style={{
                    fontSize: 11, padding: '4px 10px', borderRadius: 20,
                    background: 'rgba(232,39,42,0.08)', color: hovered === i ? '#ff8889' : 'var(--text-muted)',
                    border: '1px solid rgba(232,39,42,0.15)', transition: 'color 0.3s'
                  }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #expertise > div > div:last-child { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          #expertise > div > div:last-child { grid-template-columns: 1fr !important; }
          #expertise { padding: 60px 24px !important; }
        }
      `}</style>
    </section>
  )
}