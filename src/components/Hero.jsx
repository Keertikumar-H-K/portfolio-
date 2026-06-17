import { ArrowDown, Play, Linkedin, Code2, Volume2, VolumeX, Download } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const roles = ['Full Stack Developer', 'Python Engineer', 'AI App Builder', 'React Specialist']

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const [muted, setMuted] = useState(true)
  const videoRef = useRef(null)

  useEffect(() => {
    const role = roles[roleIdx]
    if (typing) {
      if (displayed.length < role.length) {
        const t = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 60)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 1800)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
        return () => clearTimeout(t)
      } else {
        setRoleIdx((roleIdx + 1) % roles.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, roleIdx])

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted
      setMuted(!muted)
    }
  }

  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden', padding: '0 48px'
    }}>
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', zIndex: 0
        }}
      >
        <source src="/intro-video.mp4" type="video/mp4" />
      </video>

     {/* Lighter overlay */}
<div style={{
  position: 'absolute', inset: 0, zIndex: 1,
  background: 'linear-gradient(135deg, rgba(10,10,10,0.25) 0%, rgba(17,17,17,0.15) 40%, rgba(26,5,5,0.25) 100%)'
}} />

{/* Grid pattern */}
<div style={{
  position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
  backgroundImage: 'linear-gradient(rgba(232,39,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(232,39,42,0.04) 1px, transparent 1px)',
  backgroundSize: '60px 60px'
}} />

{/* Glow blobs */}
<div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}>
  <div style={{
    position: 'absolute', width: 600, height: 600, borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(232,39,42,0.08) 0%, transparent 70%)',
    top: '-10%', right: '-5%', animation: 'pulse 4s ease-in-out infinite'
  }} />
  <div style={{
    position: 'absolute', width: 400, height: 400, borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(232,39,42,0.04) 0%, transparent 70%)',
    bottom: '10%', left: '5%', animation: 'pulse 6s ease-in-out infinite reverse'
  }} />
</div>

      {/* Unmute button - top right like reference */}
      <button onClick={toggleMute} style={{
        position: 'absolute', top: 100, right: 32, zIndex: 10,
        background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.2)',
        borderRadius: '50%', width: 48, height: 48,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', color: 'white', transition: 'all 0.2s',
        flexDirection: 'column', gap: 2
      }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(232,39,42,0.6)'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.5)'}
      >
        {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>
      <span style={{
        position: 'absolute', top: 156, right: 18, zIndex: 10,
        fontSize: 10, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.1em',
        textTransform: 'uppercase', fontWeight: 600
      }}>{muted ? 'Unmute Reel' : 'Mute Reel'}</span>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', width: '100%', paddingTop: 80 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>

          {/* Left Content */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(232,39,42,0.12)', border: '1px solid rgba(232,39,42,0.3)', borderRadius: 50, padding: '6px 16px', marginBottom: 24 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80', animation: 'ping 2s infinite' }} />
              <span style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 500 }}>Available for opportunities</span>
            </div>

            <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(40px, 5vw, 68px)', fontWeight: 800, lineHeight: 1.1, marginBottom: 12 }}>
              Hi, I'm <span style={{ color: 'var(--red)' }}>Keerti</span><br />
              Kumar HK
            </h1>

            <div style={{ height: 56, marginBottom: 20, display: 'flex', alignItems: 'center' }}>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 600, color: 'var(--text-muted)' }}>
                {displayed}<span style={{ color: 'var(--red)', animation: 'blink 1s step-end infinite' }}>|</span>
              </span>
            </div>

            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, marginBottom: 36, maxWidth: 480 }}>
              Recently graduated B.Tech CSE student building <strong style={{ color: 'white' }}>AI-powered, production-ready web apps</strong> with React, Node.js, Python & FastAPI. 15-week SphereNeX intern, passionate about solving real-world problems.
            </p>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 40 }}>
              <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ background: 'var(--red)', border: 'none', color: 'white', padding: '14px 32px', borderRadius: 50, fontWeight: 700, fontSize: 15, cursor: 'pointer', transition: 'all 0.2s', fontFamily: "'Inter', sans-serif" }}
                onMouseEnter={e => { e.target.style.opacity = '0.85'; e.target.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)' }}>
                View My Work
              </button>
              <a href="/resume.pdf" download="Keerti_Kumar_HK_Resume.pdf"
                style={{ background: 'transparent', border: '2px solid rgba(255,255,255,0.4)', color: 'white', padding: '14px 32px', borderRadius: 50, fontWeight: 600, fontSize: 15, cursor: 'pointer', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: 8, fontFamily: "'Inter', sans-serif", textDecoration: 'none' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; e.currentTarget.style.transform = 'translateY(0)' }}>
                <Download size={16} /> Resume
              </a>
              <button onClick={toggleMute}
                style={{ background: 'transparent', border: '2px solid rgba(255,255,255,0.4)', color: 'white', padding: '14px 32px', borderRadius: 50, fontWeight: 600, fontSize: 15, cursor: 'pointer', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: 8, fontFamily: "'Inter', sans-serif" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; e.currentTarget.style.transform = 'translateY(0)' }}>
                {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                {muted ? 'Unmute Reel' : 'Mute Reel'}
              </button>
            </div>

            <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
              <a href="https://github.com/Keertikumar-H-K" target="_blank" rel="noreferrer"
                style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'white'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/keertikumar-h-k-363a88327/" target="_blank" rel="noreferrer"
                style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'white'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>
                <Linkedin size={22} />
              </a>
              <a href="https://leetcode.com/u/Keertikumar_01/" target="_blank" rel="noreferrer"
                style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'white'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>
                <Code2 size={22} />
              </a>
              <div style={{ width: 1, height: 24, background: 'rgba(255,255,255,0.2)' }} />
  
            </div>
          </div>

          {/* Right: Stats Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'flex-end' }}>
            <div style={{
              background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 24, padding: 32, width: '100%', maxWidth: 380,
              backdropFilter: 'blur(20px)'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 24 }}>
                {[
                  { n: '8.47', label: 'CGPA / 10' },
                  { n: '15wk', label: 'Internship' },
                  { n: '2', label: 'Live Demos' },
                  { n: '5+', label: 'Projects' },
                ].map(s => (
                  <div key={s.label} style={{ textAlign: 'center', padding: '16px', background: 'rgba(232,39,42,0.08)', borderRadius: 12, border: '1px solid rgba(232,39,42,0.15)' }}>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 800, color: 'var(--red)' }}>{s.n}</div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', marginTop: 4, fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{s.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>VTU – B.Tech CSE</span>
                  <span style={{ fontSize: 13, color: 'var(--red)' }}>2022–2026</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {['React', 'Node.js', 'Python', 'FastAPI', 'OpenAI', 'MongoDB'].map(t => (
                    <span key={t} style={{ fontSize: 11, padding: '4px 10px', background: 'rgba(255,255,255,0.08)', borderRadius: 20, color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.12)' }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 60 }}>
          <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.6)', animation: 'bounce 2s infinite' }}>
            <ArrowDown size={24} />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes ping { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes pulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.05)} }
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @media (max-width: 768px) {
          #home > div > div { grid-template-columns: 1fr !important; }
          #home > div > div > div:last-child { display: none !important; }
          #home { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  )
}