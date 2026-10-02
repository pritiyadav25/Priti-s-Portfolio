import { useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { FaPalette, FaTimes } from 'react-icons/fa';

const presets = [
  { name: 'Ocean Blue', color: '#0077b6' },
  { name: 'Emerald', color: '#10b981' },
  { name: 'Sunset Violet', color: '#8b5cf6' },
  { name: 'Rose Crimson', color: '#e11d48' },
  { name: 'Amber Gold', color: '#f59e0b' },
];

export default function ColorPicker({ setAccentColor }) {
  const [showPicker, setShowPicker] = useState(false);

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={() => setShowPicker(!showPicker)}
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
        title="Custom Accent Color Theme"
      >
        <FaPalette style={{ color: 'var(--accent)' }} /> Theme Accent
      </button>

      {showPicker && (
        <div
          className="glass-card"
          style={{
            position: 'absolute',
            top: '48px',
            right: 0,
            zIndex: 1000,
            padding: '1.2rem',
            background: 'var(--bg)',
            borderRadius: '16px',
            boxShadow: '0 15px 35px rgba(0,0,0,0.4)',
            width: '240px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '0.8rem',
              fontSize: '0.88rem',
              fontWeight: '700',
            }}
          >
            <span>Color Presets</span>
            <button
              onClick={() => setShowPicker(false)}
              style={{ background: 'none', border: 'none', color: 'var(--text)', cursor: 'pointer' }}
            >
              <FaTimes />
            </button>
          </div>

          {/* Presets Swatches */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            {presets.map((p) => (
              <button
                key={p.color}
                onClick={() => {
                  setAccentColor(p.color);
                  setShowPicker(false);
                }}
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: p.color,
                  border: '2px solid var(--bg)',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                  cursor: 'pointer',
                }}
                title={p.name}
              />
            ))}
          </div>

          <div style={{ fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>
            Custom Picker:
          </div>
          <HexColorPicker onChange={setAccentColor} style={{ width: '100%', height: '140px' }} />
        </div>
      )}
    </div>
  );
}