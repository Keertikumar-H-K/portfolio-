import { useEffect, useRef, useState } from 'react'
import { Award, ExternalLink } from 'lucide-react'

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

const certs = [
  { title: 'Full Stack Development', issuer: 'SphereNeX', sub: 'Startup India — 15-Week Programme', color: '#E8272A', emoji: '🚀', link: null },
  { title: 'Python', issuer: 'Udemy', sub: 'UC-95de528a-6858', color: '#3b82f6', emoji: '🐍', link: null },
  { title: 'Web Development Bootcamp', issuer: 'Udemy', sub: 'Full-Stack Web Dev', color: '#10b981', emoji: '🌐', link: null },
  { title: 'Git & GitHub', issuer: 'Udemy', sub: 'Version Control Mastery', color: '#f59e0b', emoji: '📦', link: null },
  { title: 'SQL for Beginners', issuer: 'Udemy', sub: 'Database Fundamentals', color: '#a78bfa', emoji: '🗃️', link: null },
]

export default function Certifications() {
  const [ref, inView] = useInView()

  return (
    <section id="certifications" ref={ref} style={{ padding: '100px 48px', background: 'var(--dark)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56, opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.6s ease' }}>
          <span style={{ fontSize: 13, color: 'var(--red)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Credentials</span>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 800, marginTop: 8, color: 'var(--white)' }}>
  Certifications & <span style={{ color: 'var(--red)' }}>Training</span>
</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {certs.map((c, i) => (
            <div key={i} style={{
              padding: 28, borderRadius: 20,
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(30px)',
              transition: `all 0.5s ease ${i * 0.1}s`,
              display: 'flex', flexDirection: 'column', gap: 12,
              cursor: c.link ? 'pointer' : 'default',
              position: 'relative', overflow: 'hidden'
            }}
              onMouseEnter={e => {
                e.currentTarget.style.background = `${c.color}0D`
                e.currentTarget.style.borderColor = `${c.color}44`
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}>

              {/* Accent corner */}
              <div style={{ position: 'absolute', top: -20, right: -20, width: 80, height: 80, borderRadius: '50%', background: `${c.color}10` }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span style={{ fontSize: 36 }}>{c.emoji}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: `${c.color}14`, border: `1px solid ${c.color}30`, borderRadius: 50, padding: '4px 10px' }}>
                  <Award size={12} color={c.color} />
                  <span style={{ fontSize: 11, color: c.color, fontWeight: 600 }}>{c.issuer}</span>
                </div>
              </div>

              <div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 17, fontWeight: 700, marginBottom: 4, lineHeight: 1.3 }}>{c.title}</h3>
                <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>{c.sub}</p>
              </div>

              {c.link && (
                <a href={c.link} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: c.color, textDecoration: 'none', marginTop: 'auto' }}>
                  <ExternalLink size={13} /> View Certificate
                </a>
              )}
            </div>
          ))}

          {/* Extracurricular Card */}
          <div style={{
            padding: 28, borderRadius: 20, gridColumn: 'span 2',
            background: 'linear-gradient(135deg, rgba(232,39,42,0.08) 0%, rgba(0,0,0,0.2) 100%)',
            border: '1px solid rgba(232,39,42,0.2)',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.5s ease 0.5s',
            display: 'flex', gap: 24, alignItems: 'center'
          }}>
            <span style={{ fontSize: 56, flexShrink: 0 }}>🏆</span>
            <div>
              <div style={{ fontSize: 12, color: 'var(--red)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>Hackathon — Extracurricular</div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 800, marginBottom: 8 }}>NIT Surathkal Hackathon — Sept 2024</h3>
              <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.6 }}>Led Flutter front-end & integrated backend APIs as part of a 5-member team. Delivered a polished Voice Bot demo to judges under tight hackathon constraints.</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #certifications > div > div:last-child { grid-template-columns: repeat(2, 1fr) !important; }
          #certifications > div > div > div:last-child { grid-column: span 2 !important; }
        }
        @media (max-width: 600px) {
          #certifications > div > div:last-child { grid-template-columns: 1fr !important; }
          #certifications > div > div > div:last-child { grid-column: span 1 !important; flex-direction: column !important; }
          #certifications { padding: 60px 24px !important; }
        }
      `}</style>
    </section>
  )
}