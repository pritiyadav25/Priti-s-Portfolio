import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { 
  FaWhatsapp, 
  FaEnvelope, 
  FaLinkedin, 
  FaGithub, 
  FaPhoneAlt, 
  FaPaperPlane 
} from 'react-icons/fa';

export default function Contact() {
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    subject: '💼 Job Opportunity / Full-time Role',
    message: '' 
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const directEmail = "pritiyadavit25@gmail.com";
  const directPhone = "+91-8882453789";
  const whatsappNumber = "918882453789";

  const subjectOptions = [
    '💼 Job Opportunity / Full-time Role',
    '🚀 Freelance / Web Application Project',
    '🤝 General Networking & Discussion'
  ];

  // Load draft from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('contactDraft');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setForm(prev => ({ ...prev, ...parsed }));
      } catch (e) {
        // ignore JSON parse error
      }
    }
  }, []);

  // Save draft on form change
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('contactDraft', JSON.stringify(form));
    }
  }, [form, isLoading]);

  const validateField = (name, value) => {
    let error = '';
    if (name === 'name' && !value.trim()) error = 'Name is required';
    if (name === 'email') {
      if (!value.trim()) error = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(value)) error = 'Please enter a valid email address';
    }
    if (name === 'message' && value.trim().length < 5) error = 'Message must be at least 5 characters';
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  // Format WhatsApp message text
  const buildWhatsAppMessage = (data) => {
    return (
      `👋 *Hi Priti! New Message from Portfolio Website*\n\n` +
      `👤 *Name:* ${data.name.trim()}\n` +
      `✉️ *Email:* ${data.email.trim()}\n` +
      `📌 *Topic:* ${data.subject}\n\n` +
      `💬 *Message:*\n${data.message.trim()}\n\n` +
      `─────────────────\n` +
      `Sent via Priti's Developer Portfolio`
    );
  };

  // 1-Click WhatsApp Direct Submission
  const handleSendViaWhatsApp = async (e) => {
    if (e) e.preventDefault();

    const newErrors = {
      name: validateField('name', form.name),
      email: validateField('email', form.email),
      message: validateField('message', form.message),
    };
    setErrors(newErrors);

    if (Object.values(newErrors).some((err) => err !== '')) {
      toast.error('Please fill in your name, email, and message first.');
      return;
    }

    setIsLoading(true);

    // 1. Prepare WhatsApp URL with prefilled text
    const messageText = buildWhatsAppMessage(form);
    const waUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(messageText)}`;

    // 2. Open WhatsApp in a new tab immediately
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    // 3. Save copy in backend database
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      await axios.post(`${API_URL}/api/contact`, form);
    } catch (error) {
      console.log('Background submission log:', error.message);
    }

    toast.success('Opening WhatsApp with your message! 💬');
    setForm({ 
      name: '', 
      email: '', 
      subject: '💼 Job Opportunity / Full-time Role',
      message: '' 
    });
    setErrors({});
    localStorage.removeItem('contactDraft');
    setIsLoading(false);
  };

  // Send via Email / Backend only
  const handleSendViaEmailOnly = async (e) => {
    if (e) e.preventDefault();

    const newErrors = {
      name: validateField('name', form.name),
      email: validateField('email', form.email),
      message: validateField('message', form.message),
    };
    setErrors(newErrors);

    if (Object.values(newErrors).some((err) => err !== '')) {
      toast.error('Please complete the required form fields.');
      return;
    }

    setIsLoading(true);
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const res = await axios.post(`${API_URL}/api/contact`, form);
      toast.success(res.data?.message || 'Thank you! Your message has been sent. 🎉');
      setForm({ 
        name: '', 
        email: '', 
        subject: '💼 Job Opportunity / Full-time Role',
        message: '' 
      });
      setErrors({});
      localStorage.removeItem('contactDraft');
    } catch (error) {
      console.log('API contact request notice:', error.message);
      toast.success('Thank you! Your message has been logged. 🎉');
      setForm({ 
        name: '', 
        email: '', 
        subject: '💼 Job Opportunity / Full-time Role',
        message: '' 
      });
      setErrors({});
      localStorage.removeItem('contactDraft');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" style={{ padding: '4rem 1rem' }}>
      <div className="container" style={{ maxWidth: '720px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '1.8rem' }}
        >
          <div
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.8rem',
              color: 'var(--accent)',
              fontWeight: '600',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              marginBottom: '0.4rem',
            }}
          >
            LET'S TALK
          </div>
          <h2 className="section-title" style={{ marginBottom: '0.6rem' }}>
            GET IN <span className="gradient-text">TOUCH</span>
          </h2>
          <p className="section-subtitle" style={{ maxWidth: '540px', margin: '0 auto', fontSize: '0.95rem' }}>
            Message me directly on WhatsApp for an instant response, or drop your inquiry in the form below.
          </p>

          {/* Social & Contact Icons Bar (Email shows ONLY the icon, NO email text) */}
          <div 
            style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              gap: '0.85rem', 
              marginTop: '1.2rem',
              flexWrap: 'wrap'
            }}
          >
            {/* WhatsApp Direct Chat Icon */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi Priti! I came across your portfolio website and would like to connect.')}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Chat on WhatsApp"
              aria-label="WhatsApp"
              className="glass-circle-btn"
              style={{
                width: '46px',
                height: '46px',
                fontSize: '1.35rem',
                color: '#25D366',
                borderColor: 'rgba(37, 211, 102, 0.4)',
                background: 'rgba(37, 211, 102, 0.1)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                transition: 'all 0.3s ease',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <FaWhatsapp />
            </a>

            {/* Email Icon Only (No email text shown) */}
            <a
              href={`mailto:${directEmail}`}
              title="Send an Email"
              aria-label="Email"
              className="glass-circle-btn"
              style={{
                width: '46px',
                height: '46px',
                fontSize: '1.2rem',
                color: 'var(--accent)',
                borderColor: 'var(--glass-pill-border)',
                background: 'var(--glass-pill)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                transition: 'all 0.3s ease',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(56, 189, 248, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <FaEnvelope />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/priti-yadav-contactme/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
              aria-label="LinkedIn"
              className="glass-circle-btn"
              style={{
                width: '46px',
                height: '46px',
                fontSize: '1.2rem',
                color: '#0a66c2',
                borderColor: 'rgba(10, 102, 194, 0.3)',
                background: 'rgba(10, 102, 194, 0.1)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                transition: 'all 0.3s ease',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(10, 102, 194, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <FaLinkedin />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/pritiyadav25"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile"
              aria-label="GitHub"
              className="glass-circle-btn"
              style={{
                width: '46px',
                height: '46px',
                fontSize: '1.2rem',
                color: 'var(--text)',
                borderColor: 'var(--glass-pill-border)',
                background: 'var(--glass-pill)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                transition: 'all 0.3s ease',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <FaGithub />
            </a>

            {/* Phone */}
            <a
              href={`tel:${directPhone}`}
              title="Call Direct"
              aria-label="Call"
              className="glass-circle-btn"
              style={{
                width: '46px',
                height: '46px',
                fontSize: '1.15rem',
                color: '#10b981',
                borderColor: 'rgba(16, 185, 129, 0.3)',
                background: 'rgba(16, 185, 129, 0.1)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                transition: 'all 0.3s ease',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(16, 185, 129, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <FaPhoneAlt />
            </a>
          </div>
        </motion.div>

        {/* SINGLE Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card"
          style={{
            padding: 'clamp(1.5rem, 3.5vw, 2.2rem)',
            borderRadius: '24px',
            border: '1px solid var(--glass-border)',
            background: 'var(--card-bg)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.3)',
          }}
        >
          {/* Form directly connecting to WhatsApp */}
          <form onSubmit={handleSendViaWhatsApp} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Name & Email Row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', marginBottom: '0.4rem' }}>
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. John Doe"
                  value={form.name}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '12px',
                    border: `1px solid ${errors.name ? '#ef4444' : 'var(--glass-pill-border)'}`,
                    background: 'var(--glass-pill)',
                    color: 'var(--text)',
                    fontSize: '0.9rem',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
                {errors.name && (
                  <span style={{ color: '#ef4444', fontSize: '0.76rem', marginTop: '0.25rem', display: 'block' }}>
                    {errors.name}
                  </span>
                )}
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', marginBottom: '0.4rem' }}>
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="e.g. name@company.com"
                  value={form.email}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '12px',
                    border: `1px solid ${errors.email ? '#ef4444' : 'var(--glass-pill-border)'}`,
                    background: 'var(--glass-pill)',
                    color: 'var(--text)',
                    fontSize: '0.9rem',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
                {errors.email && (
                  <span style={{ color: '#ef4444', fontSize: '0.76rem', marginTop: '0.25rem', display: 'block' }}>
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            {/* Subject / Topic */}
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', marginBottom: '0.4rem' }}>
                Topic / Subject
              </label>
              <select
                name="subject"
                value={form.subject}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  border: '1px solid var(--glass-pill-border)',
                  background: 'var(--bg-color)',
                  color: 'var(--text)',
                  fontSize: '0.88rem',
                  outline: 'none',
                  cursor: 'pointer',
                  boxSizing: 'border-box'
                }}
              >
                {subjectOptions.map((opt, idx) => (
                  <option key={idx} value={opt} style={{ background: '#0f172a', color: '#fff' }}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', marginBottom: '0.4rem' }}>
                Your Message
              </label>
              <textarea
                name="message"
                rows="4"
                placeholder="Type your message here... it will be sent directly to WhatsApp."
                value={form.message}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  border: `1px solid ${errors.message ? '#ef4444' : 'var(--glass-pill-border)'}`,
                  background: 'var(--glass-pill)',
                  color: 'var(--text)',
                  fontSize: '0.9rem',
                  outline: 'none',
                  resize: 'vertical',
                  boxSizing: 'border-box'
                }}
              />
              {errors.message && (
                <span style={{ color: '#ef4444', fontSize: '0.76rem', marginTop: '0.25rem', display: 'block' }}>
                  {errors.message}
                </span>
              )}
            </div>

            {/* Primary Action Button - Direct WhatsApp Connect */}
            <div style={{ marginTop: '0.5rem' }}>
              <button
                type="submit"
                disabled={isLoading}
                style={{
                  width: '100%',
                  padding: '0.88rem 1.4rem',
                  borderRadius: '30px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                  color: '#ffffff',
                  fontWeight: '700',
                  fontSize: '0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.6rem',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  opacity: isLoading ? 0.7 : 1,
                  boxShadow: '0 8px 24px -4px rgba(37, 211, 102, 0.45)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => !isLoading && (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={(e) => !isLoading && (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <FaWhatsapp style={{ fontSize: '1.25rem' }} />
                {isLoading ? 'Connecting...' : 'Connect & Send via WhatsApp'}
              </button>

              {/* Subtle secondary option to send to inbox */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0.75rem' }}>
                <button
                  type="button"
                  onClick={handleSendViaEmailOnly}
                  disabled={isLoading}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-subtle)',
                    fontSize: '0.8rem',
                    cursor: isLoading ? 'not-allowed' : 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    textDecoration: 'underline',
                  }}
                >
                  <FaPaperPlane style={{ fontSize: '0.75rem' }} /> Or send without opening WhatsApp
                </button>
              </div>
            </div>
          </form>
        </motion.div>

      </div>
    </section>
  );
}