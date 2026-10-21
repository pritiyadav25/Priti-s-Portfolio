import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaJs, FaJava, FaReact, FaNodeJs, FaGitAlt,
  FaCloudUploadAlt, FaHtml5, FaCss3Alt, FaCode, FaRobot,
  FaLayerGroup, FaServer, FaDatabase, FaTools, FaCheckCircle,
  FaBolt, FaShieldAlt
} from 'react-icons/fa';
import {
  SiC, SiExpress, SiMongodb, SiMysql, SiPostman,
  SiJsonwebtokens, SiNextdotjs, SiN8N
} from 'react-icons/si';
import { GrCycle } from 'react-icons/gr';

const skillCategories = [
  {
    id: "frontend",
    tab: "Frontend",
    title: "Frontend Architecture",
    badge: "UI & INTERACTIVITY",
    desc: "Modern reactive frontends, component-driven design & responsive layouts",
    icon: <FaLayerGroup />,
    accent: "#38bdf8",
    gradient: "linear-gradient(135deg, rgba(56, 189, 248, 0.15) 0%, rgba(99, 102, 241, 0.05) 100%)",
    skills: [
      { name: "React.js", tag: "Component Library", level: 92, icon: <FaReact />, color: "#61DAFB" },
      { name: "Next.js", tag: "Fullstack Framework", level: 86, icon: <SiNextdotjs />, color: "#ffffff" },
      { name: "JavaScript (ES6+)", tag: "Core Language", level: 90, icon: <FaJs />, color: "#F7DF1E" },
      { name: "HTML5 & CSS3", tag: "Semantic Markup", level: 95, icon: <FaHtml5 />, color: "#E34F26" },
      { name: "Glassmorphism UI", tag: "Design Systems", level: 92, icon: <FaCss3Alt />, color: "#38bdf8" },
    ]
  },
  {
    id: "backend",
    tab: "Backend & APIs",
    title: "Backend & Systems",
    badge: "SERVER & ARCHITECTURE",
    desc: "Scalable REST APIs, enterprise microservices & secure token authentication",
    icon: <FaServer />,
    accent: "#10b981",
    gradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(6, 95, 70, 0.05) 100%)",
    skills: [
      { name: "Node.js", tag: "Runtime Environment", level: 88, icon: <FaNodeJs />, color: "#68A063" },
      { name: "Express.js", tag: "Server Framework", level: 88, icon: <SiExpress />, color: "#ffffff" },
      { name: "RESTful APIs", tag: "API Architecture", level: 92, icon: <FaCloudUploadAlt />, color: "#38bdf8" },
      { name: "JWT Authentication", tag: "Security & RBAC", level: 85, icon: <SiJsonwebtokens />, color: "#D63AFF" },
      { name: "CRUD & Middleware", tag: "Pipeline Logic", level: 90, icon: <GrCycle />, color: "#10b981" },
    ]
  },
  {
    id: "databases",
    tab: "Databases & CS",
    title: "Databases & Core CS",
    badge: "DATA & ALGORITHMS",
    desc: "Schema design, relational databases, data structures & clean algorithms",
    icon: <FaDatabase />,
    accent: "#f59e0b",
    gradient: "linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(180, 83, 9, 0.05) 100%)",
    skills: [
      { name: "MongoDB", tag: "NoSQL Database", level: 86, icon: <SiMongodb />, color: "#47A248" },
      { name: "MySQL", tag: "Relational RDBMS", level: 82, icon: <SiMysql />, color: "#4479A1" },
      { name: "Java", tag: "Object-Oriented", level: 78, icon: <FaJava />, color: "#EA2D2E" },
      { name: "C Programming", tag: "System Level", level: 85, icon: <SiC />, color: "#A8B9CC" },
      { name: "DSA & OOP Concepts", tag: "Computer Science", level: 80, icon: <FaCode />, color: "#f59e0b" },
    ]
  },
  {
    id: "tools",
    tab: "Automation & Tools",
    title: "Automation & Workflows",
    badge: "PRODUCTIVITY & AI",
    desc: "Low-code automations, AI workflow integrations, version control & testing",
    icon: <FaTools />,
    accent: "#ec4899",
    gradient: "linear-gradient(135deg, rgba(236, 72, 153, 0.15) 0%, rgba(131, 24, 67, 0.05) 100%)",
    skills: [
      { name: "n8n Automation", tag: "Workflow Pipeline", level: 85, icon: <SiN8N />, color: "#FF6584" },
      { name: "AI Agent Workflows", tag: "LLM Orchestration", level: 82, icon: <FaRobot />, color: "#38bdf8" },
      { name: "Git & GitHub", tag: "Version Control", level: 92, icon: <FaGitAlt />, color: "#F05032" },
      { name: "Postman Platform", tag: "API Testing & Docs", level: 88, icon: <SiPostman />, color: "#FF6C37" },
    ]
  }
];

