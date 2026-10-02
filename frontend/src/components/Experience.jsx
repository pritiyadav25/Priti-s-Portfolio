import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaCertificate, FaCalendarAlt, FaMapMarkerAlt, FaGraduationCap, FaCheckCircle, FaLaptopCode } from 'react-icons/fa';

export default function Experience() {
  const [filter, setFilter] = useState('all');

  const experiences = [
    {
      id: 0,
      indexStr: '01',
      type: 'experience',
      title: 'Full Stack Developer Intern',
      company: 'Ebslon Infotech Pvt. Ltd.',
      location: 'New Delhi, India',
      duration: 'Aug 2026 – Present',
      description: 'Developing and maintaining scalable production web applications using React.js, Next.js, Node.js, Express.js, MongoDB, and REST APIs.',
      highlights: [
        'Develop and maintain production web applications using React.js, Next.js, Node.js, Express.js, MongoDB, and REST APIs',
        'Build and enhance enterprise ERP, CRM, HRMS, Inventory, Project Management, Delivery, Expense, and Task Management modules',
        'Implement frontend and backend features, API integration, database operations, authentication, validation, filtering, responsive UI, and workflow functionality',
        'Independently developed the Cinema Desk module and contributed to PWA, n8n workflow automation, and AI integrations'
      ],
      icon: <FaBuilding />,
    },
    {
      id: 1,
      indexStr: '02',
      type: 'experience',
      title: 'Full Stack Development Intern',
      company: 'Techpile Technology Pvt. Ltd.',
      location: 'Lucknow, India',
      duration: '3 Months',
      description: 'Developed responsive web applications with interactive frontend interfaces, backend APIs, database integration, and CRUD functionality.',
      highlights: [
        'Developed responsive web applications with frontend interfaces, backend APIs, database integration, and CRUD functionality',
        'Completed 240+ hours of practical development training and collaborated actively in a 4-member development team',
        'Constructed component-based UIs and optimized client-side state handling and API data flow'
      ],
      icon: <FaLaptopCode />,
    },
    {
      id: 2,
      indexStr: '03',
      type: 'certification',
      title: 'Full Stack Web Development Certification',
      company: 'Techpile Technology',
      location: 'Lucknow, India',
      duration: 'Certified Developer',
      description: 'Comprehensive certification covering full-stack web architecture, React, Node.js, REST API design, database modeling, and team development workflows.',
      highlights: [
        'Hands-on full stack engineering curriculum with 240+ hours of guided coding',
        'Built real-world web projects implementing authentication, database queries, and responsive design',
        'Mastered core web development standards, Git version control, and collaborative debugging'
      ],
      icon: <FaCertificate />,
    },
    {
      id: 3,
      indexStr: '04',
      type: 'education',
      title: 'B.Tech in Information Technology',
      company: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU) – GITM',
      location: 'Lucknow, India',
      duration: '2024 – 2027',
      description: 'Pursuing Bachelor of Technology in Information Technology with specialized coursework in Data Structures, Algorithms, Object-Oriented Programming, and Web Technologies.',
      highlights: [
        'Currently pursuing B.Tech in IT at GITM Lucknow (AKTU)',
        'Key Coursework: Data Structures & Algorithms, OOP, Database Management Systems (DBMS), Operating Systems, Computer Networks',
        'Active problem solver focusing on Java/JavaScript algorithms and full-stack software development'
      ],
      icon: <FaGraduationCap />,
    },
    {
      id: 4,
      indexStr: '05',
      type: 'education',
      title: 'Diploma in Information Technology (80%)',
      company: 'Board of Technical Education, UP – Government Girls’ Polytechnic',
      location: 'Lucknow, India',
      duration: '2021 – 2024',
      description: 'Graduated with 80% marks, establishing strong technical fundamentals in software programming, web development, computer hardware, and system architectures.',
      highlights: [
        'Graduated with 80% academic excellence',
        'Solid grounding in C, Java, HTML/CSS, JavaScript, and relational database systems',
        'Hands-on laboratory training, software projects, and technical presentations'
      ],
      icon: <FaGraduationCap />,
    }
  ];

  const filteredItems = experiences.filter((item) => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  return (
    <section id="experience">
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
            CAREER & MILESTONES
          </div>
          <h2 className="section-title">
            EXPERIENCE & <span className="gradient-text">EDUCATION</span>
          </h2>
          <p className="section-subtitle">
            Industry work history, enterprise production contributions, technical certifications, and university academics.
          </p>
        </motion.div>

        {/* Filter Tabs in Glass Pills */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.6rem',
            marginBottom: '1.2rem',
            flexWrap: 'wrap',
          }}
        >
          {[
            { id: 'all', label: 'All Timeline' },
            { id: 'experience', label: '💼 Work & Internships' },
            { id: 'education', label: '🎓 Education' },
            { id: 'certification', label: '📜 Certifications' },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              style={{
                padding: '0.45rem 1.1rem',
                borderRadius: '25px',
                border: filter === btn.id ? '1px solid rgba(255,255,255,0.4)' : '1px solid var(--glass-pill-border)',
                background: filter === btn.id ? 'var(--accent)' : 'var(--glass-pill)',
                color: filter === btn.id ? '#fff' : 'var(--text)',
                fontWeight: filter === btn.id ? '700' : '500',
                fontSize: '0.86rem',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Timeline Stack of Glass Cards */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
            maxWidth: '920px',
            margin: '0 auto',
          }}
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.35 }}
              viewport={{ once: true }}
              className="glass-card"
              style={{
                padding: 'clamp(0.9rem, 2vw, 1.2rem)',
                borderRadius: '18px',
                position: 'relative',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                }}
              >
                {/* Left: Icon circle with editorial index */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '12px',
                      background: 'var(--glass-pill)',
                      border: '1px solid var(--glass-pill-border)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      color: 'var(--accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.05rem',
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <span className="editorial-num" style={{ fontSize: '1.15rem' }}>
                    {item.indexStr}
                  </span>
                </div>

                {/* Right: Info Content */}
                <div style={{ flex: '1 1 280px', minWidth: 0 }}>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '0.4rem',
                      marginBottom: '0.25rem',
                    }}
                  >
                    <h3 style={{ fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', fontWeight: '800' }}>
                      {item.title}
                    </h3>
                    <span
                      className="badge-pill"
                      style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem', borderRadius: '12px' }}
                    >
                      <FaCalendarAlt style={{ color: 'var(--accent)' }} /> {item.duration}
                    </span>
                  </div>

                  <div
                    style={{
                      fontWeight: '600',
                      color: 'var(--accent)',
                      fontSize: '0.88rem',
                      marginBottom: '0.45rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      flexWrap: 'wrap',
                    }}
                  >
                    <span>{item.company}</span>
                    <span
                      style={{
                        fontSize: '0.78rem',
                        color: 'var(--text-muted)',
                        fontWeight: 'normal',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                      }}
                    >
                      <FaMapMarkerAlt /> {item.location}
                    </span>
                  </div>

                  <p style={{ lineHeight: '1.45', color: 'var(--text-muted)', fontSize: '0.84rem', marginBottom: '0.55rem' }}>
                    {item.description}
                  </p>

                  {/* Highlights list in compact nested frosted box */}
                  <div
                    className="glass-nested-card"
                    style={{
                      padding: '0.65rem 0.9rem',
                      borderRadius: '12px',
                    }}
                  >
                    <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                      {item.highlights.map((h, i) => (
                        <li
                          key={i}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.5rem',
                            fontSize: '0.82rem',
                            color: 'var(--text)',
                            lineHeight: '1.45',
                          }}
                        >
                          <FaCheckCircle style={{ color: 'var(--accent)', marginTop: '2px', flexShrink: 0, fontSize: '0.78rem' }} />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}