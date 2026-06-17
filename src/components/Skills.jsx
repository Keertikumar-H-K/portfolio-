import { useEffect, useRef, useState } from 'react'

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

// ✅ IMPROVED: Replaced fake % bars with real tech groups + honest proficiency labels
const techGroups = [
  {
    label: 'Frontend',
    icon: '🖥️',
    color: '#E8272A',
    techs: [
      { name: 'React.js', note: 'primary' },
      { name: 'Next.js', note: '' },
      { name: 'TypeScript', note: '' },
      { name: 'TailwindCSS', note: '' },
      { name: 'Redux', note: '' },
      { name: 'TensorFlow.js', note: 'CV' },
      { name: 'MediaPipe', note: 'CV' },
    ]
  },
  {
    label: 'Backend & APIs',
    icon: '⚙️',
    color: '#3b82f6',
    techs: [
      { name: 'Node.js', note: 'primary' },
      { name: 'FastAPI', note: 'primary' },
      { name: 'Express.js', note: '' },
      { name: 'Socket.io', note: 'WS' },
      { name: 'REST APIs', note: '' },
      { name: 'Prisma ORM', note: '' },
    ]
  },
  {
    label: 'Databases & Cloud',
    icon: '🗄️',
    color: '#10b981',
    techs: [
      { name: 'PostgreSQL', note: '' },
      { name: 'MongoDB', note: '' },
      { name: 'Firebase', note: '' },
      { name: 'Vercel', note: 'CI/CD' },
      { name: 'SQL', note: '' },
    ]
  },
  {
    label: 'AI & Languages',
    icon: '🤖',
    color: '#f59e0b',
    techs: [
      { name: 'Python', note: 'primary' },
      { name: 'OpenAI API', note: '' },
      { name: 'Prompt Engineering', note: '' },
      { name: 'JavaScript', note: 'primary' },
      { name: 'Dart / Flutter', note: '' },
    ]
  },
  {
    label: 'Tools & DevOps',
    icon: '🛠️',
    color: '#a78bfa',
    techs: [
      { name: 'Git / GitHub', note: '' },
      { name: 'Linux', note: '' },
      { name: 'Android Studio', note: '' },
      { name: 'VS Code', note: '' },
      { name: 'Vite', note: '' },
    ]
  },
]

function TechGrid({ group, inView, delay }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
      borderRadius: 20, padding: 24,
      opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)',
      transition: `all 0.5s ease ${delay}s`
    }}>
      {/* Card header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
        <div style={{ width: 36, height: 36, borderRadius: 10, background: `${group.color}18`, border: `1px solid ${group.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>
          {group.icon}
        </div>
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 15, color: 'var(--white)' }}>{group.label}</span>
      </div>

      {/* Tech tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
        {group.techs.map(t => (
          <span key={t.name} style={{
            display: 'inline-flex', alignItems: 'center', gap: 5,
            padding: '6px 12px', borderRadius: 8, fontSize: 13, fontWeight: 500,
            background: t.note === 'primary' ? `${group.color}18` : 'rgba(255,255,255,0.04)',
            border: t.note === 'primary' ? `1px solid ${group.color}40` : '1px solid rgba(255,255,255,0.08)',
            color: t.note === 'primary' ? 'var(--white)' : 'var(--text-muted)',
            transition: 'all 0.2s', cursor: 'default'
          }}
            onMouseEnter={e => { e.currentTarget.style.background = `${group.color}20`; e.currentTarget.style.borderColor = `${group.color}50`; e.currentTarget.style.color = 'var(--white)' }}
            onMouseLeave={e => {
              e.currentTarget.style.background = t.note === 'primary' ? `${group.color}18` : 'rgba(255,255,255,0.04)'
              e.currentTarget.style.borderColor = t.note === 'primary' ? `${group.color}40` : 'rgba(255,255,255,0.08)'
              e.currentTarget.style.color = t.note === 'primary' ? 'var(--white)' : 'var(--text-muted)'
            }}>
            {t.name}
            {t.note && t.note !== 'primary' && (
              <span style={{ fontSize: 10, padding: '1px 5px', borderRadius: 4, background: `${group.color}25`, color: group.color, fontWeight: 600 }}>{t.note}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" ref={ref} style={{ padding: '100px 48px', background: 'var(--dark)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56, opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.6s ease' }}>
          <span style={{ fontSize: 13, color: 'var(--red)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Technical Skills</span>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 800, marginTop: 8, color: 'var(--white)' }}>
            Tools I <span style={{ color: 'var(--red)' }}>Master</span>
          </h2>
          <p style={{ fontSize: 15, color: 'var(--text-muted)', marginTop: 12, maxWidth: 460, margin: '12px auto 0' }}>
            Highlighted tags are my primary tools — the ones I reach for first on every project.
          </p>
        </div>

        {/* ✅ NEW: Tech grid — 3 col top row, 2 col bottom row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 20 }}>
          {techGroups.slice(0, 3).map((g, i) => (
            <TechGrid key={g.label} group={g} inView={inView} delay={i * 0.1} />
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
          {techGroups.slice(3).map((g, i) => (
            <TechGrid key={g.label} group={g} inView={inView} delay={(i + 3) * 0.1} />
          ))}
        </div>

        {/* Legend */}
        <div style={{ marginTop: 32, textAlign: 'center', opacity: inView ? 1 : 0, transition: 'opacity 0.6s ease 0.6s' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 20, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 50, padding: '10px 24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 10, height: 10, borderRadius: 3, background: 'rgba(232,39,42,0.3)', border: '1px solid rgba(232,39,42,0.5)', display: 'inline-block' }} />
              <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>Primary / most-used</span>
            </div>
            <div style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.1)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 10, height: 10, borderRadius: 3, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'inline-block' }} />
              <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>Proficient</span>
            </div>
            <div style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.1)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ fontSize: 11, padding: '1px 6px', borderRadius: 4, background: 'rgba(232,39,42,0.2)', color: '#E8272A', fontWeight: 600 }}>tag</span>
              <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>Speciality note</span>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          #skills > div > div:nth-child(3) { grid-template-columns: 1fr 1fr !important; }
          #skills > div > div:nth-child(4) { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          #skills > div > div:nth-child(3) { grid-template-columns: 1fr !important; }
          #skills { padding: 60px 24px !important; }
        }
      `}</style>
    </section>
  )
}