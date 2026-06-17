import { useEffect, useRef, useState } from 'react'
import { MapPin, GraduationCap, Briefcase, Award } from 'lucide-react'

function useInView(threshold = 0.2) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, inView]
}

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" ref={ref} style={{
      padding: '100px 48px', background: 'var(--dark)',
      position: 'relative', overflow: 'hidden'
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          {/* Left */}
          <div style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateX(0)' : 'translateX(-40px)', transition: 'all 0.7s ease' }}>
            <span style={{ fontSize: 13, color: 'var(--red)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>About Me</span>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 800, marginTop: 8, marginBottom: 24, lineHeight: 1.2, color: 'var(--white)' }}>
            Turning Ideas Into<br /><span style={{ color: 'var(--red)' }}>Real Products</span>
            </h2>
           <p style={{ fontSize: 16, color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 20 }}>
  Recently graduated with a B.Tech in Computer Science from VTU (CGPA: 8.47) and a Full Stack Developer passionate about building <strong style={{ color: 'var(--text)' }}>scalable, AI-powered web applications</strong>.
</p>

<p style={{ fontSize: 16, color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 32 }}>
  Skilled in React, Node.js, Python, FastAPI, and modern web technologies, with hands-on experience developing production-ready applications, RESTful APIs, and intelligent software solutions. I enjoy transforming complex ideas into seamless digital experiences that deliver real value to users and businesses.
</p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              {[
                { icon: <MapPin size={16} />, text: 'Bengaluru, Karnataka' },
                { icon: <GraduationCap size={16} />, text: 'VTU — B.Tech CSE, 2026' },
                { icon: <Briefcase size={16} />, text: 'SphereNeX Intern' },
                { icon: <Award size={16} />, text: 'NIT Surathkal Hackathon' },
              ].map(item => (
                <div key={item.text} style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: '8px 16px', background: 'rgba(255,255,255,0.04)',
                  borderRadius: 50, border: '1px solid rgba(255,255,255,0.08)',
                  fontSize: 13, color: 'var(--text-muted)'
                }}>
                  <span style={{ color: 'var(--red)' }}>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Timeline */}
          <div style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateX(0)' : 'translateX(40px)', transition: 'all 0.7s ease 0.2s' }}>
            <div style={{ position: 'relative', paddingLeft: 32 }}>
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 2, background: 'linear-gradient(to bottom, var(--red), transparent)' }} />

              {[
                {
                  date: 'Feb 2026 – May 2026',
                  title: 'Full Stack Dev Intern',
                  company: 'SphereNeX ⭐ Startup India',
                  desc: 'Built production features with React, Node.js & relational databases. Implemented REST APIs, authentication, and responsive UI components.',
                  color: 'var(--red)'
                },
                {
                  date: 'Sept 2024',
                  title: 'Hackathon — NIT Surathkal',
                  company: '5-Member Team',
                  desc: 'Led Flutter frontend & integrated backend APIs under tight hackathon constraints.',
                  color: '#f59e0b'
                },
                {
                  date: '2022 – 2026',
                  title: 'B.Tech — CS & Engineering',
                  company: 'Visvesvaraya Technological University',
                  desc: 'CGPA: 8.47 / 10. Studied DSA, DBMS, OS, OOP, Network Security, AI & Web Dev.',
                  color: '#3b82f6'
                },
              ].map((item, i) => (
                <div key={i} style={{ marginBottom: 36, position: 'relative' }}>
                  <div style={{ position: 'absolute', left: -40, top: 4, width: 16, height: 16, borderRadius: '50%', background: item.color, border: '3px solid var(--dark)', boxShadow: `0 0 0 4px ${item.color}22` }} />
                  <div style={{ fontSize: 12, color: item.color, fontWeight: 600, marginBottom: 4, letterSpacing: '0.05em' }}>{item.date}</div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 700, marginBottom: 2 }}>{item.title}</div>
                  <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 8 }}>{item.company}</div>
                  <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about > div > div { grid-template-columns: 1fr !important; gap: 40px !important; }
          #about { padding: 60px 24px !important; }
        }
      `}</style>
    </section>
  )
}