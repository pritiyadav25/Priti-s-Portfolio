import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import ColorPicker from './ColorPicker';

export default function Navbar({ setAccentColor }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // ScrollSpy logic
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 2000,
        padding: scrolled ? '0.75rem 1rem' : '1.1rem 1.5rem',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        className="glass-nav"
        style={{
          maxWidth: '1220px',
          margin: '0 auto',
          borderRadius: '40px',
          padding: '0.6rem 1.4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand Logo (Echoing "02®" style from reference image) */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          onClick={() => scrollTo('hero')}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.45rem' }}
        >
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '10px',
              background: 'var(--accent-gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontWeight: '900',
              fontFamily: 'Outfit',
              fontSize: '0.9rem',
              boxShadow: '0 4px 12px rgba(var(--accent-rgb), 0.35)',
            }}
          >
            PY
          </div>
          <span style={{ fontSize: '1.45rem', fontWeight: '900', fontFamily: 'Outfit', letterSpacing: '-0.02em' }}>
            Priti<span style={{ color: 'var(--accent)' }}>.Yadav</span>
          </span>
        </motion.div>

        {/* Desktop Nav Items */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
          }}
          className="desktop-nav"
        >
          <ul
            style={{
              display: 'flex',
              listStyle: 'none',
              gap: '1.6rem',
              alignItems: 'center',
              margin: 0,
              padding: 0,
            }}
          >
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: activeSection === item.id ? 'var(--accent)' : 'var(--text)',
                    fontWeight: activeSection === item.id ? '700' : '500',
                    fontSize: '0.92rem',
                    cursor: 'pointer',
                    position: 'relative',
                    padding: '0.3rem 0.2rem',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      style={{
                        position: 'absolute',
                        bottom: '-2px',
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: 'var(--accent)',
                        borderRadius: '2px',
                        boxShadow: '0 0 8px var(--accent)',
                      }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Quick Actions (Theme & Accent) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginLeft: '0.5rem' }}>
            <ThemeToggle />
            <ColorPicker setAccentColor={setAccentColor} />
          </div>
        </nav>

        {/* Mobile Hamburger Button */}
        <div style={{ display: 'none' }} className="mobile-toggle">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="glass-circle-btn"
            style={{ width: '38px', height: '38px', fontSize: '1.1rem' }}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with Frosted Glass Stage */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="glass-stage"
            style={{
              maxWidth: '1220px',
              margin: '0.6rem auto 0',
              padding: '1.4rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              borderRadius: '24px',
            }}
          >
            {navItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                style={{
                  background: activeSection === item.id ? 'var(--glass-pill)' : 'none',
                  border: activeSection === item.id ? '1px solid var(--glass-pill-border)' : 'none',
                  color: activeSection === item.id ? 'var(--accent)' : 'var(--text)',
                  fontSize: '1.05rem',
                  fontWeight: activeSection === item.id ? '700' : '500',
                  textAlign: 'left',
                  cursor: 'pointer',
                  padding: '0.5rem 0.8rem',
                  borderRadius: '12px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span>{item.label}</span>
                <span className="editorial-num" style={{ fontSize: '1rem' }}>
                  0{idx + 1}
                </span>
              </button>
            ))}

            <div
              style={{
                display: 'flex',
                gap: '0.8rem',
                paddingTop: '0.8rem',
                borderTop: '1px solid var(--glass-border)',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Preferences:</span>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <ThemeToggle />
                <ColorPicker setAccentColor={setAccentColor} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 860px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}