const marqueeBadges = [
  { name: "React 18", color: "#61DAFB" },
  { name: "Next.js", color: "#ffffff" },
  { name: "Node.js", color: "#68A063" },
  { name: "Express", color: "#cbd5e1" },
  { name: "MongoDB", color: "#47A248" },
  { name: "MySQL", color: "#4479A1" },
  { name: "REST APIs", color: "#38bdf8" },
  { name: "JWT Auth", color: "#D63AFF" },
  { name: "n8n Automation", color: "#FF6584" },
  { name: "AI Workflows", color: "#38bdf8" },
  { name: "JavaScript ES6+", color: "#F7DF1E" },
  { name: "Git / GitHub", color: "#F05032" },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('All');

  const filterTabs = [
    { label: 'All Tech Stack', value: 'All' },
    { label: 'Frontend', value: 'Frontend' },
    { label: 'Backend & APIs', value: 'Backend & APIs' },
    { label: 'Databases & CS', value: 'Databases & CS' },
    { label: 'Automation & Tools', value: 'Automation & Tools' },
  ];

  const filteredCategories = skillCategories.filter((cat) => {
    if (activeTab === 'All') return true;
    return cat.tab === activeTab;
  });

  return (
    <section id="skills" style={{ padding: '4.5rem 1rem', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '1.4rem' }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.3rem 0.85rem',
              borderRadius: '20px',
              background: 'rgba(56, 189, 248, 0.1)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              color: 'var(--accent)',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.78rem',
              fontWeight: '700',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
          >
            <FaBolt style={{ fontSize: '0.72rem' }} /> TECHNICAL ARSENAL
          </div>

          <h2 className="section-title" style={{ marginBottom: '0.6rem' }}>
            SKILLS & <span className="gradient-text">TECH STACK</span>
          </h2>
          <p className="section-subtitle" style={{ maxWidth: '640px', margin: '0 auto', fontSize: '0.95rem' }}>
            A curated inventory of programming languages, modern frameworks, data systems, and automation platforms I use to build scalable products.
          </p>
        </motion.div>

        {/* Dynamic Tech Marquee Ribbon */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.6rem',
            flexWrap: 'wrap',
            marginBottom: '2rem',
            maxWidth: '850px',
            margin: '0 auto 2.2rem auto',
          }}
        >
          {marqueeBadges.map((badge, idx) => (
            <span
              key={idx}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.78rem',
                fontWeight: '600',
                fontFamily: 'JetBrains Mono, monospace',
                padding: '0.25rem 0.75rem',
                borderRadius: '16px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: 'var(--text)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: badge.color,
                  display: 'inline-block',
                  boxShadow: `0 0 6px ${badge.color}`,
                }}
              />
              {badge.name}
            </span>
          ))}
        </motion.div>

        {/* Filter Navigation Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.55rem',
            flexWrap: 'wrap',
            marginBottom: '2.2rem',
          }}
        >
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                style={{
                  padding: '0.48rem 1.15rem',
                  borderRadius: '25px',
                  border: isActive ? '1px solid var(--accent)' : '1px solid var(--glass-pill-border)',
                  background: isActive ? 'var(--accent)' : 'var(--glass-pill)',
                  color: isActive ? '#ffffff' : 'var(--text)',
                  fontWeight: isActive ? '700' : '500',
                  fontSize: '0.84rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  boxShadow: isActive ? '0 4px 18px rgba(var(--accent-rgb), 0.4)' : 'none',
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Horizontal Category Cards Layout */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category, catIdx) => (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: catIdx * 0.05 }}
                className="glass-card skill-card-horizontal"
                style={{
                  padding: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                  borderRadius: '24px',
                  border: '1px solid var(--glass-border)',
                  background: category.gradient,
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  boxShadow: '0 16px 36px -12px rgba(0, 0, 0, 0.35)',
                  transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = category.accent;
                  e.currentTarget.style.boxShadow = `0 20px 40px -10px ${category.accent}25`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--glass-border)';
                  e.currentTarget.style.boxShadow = '0 16px 36px -12px rgba(0, 0, 0, 0.35)';
                }}
              >
                {/* Left Column: Category Info */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '14px',
                        background: `${category.accent}20`,
                        border: `1px solid ${category.accent}50`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: category.accent,
                        fontSize: '1.3rem',
                        boxShadow: `0 4px 14px ${category.accent}30`,
                        flexShrink: 0,
                      }}
                    >
                      {category.icon}
                    </div>
                    <div>
                      <span
                        style={{
                          fontSize: '0.68rem',
                          fontWeight: '700',
                          letterSpacing: '0.08em',
                          color: category.accent,
                          textTransform: 'uppercase',
                          fontFamily: 'JetBrains Mono, monospace',
                          display: 'block',
                        }}
                      >
                        {category.badge}
                      </span>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: '800', margin: 0, letterSpacing: '-0.01em' }}>
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: '1.5', margin: 0 }}>
                    {category.desc}
                  </p>

                  <div>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.72rem',
                        fontFamily: 'JetBrains Mono, monospace',
                        fontWeight: '700',
                        color: category.accent,
                        background: `${category.accent}15`,
                        padding: '0.22rem 0.65rem',
                        borderRadius: '12px',
                        border: `1px solid ${category.accent}35`,
                      }}
                    >
                      {category.skills.length} Technologies
                    </span>
                  </div>
                </div>

                {/* Right Column: Skills in Horizontal Multi-Column Grid */}
                <div className="skill-items-horizontal-grid">
                  {category.skills.map((skill, i) => (
                    <div
                      key={i}
                      style={{
                        padding: '0.75rem 0.95rem',
                        borderRadius: '16px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        transition: 'all 0.25s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                        e.currentTarget.style.borderColor = `${skill.color}60`;
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      {/* Top: Icon + Name + Tag + Percentage Badge */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: 0 }}>
                          <div
                            style={{
                              width: '32px',
                              height: '32px',
                              borderRadius: '10px',
                              background: `${skill.color}18`,
                              border: `1px solid ${skill.color}35`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: skill.color,
                              fontSize: '1.15rem',
                              flexShrink: 0,
                            }}
                          >
                            {skill.icon}
                          </div>
                          <div style={{ minWidth: 0, overflow: 'hidden' }}>
                            <div style={{ fontSize: '0.88rem', fontWeight: '700', color: 'var(--text)', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                              {skill.name}
                            </div>
                            <div style={{ fontSize: '0.68rem', color: 'var(--text-subtle)', fontWeight: '500' }}>
                              {skill.tag}
                            </div>
                          </div>
                        </div>

                        {/* Percentage Badge */}
                        <div
                          style={{
                            fontFamily: 'JetBrains Mono, monospace',
                            fontSize: '0.82rem',
                            fontWeight: '700',
                            color: skill.color,
                            background: `${skill.color}15`,
                            padding: '0.2rem 0.55rem',
                            borderRadius: '10px',
                            border: `1px solid ${skill.color}40`,
                            boxShadow: `0 2px 8px ${skill.color}20`,
                            flexShrink: 0,
                            marginLeft: '0.5rem',
                          }}
                        >
                          {skill.level}%
                        </div>
                      </div>

                      {/* Dual-layer Radiant Progress Track */}
                      <div
                        style={{
                          width: '100%',
                          height: '5px',
                          background: 'rgba(255, 255, 255, 0.06)',
                          borderRadius: '6px',
                          overflow: 'hidden',
                          position: 'relative',
                        }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.1, delay: i * 0.08, ease: 'easeOut' }}
                          style={{
                            height: '100%',
                            borderRadius: '6px',
                            background: `linear-gradient(90deg, ${skill.color}50, ${skill.color})`,
                            boxShadow: `0 0 10px ${skill.color}80`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Trust & Capability Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem',
            marginTop: '2.5rem',
          }}
        >
          <div
            className="glass-card"
            style={{
              padding: '1rem 1.25rem',
              borderRadius: '18px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              border: '1px solid var(--glass-border)',
            }}
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'rgba(56, 189, 248, 0.15)',
                color: '#38bdf8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                flexShrink: 0,
              }}
            >
              <FaLayerGroup />
            </div>
            <div>
              <div style={{ fontSize: '0.9rem', fontWeight: '800' }}>Full-Stack MERN</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>End-to-end architecture</div>
            </div>
          </div>

          <div
            className="glass-card"
            style={{
              padding: '1rem 1.25rem',
              borderRadius: '18px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              border: '1px solid var(--glass-border)',
            }}
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'rgba(16, 185, 129, 0.15)',
                color: '#10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                flexShrink: 0,
              }}
            >
              <FaShieldAlt />
            </div>
            <div>
              <div style={{ fontSize: '0.9rem', fontWeight: '800' }}>Enterprise Security</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>RBAC, JWT & Encrypted Data</div>
            </div>
          </div>

          <div
            className="glass-card"
            style={{
              padding: '1rem 1.25rem',
              borderRadius: '18px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              border: '1px solid var(--glass-border)',
            }}
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'rgba(236, 72, 153, 0.15)',
                color: '#ec4899',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                flexShrink: 0,
              }}
            >
              <SiN8N />
            </div>
            <div>
              <div style={{ fontSize: '0.9rem', fontWeight: '800' }}>Automation & AI</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>n8n, LLMs & Smart Queues</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}