import { useMemo } from 'react';

const codeGlyphs = [
  '{ }', '< />', 'const', 'async', 'await', '=>', '0101', 'git commit',
  'import', 'React', 'Node.js', '[ ]', '===', 'return', 'API', 'npm',
  '{ ...state }', 'true', '() =>', 'FullStack', '01', 'Promise'
];

export default function TechBackground() {
  // Generate random animated particles once
  const particles = useMemo(() => {
    return Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      text: codeGlyphs[i % codeGlyphs.length],
      left: `${(i * 4.2 + (i % 3) * 2.5) % 96}%`,
      duration: `${14 + (i % 7) * 4}s`,
      delay: `${-(i * 2.1)}s`,
      size: `${0.75 + (i % 4) * 0.15}rem`,
      opacity: 0.08 + (i % 3) * 0.06,
    }));
  }, []);

  return (
    <div
      className="tech-bg-container"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      {/* 1. Software Engineering Dark Architecture Wallpaper */}
      <div
        className="tech-bg-base"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(180deg, rgba(8, 12, 22, 0.78) 0%, rgba(9, 14, 26, 0.82) 40%, rgba(6, 9, 17, 0.92) 100%),
            radial-gradient(circle at 50% 20%, rgba(56, 189, 248, 0.15) 0%, transparent 60%),
            radial-gradient(circle at 80% 80%, rgba(129, 140, 248, 0.12) 0%, transparent 60%),
            url('/src/assets/tech_glass_bg.jpg')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.92,
        }}
      />

      {/* 2. Cybernetic Grid Matrix Overlay */}
      <div
        className="tech-cyber-grid"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          opacity: 0.6,
        }}
      />

      {/* 3. Living Floating Luminous Tech Orbs (Refracts under Frosted Glass) */}
      <div
        className="glow-orb orb-cyan"
        style={{
          position: 'absolute',
          top: '15%',
          left: '10%',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.22) 0%, rgba(56, 189, 248, 0) 70%)',
          filter: 'blur(50px)',
          animation: 'driftOrb1 22s ease-in-out infinite alternate',
          willChange: 'transform',
        }}
      />

      <div
        className="glow-orb orb-violet"
        style={{
          position: 'absolute',
          top: '45%',
          right: '5%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(129, 140, 248, 0.22) 0%, rgba(99, 102, 241, 0) 70%)',
          filter: 'blur(55px)',
          animation: 'driftOrb2 26s ease-in-out infinite alternate',
          willChange: 'transform',
        }}
      />

      <div
        className="glow-orb orb-emerald"
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '25%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.16) 0%, rgba(16, 185, 129, 0) 70%)',
          filter: 'blur(50px)',
          animation: 'driftOrb3 20s ease-in-out infinite alternate',
          willChange: 'transform',
        }}
      />

      {/* 4. Subtle Floating Developer Code Glyphs */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
        }}
      >
        {particles.map((p) => (
          <span
            key={p.id}
            className="floating-code-token"
            style={{
              position: 'absolute',
              bottom: '-40px',
              left: p.left,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: p.size,
              color: 'rgba(255, 255, 255, 0.9)',
              opacity: p.opacity,
              animation: `floatUpToken ${p.duration} linear infinite`,
              animationDelay: p.delay,
              userSelect: 'none',
              textShadow: '0 0 8px rgba(56, 189, 248, 0.4)',
              willChange: 'transform, opacity',
            }}
          >
            {p.text}
          </span>
        ))}
      </div>

      {/* 5. Subtle High-Tech Scanning Pulse Line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.6), transparent)',
          animation: 'scanLine 12s ease-in-out infinite',
          boxShadow: '0 0 15px rgba(56, 189, 248, 0.5)',
        }}
      />

      <style>{`
        @keyframes driftOrb1 {
          0% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(120px, 80px, 0) scale(1.15); }
          100% { transform: translate3d(-60px, 140px, 0) scale(0.95); }
        }

        @keyframes driftOrb2 {
          0% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(-100px, -90px, 0) scale(1.12); }
          100% { transform: translate3d(80px, 70px, 0) scale(0.9); }
        }

        @keyframes driftOrb3 {
          0% { transform: translate3d(0, 0, 0) scale(0.95); }
          50% { transform: translate3d(90px, -60px, 0) scale(1.1); }
          100% { transform: translate3d(-80px, 50px, 0) scale(1.05); }
        }

        @keyframes floatUpToken {
          0% {
            transform: translate3d(0, 0, 0);
            opacity: 0;
          }
          10% {
            opacity: var(--token-op, 0.18);
          }
          90% {
            opacity: var(--token-op, 0.18);
          }
          100% {
            transform: translate3d(0, -110vh, 0);
            opacity: 0;
          }
        }

        @keyframes scanLine {
          0% { top: 0%; opacity: 0; }
          15% { opacity: 0.8; }
          85% { opacity: 0.8; }
          100% { top: 100%; opacity: 0; }
        }

        body.light .tech-bg-base {
          background-image: 
            linear-gradient(180deg, rgba(248, 250, 252, 0.88) 0%, rgba(241, 245, 249, 0.92) 50%, rgba(226, 232, 240, 0.95) 100%),
            url('/src/assets/tech_glass_bg.jpg') !important;
          opacity: 0.3 !important;
        }

        body.light .glow-orb {
          opacity: 0.45;
        }
      `}</style>
    </div>
  );
}
