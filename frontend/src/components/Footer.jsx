import { FaHeart, FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ padding: '1rem 0 1.6rem', marginTop: '1.4rem' }}>
      <div className="container">
        <div
          className="glass-stage"
          style={{
            padding: '1.5rem 1.2rem',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          {/* Subtle corner marks */}
          <div className="corner-bracket-tl" />
          <div className="corner-bracket-tr" />
          <div className="corner-bracket-bl" />
          <div className="corner-bracket-br" />

          {/* Brand */}
          <div style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
            <div
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '8px',
                background: 'var(--accent-gradient)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: '900',
                fontSize: '0.8rem',
              }}
            >
              PY
            </div>
            <span style={{ fontSize: '1.5rem', fontWeight: '800', fontFamily: 'Outfit' }}>
              Priti<span style={{ color: 'var(--accent)' }}>.Yadav</span>
            </span>
          </div>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', maxWidth: '520px', margin: '0 auto 1.1rem' }}>
            Full-Stack & MERN Developer specializing in high-performance web systems, enterprise ERP modules, and bespoke glass user interfaces.
          </p>

          {/* Quick Nav Links */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1.4rem',
              marginBottom: '1.1rem',
              flexWrap: 'wrap',
            }}
          >
            {['hero', 'projects', 'skills', 'experience', 'contact'].map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  fontWeight: '500',
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  textTransform: 'capitalize',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {id === 'hero' ? 'Home' : id}
              </button>
            ))}
          </div>

          {/* Social Glass Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', marginBottom: '1.1rem' }}>
            <a
              href="https://github.com/pritiyadav25"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-circle-btn"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/priti-yadav-contactme/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-circle-btn"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://leetcode.com/u/pritiyadav25/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-circle-btn"
              title="LeetCode"
            >
              <FaCode />
            </a>
          </div>

          {/* Copyright */}
          <div
            style={{
              fontSize: '0.82rem',
              color: 'var(--text-subtle)',
              borderTop: '1px solid var(--glass-border)',
              paddingTop: '1.2rem',
            }}
          >
            © {currentYear} Priti Yadav • Handcrafted with <FaHeart style={{ color: '#ef4444', verticalAlign: 'middle', margin: '0 2px' }} /> in React & MERN Stack.
          </div>
        </div>
      </div>
    </footer>
  );
}
