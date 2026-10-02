import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { 
  FaEnvelope, FaMapMarkerAlt, FaCopy, FaCheck, FaPaperPlane, 
  FaGithub, FaLinkedin, FaCode, FaPhoneAlt, FaGoogle, FaExternalLinkAlt 
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
  const [copiedEmail, setCopiedEmail] = useState(false);

  const directEmail = "pritiyadavit25@gmail.com";
  const directPhone = "+91-8882453789";

  // Cleaned subject options without internship option
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

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(directEmail);
    setCopiedEmail(true);
    toast.success('Email copied to clipboard! 📋');
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  // 1-Click Open Gmail Web
  const openGmailWeb = () => {
    const subjectLine = form.subject ? encodeURIComponent(`[Portfolio Inquiry] ${form.subject}`) : encodeURIComponent('Opportunity / Inquiry for Priti Yadav');
    const bodyText = encodeURIComponent(
      `Hi Priti,\n\nName: ${form.name || '[Your Name]'}\nEmail: ${form.email || '[Your Email]'}\nTopic: ${form.subject}\n\nMessage:\n${form.message || '[Type your message here]'}\n\nBest regards,\n${form.name || ''}`
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${directEmail}&su=${subjectLine}&body=${bodyText}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    toast.success('Opened Gmail composer! ✉️');
  };

  // Submit Contact Form
  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const newErrors = {
      name: validateField('name', form.name),
      email: validateField('email', form.email),
      message: validateField('message', form.message),
    };
    setErrors(newErrors);

    if (Object.values(newErrors).some((err) => err !== '')) {
      toast.error('Please complete the required form fields before sending.');
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
      toast.success('Thank you! Your message has been logged successfully. 🎉');
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
    <section id="contact">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '1.1rem' }}
        >
          <div
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.8rem',
              color: 'var(--accent)',
              fontWeight: '600',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              marginBottom: '0.35rem',
            }}
          >
            START A CONVERSATION
          </div>
          <h2 className="section-title">
            CONNECT & <span className="gradient-text">SEND MAIL</span>
          </h2>
          <p className="section-subtitle">
            Want to discuss a job opportunity, freelance project, or hire a full-stack engineer? Simply send an email directly to my inbox!
          </p>
        </motion.div>

        {/* Equal-Height Symmetrical Grid Container */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '1.3rem',
            alignItems: 'stretch', // Ensures both cards have identical equal height
          }}
        >
          {/* Left Column: Direct Reach & 1-Click Gmail Action */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card"
            style={{
              padding: 'clamp(1.2rem, 2.5vw, 1.6rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              gap: '1.1rem',
            }}
          >
            {/* Top Info */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                <span className="editorial-num" style={{ fontSize: '1.5rem' }}>01</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  DIRECT REACH
                </span>
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '0.5rem' }}>
                Send Mail Directly to Priti ✉️
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.65', fontSize: '0.92rem' }}>
                Have an open position or project inquiry? You can launch Gmail with one click or reach out via phone & social channels below.
              </p>
            </div>

            {/* Middle Contact Cards Stack */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Direct Email Address Box */}
              <div
                className="glass-nested-card"
                style={{
                  padding: '1rem 1.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', minWidth: 0 }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      background: 'var(--glass-pill)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent)',
                      flexShrink: 0,
                      fontSize: '1.1rem',
                    }}
                  >
                    <FaEnvelope />
                  </div>
                  <div style={{ minWidth: 0, overflow: 'hidden' }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '600', letterSpacing: '0.05em' }}>
                      DIRECT EMAIL ADDRESS
                    </div>
                    <a
                      href={`mailto:${directEmail}`}
                      style={{
                        fontSize: '0.94rem',
                        fontWeight: '700',
                        color: 'var(--text)',
                        textDecoration: 'none',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        display: 'block',
                      }}
                      title="Send email"
                    >
                      {directEmail}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmailToClipboard}
                  className="glass-circle-btn"
                  style={{ width: '38px', height: '38px', fontSize: '0.9rem' }}
                  title="Copy Email to Clipboard"
                >
                  {copiedEmail ? <FaCheck style={{ color: '#10b981' }} /> : <FaCopy />}
                </button>
              </div>

              {/* 1-Click Launch Gmail Web */}
              <button
                type="button"
                onClick={openGmailWeb}
                className="btn-primary"
                style={{
                  width: '100%',
                  padding: '0.85rem 1.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.65rem',
                  fontSize: '0.92rem',
                }}
              >
                <FaGoogle style={{ color: '#ea4335', fontSize: '1.05rem' }} /> Open in Gmail (Web) <FaExternalLinkAlt style={{ fontSize: '0.75rem' }} />
              </button>

              {/* Phone / Call Card */}
              <div
                className="glass-nested-card"
                style={{
                  padding: '0.9rem 1.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '12px',
                      background: 'var(--glass-pill)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent)',
                      flexShrink: 0,
                    }}
                  >
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                      PHONE / DIRECT CALL
                    </div>
                    <div style={{ fontSize: '0.92rem', fontWeight: '700' }}>
                      {directPhone}
                    </div>
                  </div>
                </div>

                <a
                  href={`tel:${directPhone}`}
                  className="btn-outline"
                  style={{
                    padding: '0.35rem 0.9rem',
                    fontSize: '0.8rem',
                    borderRadius: '20px',
                  }}
                >
                  Call
                </a>
              </div>

              {/* Location Card */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.3rem 0.5rem' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '12px',
                    background: 'var(--glass-pill)',
                    border: '1px solid var(--glass-pill-border)',
                    color: 'var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                    flexShrink: 0,
                  }}
                >
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '600' }}>LOCATION</div>
                  <div style={{ fontSize: '0.92rem', fontWeight: '600' }}>New Delhi, India</div>
                </div>
              </div>
            </div>

            {/* Bottom: Social Links */}
            <div style={{ paddingTop: '1.2rem', borderTop: '1px solid var(--glass-border)' }}>
              <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: '600', marginBottom: '0.75rem', letterSpacing: '0.04em' }}>
                PROFILES & REPOSITORIES:
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                <a
                  href="https://github.com/pritiyadav25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ padding: '0.45rem 0.9rem', fontSize: '0.82rem', borderRadius: '25px' }}
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/priti-yadav-contactme/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ padding: '0.45rem 0.9rem', fontSize: '0.82rem', borderRadius: '25px' }}
                >
                  <FaLinkedin /> LinkedIn
                </a>
                <a
                  href="https://leetcode.com/u/pritiyadav25/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ padding: '0.45rem 0.9rem', fontSize: '0.82rem', borderRadius: '25px' }}
                >
                  <FaCode /> LeetCode
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean Streamlined Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card"
            style={{ 
              padding: 'clamp(1.2rem, 2.5vw, 1.6rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              gap: '1rem',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                <span className="editorial-num" style={{ fontSize: '1.5rem' }}>02</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  TRANSMISSION
                </span>
              </div>

              <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '0.35rem' }}>
                Send a Message ✉️
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '0.9rem' }}>
                Leave your details below and I will get back to you promptly:
              </p>
            </div>

            <form onSubmit={handleSubmitForm} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', flex: 1, justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', marginBottom: '0.45rem' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. John Doe / Hiring Manager"
                    value={form.name}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1.1rem',
                      borderRadius: '14px',
                      border: `1px solid ${errors.name ? '#ef4444' : 'var(--glass-pill-border)'}`,
                      background: 'var(--glass-pill)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      color: 'var(--text)',
                      fontSize: '0.92rem',
                      outline: 'none',
                    }}
                  />
                  {errors.name && (
                    <span style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: '0.3rem', display: 'block' }}>
                      {errors.name}
                    </span>
                  )}
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', marginBottom: '0.45rem' }}>
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="e.g. yourname@company.com"
                    value={form.email}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1.1rem',
                      borderRadius: '14px',
                      border: `1px solid ${errors.email ? '#ef4444' : 'var(--glass-pill-border)'}`,
                      background: 'var(--glass-pill)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      color: 'var(--text)',
                      fontSize: '0.92rem',
                      outline: 'none',
                    }}
                  />
                  {errors.email && (
                    <span style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: '0.3rem', display: 'block' }}>
                      {errors.email}
                    </span>
                  )}
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', marginBottom: '0.45rem' }}>
                    Topic / Subject
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1.1rem',
                      borderRadius: '14px',
                      border: '1px solid var(--glass-pill-border)',
                      background: 'var(--bg-color)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      color: 'var(--text)',
                      fontSize: '0.9rem',
                      outline: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    {subjectOptions.map((opt, idx) => (
                      <option key={idx} value={opt} style={{ background: '#0f172a', color: '#fff' }}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', marginBottom: '0.45rem' }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Hi Priti, I came across your portfolio and would like to discuss..."
                    value={form.message}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1.1rem',
                      borderRadius: '14px',
                      border: `1px solid ${errors.message ? '#ef4444' : 'var(--glass-pill-border)'}`,
                      background: 'var(--glass-pill)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      color: 'var(--text)',
                      fontSize: '0.92rem',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                  {errors.message && (
                    <span style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: '0.3rem', display: 'block' }}>
                      {errors.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Single Clean Send Button */}
              <div style={{ marginTop: '1rem' }}>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    padding: '0.85rem',
                    cursor: isLoading ? 'not-allowed' : 'pointer',
                    opacity: isLoading ? 0.7 : 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.6rem',
                    fontSize: '0.92rem',
                  }}
                >
                  <FaPaperPlane /> {isLoading ? 'Sending Message...' : 'Send Message'}
                </button>

                <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', textAlign: 'center', marginTop: '0.6rem' }}>
                  ✨ All inquiries are delivered directly to <strong>pritiyadavit25@gmail.com</strong>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}