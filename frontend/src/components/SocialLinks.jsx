import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';

export default function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '2rem' }}
    >
      <a
        href="https://github.com/pritiyadav25"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'var(--accent)', fontSize: '2rem', transition: 'transform 0.2s' }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <FaGithub />
      </a>
      <a
        href="https://linkedin.com/in/priti-yadav-contactme/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'var(--accent)', fontSize: '2rem', transition: 'transform 0.2s' }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        
        
      >
        <FaLinkedin />
      </a>
      <a
        href="https://leetcode.com/u/pritiyadav25/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'var(--accent)', fontSize: '2rem', transition: 'transform 0.2s' }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <FaCode />
      </a>
    </motion.div>
  );
}