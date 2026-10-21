import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCommentDots, FaTimes, FaPaperPlane, FaRobot, FaTrashAlt } from 'react-icons/fa';

const initialFaqs = [
  {
    id: 'about',
    question: '💼 Current Role & About',
    answer: 'Priti Yadav is a Full Stack Developer Intern at Ebslon Infotech Pvt. Ltd. and a B.Tech IT scholar at GITM (AKTU). She specializes in React.js, Next.js, Node.js, Express, MongoDB, MySQL, and enterprise workflows.'
  },
  {
    id: 'projects',
    question: '💻 Featured Projects',
    answer: 'Her featured work includes the live Tilak Stone Arts Website, TSA Enterprise ERP, CRM ,  TSA Tracker PWA, and Voga Fashion Store (Stripe + Redux).'
  },
  {
    id: 'resume',
    question: '📄 Resume & CV Download',
    answer: "You can download Priti's official updated PDF resume directly using the 'Resume / CV' button in the hero section, or open /resume.pdf directly in your browser!"
  },
  {
    id: 'skills',
    question: '⚛️ Technical Stack',
    answer: 'JavaScript (ES6+), React.js, Next.js, Node.js, Express, MongoDB, MySQL, Java, REST APIs, PWA, n8n automations, and DSA problem solving.'
  },
  {
    id: 'contact',
    question: '💬 WhatsApp & Contact',
    answer: 'You can chat directly with Priti on WhatsApp at +91-8882453789, email her at pritiyadavit25@gmail.com, or send a message via the Contact section!'
  },
  {
    id: 'education',
    question: '🎓 Education',
    answer: 'Priti is currently pursuing her B.Tech in IT (AKTU) at GITM and completed her Diploma in IT from Government Girls Polytechnic Lucknow with 80% honors.'
  },
  {
    id: 'hobbies',
    question: '🎨 Hobbies & Interests',
    answer: 'Singing, reading tech books, and exploring new architectural ideas & technologies.'
  },
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "👋 Hi! I'm Priti's Portfolio Assistant. Ask me a question or tap a topic below!",
      sender: 'bot',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (userText) => {
    const textToSend = userText || input;
    if (!textToSend.trim()) return;

    const userMsg = {
      id: Date.now(),
      text: textToSend,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!userText) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = getBotResponse(textToSend);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: botResponse,
          sender: 'bot',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setIsTyping(false);
    }, 600);
  };

  const getBotResponse = (query) => {
    const q = query.toLowerCase();
    if (q.includes('resume') || q.includes('cv') || q.includes('download')) {
      return "You can download Priti's official PDF resume directly by clicking the 'Resume / CV' button at the top, or by downloading /resume.pdf!";
    }
    if (q.includes('about') || q.includes('who is') || q.includes('ebslon') || q.includes('work') || q.includes('company')) {
      return 'Priti Yadav is currently a Full Stack Developer Intern at Ebslon Infotech Pvt. Ltd. She engineers scalable enterprise modules, React/Next.js platforms, and backend REST microservices.';
    }
    if (q.includes('project') || q.includes('app') || q.includes('tsa') || q.includes('erp')) {
      return 'Check out the live Tilak Stone Arts Website, TSA Enterprise ERP (Cinema Desk), TSA Tracker PWA, and Voga Fashion Store in the Projects section!';
    }
    if (q.includes('skill') || q.includes('react') || q.includes('node') || q.includes('tech')) {
      return 'Her core stack spans React.js, Next.js, Node.js, Express, MongoDB, MySQL, Java, REST APIs, PWA, and n8n automations!';
    }
    if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('phone') || q.includes('whatsapp')) {
      return 'You can message Priti on WhatsApp at +91-8882453789, email at pritiyadavit25@gmail.com, or use the Contact section on this page!';
    }
    if (q.includes('education') || q.includes('college') || q.includes('degree') || q.includes('diploma') || q.includes('aktu')) {
      return 'She is currently pursuing her B.Tech in IT at GITM (AKTU) and scored 80% in her Diploma in IT from Government Girls Polytechnic Lucknow.';
    }
    if (q.includes('hobby') || q.includes('hobbies') || q.includes('sing') || q.includes('book') || q.includes('interest')) {
      return 'In her free time, Priti loves singing melodious tunes, reading insightful engineering/tech books, and exploring fresh software architectural concepts!';
    }
    return "Thank you for reaching out! Feel free to explore the projects above or connect with Priti directly at pritiyadavit25@gmail.com.";
  };

  return (
    <div style={{ position: 'fixed', bottom: '25px', right: '25px', zIndex: 2500 }}>
      {/* Floating Glass Trigger Button */}
      {!isOpen && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="glass-circle-btn"
          style={{
            width: '56px',
            height: '56px',
            fontSize: '1.4rem',
            background: 'var(--accent)',
            color: '#fff',
            boxShadow: 'var(--glass-glow)',
          }}
          title="Chat with Assistant"
        >
          <FaCommentDots />
        </motion.button>
      )}

      {/* Chat Window in Frosted Glass */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 20 }}
            className="glass-stage"
            style={{
              width: '360px',
              maxWidth: 'calc(100vw - 32px)',
              height: '520px',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              background: 'rgba(10, 15, 28, 0.94)',
              borderRadius: '24px',
            }}
          >
            {/* Header */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderBottom: '1px solid var(--glass-border)',
                padding: '0.9rem 1.2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '10px',
                    background: 'var(--accent)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                  }}
                >
                  <FaRobot />
                </div>
                <div>
                  <div style={{ fontWeight: '800', fontSize: '0.95rem' }}>AI Glass Assistant</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-subtle)' }}>Priti Yadav Portfolio</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                <button
                  onClick={() =>
                    setMessages([
                      {
                        id: Date.now(),
                        text: "Chat cleared! How can I help you?",
                        sender: 'bot',
                        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                      }
                    ])
                  }
                  className="glass-circle-btn"
                  style={{ width: '30px', height: '30px', fontSize: '0.75rem' }}
                  title="Clear Chat"
                >
                  <FaTrashAlt />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="glass-circle-btn"
                  style={{ width: '30px', height: '30px', fontSize: '0.85rem' }}
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            {/* Messages Body */}
            <div
              style={{
                flex: 1,
                padding: '1rem',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.8rem',
              }}
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  }}
                >
                  <div
                    style={{
                      maxWidth: '82%',
                      padding: '0.7rem 0.95rem',
                      borderRadius: msg.sender === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                      background: msg.sender === 'user' ? 'var(--accent)' : 'var(--glass-pill)',
                      color: msg.sender === 'user' ? '#fff' : 'var(--text)',
                      fontSize: '0.88rem',
                      lineHeight: '1.5',
                      border: msg.sender === 'user' ? 'none' : '1px solid var(--glass-pill-border)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                    }}
                  >
                    {msg.text}
                  </div>
                  <span style={{ fontSize: '0.68rem', color: 'var(--text-subtle)', marginTop: '0.2rem' }}>
                    {msg.time}
                  </span>
                </div>
              ))}

              {isTyping && (
                <div style={{ display: 'flex', gap: '0.3rem', padding: '0.4rem', color: 'var(--accent)', fontSize: '0.82rem' }}>
                  <span>Assistant is thinking...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* FAQ Quick Chips */}
            <div
              style={{
                padding: '0.5rem 0.8rem',
                display: 'flex',
                gap: '0.4rem',
                overflowX: 'auto',
                borderTop: '1px solid var(--glass-border)',
                background: 'rgba(0,0,0,0.2)',
              }}
            >
              {initialFaqs.map((faq) => (
                <button
                  key={faq.id}
                  onClick={() => handleSend(faq.question)}
                  style={{
                    whiteSpace: 'nowrap',
                    fontSize: '0.74rem',
                    padding: '0.3rem 0.65rem',
                    borderRadius: '20px',
                    border: '1px solid var(--glass-pill-border)',
                    background: 'var(--glass-pill)',
                    color: 'var(--text)',
                    cursor: 'pointer',
                  }}
                >
                  {faq.question}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              style={{
                padding: '0.7rem 0.9rem',
                display: 'flex',
                gap: '0.5rem',
                borderTop: '1px solid var(--glass-border)',
                background: 'rgba(0,0,0,0.3)',
              }}
            >
              <input
                type="text"
                placeholder="Ask about resume, skills, projects..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={{
                  flex: 1,
                  padding: '0.55rem 0.9rem',
                  borderRadius: '20px',
                  border: '1px solid var(--glass-pill-border)',
                  background: 'var(--glass-pill)',
                  color: 'var(--text)',
                  fontSize: '0.85rem',
                  outline: 'none',
                }}
              />
              <button
                type="submit"
                className="glass-circle-btn"
                style={{
                  width: '36px',
                  height: '36px',
                  background: 'var(--accent)',
                  color: '#fff',
                  border: 'none',
                }}
              >
                <FaPaperPlane style={{ fontSize: '0.8rem' }} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}