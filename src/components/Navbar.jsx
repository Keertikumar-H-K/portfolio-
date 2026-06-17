import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = ['Home', 'About', 'Expertise', 'Skills', 'Projects', 'Certifications', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setOpen(false)
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: scrolled ? '12px 48px' : '20px 48px',
        background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(232,39,42,0.2)' : 'none',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'all 0.3s ease'
      }}>
        <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }} onClick={() => scrollTo('home')}>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 22, color: 'white' }}>Keerti</span>
          <span style={{ color: 'var(--red)', fontSize: 28, lineHeight: 1, marginTop: -4 }}>.</span>
        </div>

        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="nav-links">
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)}
              style={{ background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: 14, fontWeight: 500, cursor: 'pointer', transition: 'color 0.2s', fontFamily: "'Inter', sans-serif" }}
              onMouseEnter={e => e.target.style.color = 'white'}
              onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
            >{l}</button>
          ))}
        </div>

        <button onClick={() => scrollTo('contact')} style={{
          background: 'var(--red)', border: 'none', color: 'white', padding: '10px 24px',
          borderRadius: 50, fontWeight: 600, fontSize: 14, cursor: 'pointer',
          transition: 'all 0.2s', fontFamily: "'Inter', sans-serif"
        }}
          onMouseEnter={e => { e.target.style.background = 'var(--red-light)'; e.target.style.transform = 'scale(1.05)' }}
          onMouseLeave={e => { e.target.style.background = 'var(--red)'; e.target.style.transform = 'scale(1)' }}
          className="hire-btn"
        >Hire Me</button>

        <button onClick={() => setOpen(!open)} className="menu-btn"
          style={{ display: 'none', background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: 4 }}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div style={{
          position: 'fixed', top: 64, left: 0, right: 0, zIndex: 999,
          background: 'rgba(10,10,10,0.98)', backdropFilter: 'blur(20px)',
          padding: '20px 32px', display: 'flex', flexDirection: 'column', gap: 16,
          borderBottom: '1px solid rgba(232,39,42,0.2)'
        }}>
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)}
              style={{ background: 'none', border: 'none', color: 'var(--text)', fontSize: 16, fontWeight: 500, cursor: 'pointer', textAlign: 'left', fontFamily: "'Inter', sans-serif", padding: '8px 0' }}>
              {l}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .hire-btn { display: none !important; }
          .menu-btn { display: block !important; }
        }
      `}</style>
    </>
  )
}