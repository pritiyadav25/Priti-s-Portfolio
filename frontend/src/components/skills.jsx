import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaJs, FaJava, FaReact, FaNodeJs, FaGitAlt,
  FaCloudUploadAlt, FaLightbulb, FaHtml5, FaCss3Alt, FaMobileAlt, FaCode, FaRobot
} from 'react-icons/fa';
import {
  SiC, SiExpress, SiMongodb, SiMysql, SiPostman,
  SiJsonwebtokens, SiNextdotjs, SiN8N
} from 'react-icons/si';
import { GrCycle } from 'react-icons/gr';

const skillCategories = [
  {
    num: "01",
    title: "Programming Languages",
    skills: [
      { name: "JavaScript (ES6+)", icon: <FaJs />, level: 80 },
      { name: "Java", icon: <FaJava />, level: 65 },
      { name: "C Language", icon: <SiC />, level: 88 }
    ]
  },
  {
    num: "02",
    title: "Frontend Development",
    skills: [
      { name: "React.js", icon: <FaReact />, level: 90 },
      { name: "Next.js", icon: <SiNextdotjs />, level: 82 },
      { name: "HTML5 & CSS3", icon: <FaHtml5 />, level: 95 },
      { name: "Progressive Web Apps (PWA)", icon: <FaMobileAlt />, level: 84 },
      { name: "Responsive Glass UI / CSS", icon: <FaCss3Alt />, level: 92 }
    ]
  },
  {
    num: "03",
    title: "Backend & REST APIs",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, level: 86 },
      { name: "Express.js", icon: <SiExpress />, level: 88 },
      { name: "RESTful APIs Architecture", icon: <FaCloudUploadAlt />, level: 90 },
      { name: "JWT Auth & Enterprise Security", icon: <SiJsonwebtokens />, level: 85 }
    ]
  },
  {
    num: "04",
    title: "Databases & Storage",
    skills: [
      { name: "MongoDB (NoSQL)", icon: <SiMongodb />, level: 80 },
      { name: "MySQL (Relational)", icon: <SiMysql />, level: 80 }
    ]
  },
  {
    num: "05",
    title: "Core Computer Science",
    skills: [
      { name: "Data Structures & Algorithms", icon: <FaLightbulb />, level: 50 },
      { name: "Object-Oriented Programming (OOP)", icon: <FaCode />, level: 70 },
      { name: "CRUD & API Integration", icon: <GrCycle />, level: 90 }
    ]
  },
  {
    num: "06",
    title: "Automations, Tools & AI",
    skills: [
      { name: "n8n Workflow Automation", icon: <SiN8N />, level: 82 },
      { name: "AI Integration & Workflows", icon: <FaRobot />, level: 80 },
      { name: "Git & GitHub Version Control", icon: <FaGitAlt />, level: 90 },
      { name: "Postman API Platform", icon: <SiPostman />, level: 88 }
    ]
  }
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('All');

  const filterTabList = ['All', 'Frontend', 'Backend & REST APIs', 'Databases', 'Core Computer Science', 'Automations & Tools'];

  const filteredCategories = skillCategories.filter((cat) => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Frontend') return cat.title.includes('Frontend');
    if (activeTab === 'Backend & REST APIs') return cat.title.includes('Backend');
    if (activeTab === 'Databases') return cat.title.includes('Databases');
    if (activeTab === 'Core Computer Science') return cat.title.includes('Core');
    if (activeTab === 'Automations & Tools') return cat.title.includes('Automations');
    return true;
  });

  return (
    <section id="skills">
      <div className="container">
        {/* Header */}
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
            TECHNICAL CAPABILITIES
          </div>
          <h2 className="section-title">
            SKILLS & <span className="gradient-text">TECH STACK</span>
          </h2>
          <p className="section-subtitle">
            Languages, frontend frameworks, backend microservices, database modeling, and automated cloud workflows.
          </p>
        </motion.div>

        {/* Filter Tabs in Frosted Glass Container */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap',
            marginBottom: '1.2rem',
          }}
        >
          {filterTabList.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '0.42rem 1rem',
                borderRadius: '25px',
                border: activeTab === tab ? '1px solid rgba(255,255,255,0.4)' : '1px solid var(--glass-pill-border)',
                background: activeTab === tab ? 'var(--accent)' : 'var(--glass-pill)',
                color: activeTab === tab ? '#fff' : 'var(--text)',
                fontWeight: activeTab === tab ? '700' : '500',
                fontSize: '0.84rem',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid: Compact & Balanced */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '0.95rem',
          }}
        >
          {filteredCategories.map((category, idx) => (
            <motion.div
              key={category.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.35 }}
              viewport={{ once: true }}
              className="glass-card"
              style={{
                padding: '0.9rem 1.1rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: '18px',
              }}
            >
              <div>
                {/* Header with Editorial Number */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '0.65rem',
                    borderBottom: '1px solid var(--glass-border)',
                    paddingBottom: '0.45rem',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '0.96rem',
                      fontWeight: '800',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {category.title}
                  </h3>
                  <span className="editorial-num" style={{ fontSize: '1.1rem' }}>
                    {category.num}
                  </span>
                </div>

                {/* Skill List with Glowing Progress Tracks */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                  {category.skills.map((skill, i) => (
                    <div key={i}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: '0.25rem',
                          fontSize: '0.82rem',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                          <span style={{ color: 'var(--accent)', fontSize: '0.95rem' }}>{skill.icon}</span>
                          <span style={{ fontWeight: '500' }}>{skill.name}</span>
                        </div>
                        <span
                          style={{
                            fontSize: '0.72rem',
                            color: 'var(--text-muted)',
                            fontFamily: 'JetBrains Mono, monospace',
                            fontWeight: '600',
                          }}
                        >
                          {skill.level}%
                        </span>
                      </div>

                      {/* Glass Track with Glow Fill */}
                      <div
                        style={{
                          width: '100%',
                          height: '4px',
                          background: 'rgba(255, 255, 255, 0.08)',
                          borderRadius: '8px',
                          overflow: 'hidden',
                          border: '1px solid rgba(255, 255, 255, 0.05)',
                        }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, delay: i * 0.05 }}
                          viewport={{ once: true }}
                          style={{
                            height: '100%',
                            background: 'var(--accent-gradient)',
                            borderRadius: '8px',
                            boxShadow: '0 0 6px rgba(var(--accent-rgb), 0.5)',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}