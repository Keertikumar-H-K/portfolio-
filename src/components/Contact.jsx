import { useRef, useState } from 'react'
import { Mail, Phone, MapPin, Send, Linkedin, Github, CheckCircle, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // 'loading' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('https://portfolio-2bqe.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%', padding: '14px 18px', borderRadius: 12, fontSize: 14,
    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
    color: 'white', outline: 'none', fontFamily: "'Inter', sans-serif",
    transition: 'border-color 0.2s', boxSizing: 'border-box'
  }

  return (
    <section id="contact" style={{ padding: '100px 48px', background: 'var(--black)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -200, right: -200, width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,39,42,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span style={{ fontSize: 13, color: 'var(--red)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Get In Touch</span>
         <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 800, marginTop: 8, color: 'var(--white)' }}>
  Let's Build Something<br /><span style={{ color: 'var(--red)' }}>Together</span>
</h2>
          <p style={{ fontSize: 16, color: 'var(--text-muted)', marginTop: 16, maxWidth: 480, margin: '16px auto 0' }}>
            I'm actively looking for full-time opportunities. Whether you have a project, a role, or just want to connect — my inbox is open.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 60 }}>
          {/* Left info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {[
              { icon: <Mail size={20} />, label: 'Email', value: 'keertikumar543@gmail.com', href: 'mailto:keertikumar543@gmail.com' },
              
              { icon: <MapPin size={20} />, label: 'Location', value: 'Bengaluru, Karnataka', href: null },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(232,39,42,0.1)', border: '1px solid rgba(232,39,42,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--red)', flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 500, marginBottom: 2, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{item.label}</div>
                  {item.href ? (
                    <a href={item.href} style={{ color: 'var(--text)', fontSize: 15, fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.target.style.color = 'var(--red)'}
                      onMouseLeave={e => e.target.style.color = 'var(--text)'}>{item.value}</a>
                  ) : (
                    <span style={{ color: 'var(--text)', fontSize: 15, fontWeight: 500 }}>{item.value}</span>
                  )}
                </div>
              </div>
            ))}

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 24, marginTop: 8 }}>
              <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 16 }}>Find me on</p>
              <div style={{ display: 'flex', gap: 12 }}>
                {[
                  { href: 'https://www.linkedin.com/in/keertikumar-h-k-363a88327/', icon: <Linkedin size={20} />, label: 'LinkedIn' },
                  { href: 'https://github.com/Keertikumar-H-K', icon: <Github size={20} />, label: 'GitHub' },
                  { href: 'https://leetcode.com/u/Keertikumar_01/', icon: '🧩', label: 'LeetCode' },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                    style={{
                      display: 'flex', alignItems: 'center', gap: 8, padding: '10px 18px',
                      background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: 50, color: 'var(--text-muted)', fontSize: 13, fontWeight: 500,
                      textDecoration: 'none', transition: 'all 0.2s'
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(232,39,42,0.1)'; e.currentTarget.style.borderColor = 'rgba(232,39,42,0.4)'; e.currentTarget.style.color = 'white' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'var(--text-muted)' }}>
                    {s.icon} {s.label}
                  </a>
                ))}
              </div>
            </div>

            <div style={{ padding: 20, borderRadius: 16, background: 'rgba(74,222,128,0.06)', border: '1px solid rgba(74,222,128,0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80', animation: 'ping 2s infinite' }} />
                <span style={{ fontSize: 13, color: '#4ade80', fontWeight: 600 }}>Open to Work</span>
              </div>
              <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.5 }}>Actively looking for Full Stack / Backend roles. Graduating June 2026.</p>
            </div>
          </div>

          {/* Right: Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div>
                <label style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 500, display: 'block', marginBottom: 6 }}>Your Name</label>
                <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required placeholder="" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'rgba(232,39,42,0.5)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'} />
              </div>
              <div>
                <label style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 500, display: 'block', marginBottom: 6 }}>Email Address</label>
                <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required placeholder="" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'rgba(232,39,42,0.5)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'} />
              </div>
            </div>

            <div>
              <label style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 500, display: 'block', marginBottom: 6 }}>Subject</label>
              <input value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} required placeholder="" style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'rgba(232,39,42,0.5)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'} />
            </div>

            <div>
              <label style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 500, display: 'block', marginBottom: 6 }}>Message</label>
              <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required rows={6}
                placeholder=""
                style={{ ...inputStyle, resize: 'vertical', minHeight: 150 }}
                onFocus={e => e.target.style.borderColor = 'rgba(232,39,42,0.5)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'} />
            </div>

            <button type="submit" disabled={status === 'loading'}
              style={{
                background: status === 'success' ? '#10b981' : 'var(--red)',
                border: 'none', color: 'white', padding: '16px 36px', borderRadius: 50,
                fontWeight: 700, fontSize: 15, cursor: status === 'loading' ? 'wait' : 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                transition: 'all 0.2s', alignSelf: 'flex-start', fontFamily: "'Inter', sans-serif",
                opacity: status === 'loading' ? 0.7 : 1
              }}
              onMouseEnter={e => { if (status !== 'loading') e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
              {status === 'loading' ? <>Sending... <span style={{ animation: 'spin 1s linear infinite', display: 'inline-block' }}>⟳</span></> :
                status === 'success' ? <><CheckCircle size={18} /> Message Sent!</> :
                  <><Send size={18} /> Send Message</>}
            </button>

            {status === 'error' && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 18px', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 12, fontSize: 14, color: '#fca5a5' }}>
                <AlertCircle size={16} /> Message failed. Email me directly at keertikumar543@gmail.com
              </div>
            )}
          </form>
        </div>
      </div>

      <style>{`
        @keyframes ping { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @media (max-width: 900px) {
          #contact > div > div:last-child { grid-template-columns: 1fr !important; }
          #contact { padding: 60px 24px !important; }
        }
      `}</style>
    </section>
  )
}