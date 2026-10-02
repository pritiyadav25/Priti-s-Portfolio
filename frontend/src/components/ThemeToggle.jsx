import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true; // Default dark theme
  });

  useEffect(() => {
    if (isDark) {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      style={{
        background: 'var(--glass-card)',
        border: '1px solid var(--glass-border)',
        padding: '0.45rem 0.9rem',
        borderRadius: '30px',
        cursor: 'pointer',
        color: 'var(--text)',
        fontSize: '0.85rem',
        fontWeight: '600',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.4rem',
        transition: 'all 0.3s ease',
      }}
      title="Toggle Light/Dark Theme"
    >
      {isDark ? (
        <>
          <FaSun style={{ color: '#f59e0b' }} /> Light
        </>
      ) : (
        <>
          <FaMoon style={{ color: '#8b5cf6' }} /> Dark
        </>
      )}
    </button>
  );
}