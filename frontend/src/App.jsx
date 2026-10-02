import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import BackToTop from './components/BacktoTop';
import TechBackground from './components/TechBackground';
import './styles/global.css';

// Helper to convert hex to rgb for CSS glow variables
function hexToRgb(hex) {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '56, 189, 248';
}

function App() {
  const [accentColor, setAccentColor] = useState(() => {
    return localStorage.getItem('userAccentColor') || '#38bdf8';
  });

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accentColor);
    document.documentElement.style.setProperty('--accent-rgb', hexToRgb(accentColor));
    localStorage.setItem('userAccentColor', accentColor);
  }, [accentColor]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}
    >
      {/* Living Software Engineering Background with Floating Glowing Orbs & Code Stream */}
      <TechBackground />

      <Navbar setAccentColor={setAccentColor} />
      <main style={{ flex: 1, position: 'relative', zIndex: 1 }}>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: 'rgba(10, 15, 28, 0.9)',
            color: 'var(--text)',
            border: '1px solid var(--glass-border)',
            backdropFilter: 'blur(16px)',
          },
        }}
      />
      <Chatbot />
      <BackToTop />
    </motion.div>
  );
}

export default App;