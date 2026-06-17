export default function Footer() {
  return (
    <footer style={{
      padding: '32px 48px', background: 'var(--dark)',
      borderTop: '1px solid rgba(255,255,255,0.04)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: 16
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 18 }}>Keerti</span>
        <span style={{ color: 'var(--red)', fontSize: 24, lineHeight: 1 }}>.</span>
      </div>
      <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>
        Built with React.js · © {new Date().getFullYear()} Keerti Kumar HK
      </p>
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ background: 'rgba(232,39,42,0.1)', border: '1px solid rgba(232,39,42,0.3)', color: 'var(--red)', padding: '8px 18px', borderRadius: 50, fontSize: 13, fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s', fontFamily: "'Inter', sans-serif" }}
        onMouseEnter={e => { e.target.style.background = 'var(--red)'; e.target.style.color = 'white' }}
        onMouseLeave={e => { e.target.style.background = 'rgba(232,39,42,0.1)'; e.target.style.color = 'var(--red)' }}>
        ↑ Back to Top
      </button>

      <style>{`
        @media (max-width: 600px) {
          footer { padding: 24px !important; flex-direction: column; text-align: center; }
        }
      `}</style>
    </footer>
  )
}