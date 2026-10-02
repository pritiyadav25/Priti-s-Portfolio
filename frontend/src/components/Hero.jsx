import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Typed from 'typed.js';
import profileImg from '../assets/profile.jpg';
import tsaWebsiteImg from '../assets/tsa_website.jpg';
import SocialLinks from './SocialLinks';
import {
  FaRocket, FaFileDownload, FaEnvelope, FaTimes, FaGraduationCap,
  FaCode, FaCheckCircle, FaLaptopCode, FaPhoneAlt, FaMapMarkerAlt,
  FaExternalLinkAlt, FaSearchPlus, FaArrowRight, FaEye
} from 'react-icons/fa';

export default function Hero() {
  const typingRef = useRef(null);
  const [showResumeModal, setShowResumeModal] = useState(false);

  useEffect(() => {
    const typed = new Typed(typingRef.current, {
      strings: [
        'Full Stack Developer @ Ebslon Infotech 💼',
        'React.js & Next.js Architecture ⚛️',
        'MERN & REST API Engineering ⚡',
        'Enterprise ERP & Live Production Systems 🏢',
        'DSA & Problem Solving in Java/JS 🧠',
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2200,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const stats = [
    { num: '01', label: 'Live Projects', value: '4+', icon: <FaLaptopCode /> },
    { num: '02', label: 'Current Role', value: 'Full Stack Dev', icon: <FaCode /> },
    { num: '03', label: 'Company', value: 'Ebslon Infotech', icon: <FaCheckCircle /> },
    { num: '04', label: 'Education', value: 'B.Tech IT (AKTU)', icon: <FaGraduationCap /> },
  ];

  const techStackBadges = [
    'React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Java', 'REST APIs', 'PWA', 'n8n Automation'
  ];

  return (
    <section
      id="hero"
      style={{
        minHeight: '92vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '4.5rem',
        paddingBottom: '1rem',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Main Floating Glass Stage */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="glass-stage"
          style={{
            padding: 'clamp(1.2rem, 3vw, 2.2rem)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Architectural Framing Brackets ┌ ┐ */}
          <div className="corner-bracket-tl" />
          <div className="corner-bracket-tr" />
          <div className="corner-bracket-bl" />
          <div className="corner-bracket-br" />

          {/* Top Stage Bar */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '0.8rem',
              marginBottom: '1.4rem',
              borderBottom: '1px solid var(--glass-border)',
              paddingBottom: '0.9rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <div
                style={{
                  fontFamily: 'Outfit',
                  fontWeight: '900',
                  fontSize: '1.2rem',
                  letterSpacing: '0.05em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                <span>PY</span>
                <span style={{ color: 'var(--accent)' }}>®</span>
              </div>
              <div className="badge-pill" style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem' }}>
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    background: '#10b981',
                    boxShadow: '0 0 8px #10b981',
                    display: 'inline-block',
                  }}
                />
                Active Full Stack Intern @ Ebslon Infotech
              </div>
            </div>

            <div
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.78rem',
                color: 'var(--text-subtle)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <span>DEVELOPER PORTFOLIO</span>
              <span>•</span>
              <span>2026 EDITION</span>
            </div>
          </div>

          {/* Hero Main Headline */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              alignItems: 'center',
              marginBottom: '1.5rem',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.85rem',
                  color: 'var(--accent)',
                  fontWeight: '600',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '0.6rem',
                }}
              >
                ENGINEERING HIGH-IMPACT WEB SYSTEMS
              </div>

              <h1
                style={{
                  fontSize: 'clamp(2.3rem, 5vw, 3.8rem)',
                  fontWeight: '900',
                  lineHeight: '1.08',
                  textTransform: 'uppercase',
                  marginBottom: '0.6rem',
                  letterSpacing: '-0.03em',
                }}
              >
                PRITI <span className="gradient-text">YADAV</span>
              </h1>

              {/* Dynamic Typing Title */}
              <div
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                  fontWeight: '600',
                  color: 'var(--text-muted)',
                  marginBottom: '1rem',
                  minHeight: '1.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                <span ref={typingRef} style={{ color: 'var(--accent)', fontWeight: '700' }}></span>
              </div>

              <p
                style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.98rem',
                  lineHeight: '1.65',
                  maxWidth: '540px',
                  marginBottom: '1.2rem',
                }}
              >
                Full Stack Developer Intern at <strong>Ebslon Infotech Pvt. Ltd.</strong> and B.Tech IT scholar. Building enterprise ERP modules, high-performance React & Next.js platforms, and algorithmic solutions with elegant frosted glass aesthetics.
              </p>

              {/* Location & Quick Info */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.2rem',
                  marginBottom: '1.4rem',
                  color: 'var(--text-subtle)',
                  fontSize: '0.88rem',
                  flexWrap: 'wrap',
                }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <FaMapMarkerAlt style={{ color: 'var(--accent)' }} /> New Delhi, India
                </span>
                <span>•</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <FaPhoneAlt style={{ color: 'var(--accent)' }} /> +91-8882453789
                </span>
              </div>

              {/* CTA Action Buttons */}
              <div
                style={{
                  display: 'flex',
                  gap: '0.9rem',
                  flexWrap: 'wrap',
                }}
              >
                <button
                  className="btn-primary"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <FaRocket /> View Live Projects <FaArrowRight style={{ fontSize: '0.75rem' }} />
                </button>

                {/* Direct 1-Click Resume Modal / Download */}
                <button
                  className="btn-outline"
                  onClick={() => setShowResumeModal(true)}
                >
                  <FaFileDownload style={{ color: 'var(--accent)' }} /> Resume / CV
                </button>

                <button
                  className="btn-outline"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <FaEnvelope /> Contact
                </button>
              </div>
            </div>

            {/* Right Showcase: Layered Glass Showcase Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(140px, 1fr) minmax(200px, 1.6fr)',
                gap: '1.2rem',
                alignItems: 'stretch',
              }}
              className="hero-cards-grid"
            >
              {/* Profile Glass Card */}
              <div
                className="glass-card"
                style={{
                  padding: '1.2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '20px',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
                    <span className="editorial-num" style={{ fontSize: '1.5rem' }}>02</span>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-subtle)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      ENGINEER
                    </span>
                  </div>

                  <div
                    style={{
                      width: '100%',
                      aspectRatio: '1 / 1',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      marginBottom: '0.8rem',
                      border: '1px solid var(--glass-border)',
                      position: 'relative',
                    }}
                  >
                    <img
                      src={profileImg}
                      alt="Priti Yadav"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '8px',
                        right: '8px',
                      }}
                    >
                      <button
                        onClick={() => setShowResumeModal(true)}
                        className="glass-circle-btn"
                        style={{ width: '32px', height: '32px', fontSize: '0.75rem' }}
                        title="View Resume / Details"
                      >
                        <FaSearchPlus />
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    background: 'var(--glass-pill)',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '12px',
                    border: '1px solid var(--glass-pill-border)',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    textAlign: 'center',
                  }}
                >
                  Priti Yadav Btech IT
                </div>
              </div>

              {/* Featured Project Showcase Glass Card */}
              <div
                className="glass-card"
                style={{
                  padding: '1.4rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '20px',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                    <div>
                      <div style={{ fontSize: '1.1rem', fontWeight: '800', fontFamily: 'Outfit' }}>
                        FEATURED WORK
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: '600', textTransform: 'uppercase' }}>
                        LIVE PRODUCTION SITE
                      </div>
                    </div>

                    <div className="glass-rail" title="Live Enterprise Project" style={{ height: '36px' }}>
                      <div className="glass-rail-fill" style={{ height: '70%' }} />
                    </div>
                  </div>

                  <div
                    style={{
                      width: '100%',
                      aspectRatio: '16 / 10',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      marginBottom: '1rem',
                      border: '1px solid var(--glass-border)',
                      position: 'relative',
                    }}
                  >
                    <img
                      src={tsaWebsiteImg}
                      alt="Tilak Stone Arts Production Website"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%)',
                        display: 'flex',
                        alignItems: 'flex-end',
                        padding: '0.8rem',
                      }}
                    >
                      <span style={{ fontSize: '0.78rem', color: '#fff', fontWeight: '600' }}>
                        Tilak Stone Arts Platform
                      </span>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-subtle)' }}>
                    Next.js • React • REST
                  </span>
                  <a
                    href="https://www.tilakstonearts.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                    style={{
                      padding: '0.35rem 0.85rem',
                      fontSize: '0.78rem',
                      borderRadius: '20px',
                    }}
                  >
                    View Live <FaExternalLinkAlt style={{ fontSize: '0.65rem' }} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              alignItems: 'center',
              paddingTop: '1.2rem',
              borderTop: '1px solid var(--glass-border)',
            }}
          >
            <span style={{ fontSize: '0.78rem', color: 'var(--text-subtle)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginRight: '0.5rem' }}>
              CORE STACK:
            </span>
            {techStackBadges.map((tech, idx) => (
              <span
                key={idx}
                className="badge-pill"
                style={{ fontSize: '0.78rem', padding: '0.25rem 0.75rem' }}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Numeric Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: '0.85rem',
            marginTop: '1rem',
          }}
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '0.75rem 1.1rem',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
              }}
            >
              <div className="editorial-num" style={{ fontSize: '1.4rem' }}>{stat.num}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '1.2rem', fontWeight: '800', fontFamily: 'Outfit', lineHeight: '1.2' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: '500' }}>
                  {stat.label}
                </div>
              </div>
              <div style={{ fontSize: '1.1rem', color: 'var(--accent)', opacity: 0.85 }}>
                {stat.icon}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Social Links */}
        <div style={{ marginTop: '1.2rem' }}>
          <SocialLinks />
        </div>
      </div>

      {/* Resume Modal with Direct PDF Download & View */}
      <AnimatePresence>
        {showResumeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.85)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              zIndex: 3000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem',
            }}
            onClick={() => setShowResumeModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="glass-stage"
              style={{
                maxWidth: '540px',
                width: '100%',
                padding: '2.2rem',
                background: 'rgba(12, 17, 30, 0.94)',
                position: 'relative',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowResumeModal(false)}
                className="glass-circle-btn"
                style={{
                  position: 'absolute',
                  top: '1.2rem',
                  right: '1.2rem',
                  width: '36px',
                  height: '36px',
                }}
              >
                <FaTimes />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                <span className="editorial-num" style={{ fontSize: '1.8rem' }}>01</span>
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '800' }}>
                    Priti Yadav — Developer Resume
                  </h3>
                  <p style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: '600' }}>
                    Full Stack Developer Intern @ Ebslon Infotech Pvt. Ltd.
                  </p>
                </div>
              </div>

              <div
                className="glass-nested-card"
                style={{
                  padding: '1.2rem',
                  margin: '1.5rem 0',
                  fontSize: '0.9rem',
                  lineHeight: '1.65',
                }}
              >
                <p><strong>Email:</strong> pritiyadavit25@gmail.com</p>
                <p><strong>Phone:</strong> +91-8882453789</p>
                <p><strong>Location:</strong> New Delhi, India</p>
                <p><strong>Core Stack:</strong> React.js, Next.js, Node.js, Express, MongoDB, MySQL, Java, DSA</p>
                <p style={{ marginTop: '0.5rem', color: '#10b981', fontWeight: '600', fontSize: '0.82rem' }}>
                  ✓ Official PDF Resume Updated & Verified
                </p>
              </div>

              {/* Direct PDF Download & View Actions */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <a
                  href="/resume.pdf"
                  download="Priti_Yadav_Resume.pdf"
                  className="btn-primary"
                  style={{ textDecoration: 'none', width: '100%', padding: '0.85rem', fontSize: '0.92rem' }}
                >
                  <FaFileDownload /> Direct Download PDF Resume
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ textDecoration: 'none', width: '100%', padding: '0.75rem', fontSize: '0.9rem' }}
                >
                  <FaEye /> Open & View PDF in New Tab
                </a>

                <div style={{ display: 'flex', gap: '0.6rem', marginTop: '0.2rem' }}>
                  <a
                    href="mailto:pritiyadavit25@gmail.com?subject=Job%20Opportunity%20/%20Resume%20Inquiry%20-%20Priti%20Yadav"
                    className="btn-outline"
                    style={{ textDecoration: 'none', flex: 1, fontSize: '0.82rem', padding: '0.6rem' }}
                  >
                    <FaEnvelope /> Email Me
                  </a>
                  <a
                    href="tel:+918882453789"
                    className="btn-outline"
                    style={{ textDecoration: 'none', flex: 1, fontSize: '0.82rem', padding: '0.6rem' }}
                  >
                    <FaPhoneAlt /> Call Direct
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hero-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}