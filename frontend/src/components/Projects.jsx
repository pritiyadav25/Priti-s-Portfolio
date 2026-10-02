import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaSearch,
  FaTimes,
  FaCheckCircle,
  FaExpandAlt,
  FaLayerGroup
} from 'react-icons/fa';

import tsaWebsiteImg from '../assets/tsa_website.jpg';
import tsaErpImg from '../assets/tsa_erp.jpg';
import tsaTrackerImg from '../assets/tsa_tracker.jpg';
import ecomImg from '../assets/ecom.png';

const myProjects = [
  {
    id: 1,
    indexStr: '01',
    title: 'Tilak Stone Arts Website',
    subtitle: 'Live Production Client Website',
    category: 'Live Production & TSA',
    tech: ['Next.js', 'React.js', 'Node.js', 'REST APIs', 'Modern CSS / Responsive Design'],
    description: 'Developed and maintained core features for the official live business platform of Tilak Stone Arts, showcasing luxury handcrafted marble temples, bespoke pooja room architectural collections, dynamic product inquiry flows, and brand experience centers.',
    highlights: [
      'Built and maintained high-performance responsive UI components for temple catalogs and bespoke spaces',
      'Integrated dynamic API services for custom inquiries, appointment scheduling, and customer support',
      'Optimized asset loading, Next.js image pipelines, and reduced initial page render times',
      'Provided continuous production bug fixes, layout enhancements, and SEO optimizations'
    ],
    image: tsaWebsiteImg,
    live: 'https://www.tilakstonearts.com/',
    badge: '🚀 Live Production Site',
    badgeColor: 'rgba(124, 58, 237, 0.85)',
  },
  {
    id: 2,
    indexStr: '02',
    title: 'TSA ERP (Enterprise Resource Planning)',
    subtitle: 'Multi-Module Enterprise Application',
    category: 'Live Production & TSA',
    tech: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'n8n Automation', 'RBAC'],
    description: 'A multi-module enterprise ERP system managing CRM, HRMS, Inventory, Project Management, Delivery Management, and Expense Tracking. Independently developed the Cinema Desk module featuring media asset management, file streaming pipelines, granular permissions, and automated approval workflows.',
    highlights: [
      'Independently architected and built the Cinema Desk module with secure video streaming and timeline review',
      'Implemented granular Role-Based Access Control (RBAC) and permission matrices across enterprise modules',
      'Engineered multi-tier enterprise services covering CRM, HRMS, Inventory, and Expense Tracking',
      'Integrated n8n workflow automations and asynchronous event queues for real-time task notifications'
    ],
    image: tsaErpImg,
    live: 'https://tsaerp.com/login',
    badge: '🏢 Live Enterprise ERP',
    badgeColor: 'rgba(2, 132, 199, 0.85)',
  },
  {
    id: 3,
    indexStr: '03',
    title: 'TSA Tracker',
    subtitle: 'Real-time Task Tracking & PWA Platform',
    category: 'Live Production & TSA',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'PWA', 'REST APIs'],
    description: 'Contributed to a live enterprise task management and tracking platform featuring interactive sprint dashboards, lifecycle task tracking, automated status notifications, and Progressive Web App (PWA) integration for native-like offline capability.',
    highlights: [
      'Developed responsive task kanban boards, sprint velocity analytics, and interactive team activity timelines',
      'Integrated Progressive Web App (PWA) service workers for offline caching and instant mobile installability',
      'Built high-performance REST API endpoints with optimistic client state updates and validation',
      'Resolved critical production UI/UX bugs and enhanced cross-device touch responsiveness'
    ],
    image: tsaTrackerImg,
    live: 'http://tsatracker.ebslonserver3.com',
    badge: '⚡ Production PWA App',
    badgeColor: 'rgba(16, 185, 129, 0.85)',
  },
  {
    id: 4,
    indexStr: '04',
    title: 'Voga Fashion E-Commerce Store',
    subtitle: 'Full-Stack MERN Platform',
    category: 'Full-Stack MERN',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Stripe API', 'Redux Toolkit'],
    description: 'A full-stack e-commerce web platform featuring dynamic product browsing, category filtering, cart state management, user authentication, and secure Stripe payment integration.',
    highlights: [
      'Implemented centralized shopping cart and user session state using Redux Toolkit',
      'Integrated Stripe payment API for secure tokenized card checkouts',
      'Built backend REST API endpoints for catalog browsing, orders, and authentication'
    ],
    image: ecomImg,
    github: 'https://github.com/pritiyadav25/Fashion-Store-homepage',
    live: 'https://voga-faishon-store-by-priti.netlify.app/',
    badge: '🛍️ Live Demo Store',
    badgeColor: 'rgba(219, 39, 119, 0.85)',
  }
];

// Dynamically compute unique categories from active projects
const categories = ['All', ...Array.from(new Set(myProjects.map((p) => p.category)))];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = myProjects.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '1rem' }}
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
            PORTFOLIO HIGHLIGHTS
          </div>
          <h2 className="section-title">
            FEATURED <span className="gradient-text">PROJECTS & WORK</span>
          </h2>
          <p className="section-subtitle">
            Enterprise platforms, live client portals, full-stack web applications, and algorithmic systems engineered with modern standards.
          </p>
        </motion.div>

        {/* Filter Tabs & Search Controls (Glass Bar) */}
        <div
          className="glass-card"
          style={{
            padding: '0.75rem 1.1rem',
            marginBottom: '1.2rem',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.7rem',
          }}
        >
          {/* Category Filter Pills */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <FaLayerGroup style={{ color: 'var(--accent)', fontSize: '0.9rem', marginRight: '0.2rem' }} />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '0.45rem 1rem',
                  borderRadius: '25px',
                  border: selectedCategory === category ? '1px solid rgba(255,255,255,0.4)' : '1px solid var(--glass-pill-border)',
                  background: selectedCategory === category ? 'var(--accent)' : 'var(--glass-pill)',
                  color: selectedCategory === category ? '#fff' : 'var(--text)',
                  fontWeight: selectedCategory === category ? '700' : '500',
                  fontSize: '0.84rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Input Box */}
          <div
            style={{
              position: 'relative',
              minWidth: '240px',
              flex: '1 1 260px',
              maxWidth: '360px',
            }}
          >
            <FaSearch
              style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-subtle)',
                fontSize: '0.85rem',
              }}
            />
            <input
              type="text"
              placeholder="Search projects by name, tech or module..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.6rem 1rem 0.6rem 2.5rem',
                borderRadius: '25px',
                border: '1px solid var(--glass-pill-border)',
                background: 'var(--glass-pill)',
                color: 'var(--text)',
                fontSize: '0.88rem',
                outline: 'none',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
            />
          </div>
        </div>

        {/* Projects Grid: 2-Column Balanced Horizontal Glass Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))',
            gap: '1.1rem',
          }}
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="glass-card project-card-horizontal"
              >
                {/* Left Column: Compact Image Preview in Glass Frame */}
                <div className="project-card-image-col">
                  <img
                    src={project.image}
                    alt={project.title}
                  />

                  {/* Top Badge Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '8px',
                      left: '8px',
                      background: project.badgeColor,
                      color: '#fff',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '12px',
                      fontSize: '0.66rem',
                      fontWeight: '700',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255,255,255,0.25)',
                    }}
                  >
                    {project.badge}
                  </div>

                  {/* Expand Modal Trigger Icon Button */}
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="glass-circle-btn"
                    style={{
                      position: 'absolute',
                      bottom: '8px',
                      right: '8px',
                      width: '28px',
                      height: '28px',
                      fontSize: '0.7rem',
                      background: 'rgba(0,0,0,0.6)',
                      color: '#fff',
                    }}
                    title="Expand Architecture Details"
                  >
                    <FaExpandAlt />
                  </button>
                </div>

                {/* Right Column: Project Details & Actions */}
                <div
                  style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minWidth: 0,
                    gap: '0.4rem',
                  }}
                >
                  <div>
                    {/* Top Meta: Number & Category */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '0.5rem',
                        marginBottom: '0.25rem',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                        <span className="editorial-num" style={{ fontSize: '1.2rem', lineHeight: '1' }}>
                          {project.indexStr}
                        </span>
                        <span
                          style={{
                            fontSize: '0.68rem',
                            color: 'var(--accent)',
                            fontWeight: '700',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                          }}
                        >
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <h3
                      style={{
                        fontSize: '1.05rem',
                        fontWeight: '800',
                        lineHeight: '1.25',
                        marginBottom: '0.15rem',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                      title={project.title}
                    >
                      {project.title}
                    </h3>

                    <div
                      style={{
                        fontSize: '0.74rem',
                        color: 'var(--text-subtle)',
                        fontWeight: '600',
                        marginBottom: '0.35rem',
                      }}
                    >
                      {project.subtitle}
                    </div>

                    <p
                      style={{
                        color: 'var(--text-muted)',
                        fontSize: '0.8rem',
                        lineHeight: '1.4',
                        marginBottom: '0.45rem',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.3rem',
                        marginBottom: '0.4rem',
                      }}
                    >
                      {project.tech.slice(0, 4).map((t, i) => (
                        <span
                          key={i}
                          className="badge-pill"
                          style={{
                            fontSize: '0.68rem',
                            padding: '0.15rem 0.5rem',
                            borderRadius: '12px',
                          }}
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span
                          style={{
                            fontSize: '0.68rem',
                            color: 'var(--text-subtle)',
                            alignSelf: 'center',
                            fontWeight: '600',
                          }}
                        >
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons Row */}
                  <div
                    style={{
                      display: 'flex',
                      gap: '0.5rem',
                      alignItems: 'center',
                      paddingTop: '0.35rem',
                      borderTop: '1px solid var(--glass-border)',
                    }}
                  >
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="btn-outline"
                      style={{
                        padding: '0.35rem 0.75rem',
                        fontSize: '0.74rem',
                        flex: 1,
                        borderRadius: '20px',
                      }}
                    >
                      Details & Highlights +
                    </button>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-circle-btn"
                        style={{ width: '28px', height: '28px', fontSize: '0.74rem' }}
                        title="GitHub Repository"
                      >
                        <FaGithub />
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-circle-btn"
                        style={{ width: '28px', height: '28px', fontSize: '0.74rem', color: 'var(--accent)' }}
                        title="Open Live Website"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="glass-card" style={{ textAlign: 'center', padding: '3.5rem 1.5rem', marginTop: '2rem' }}>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
              No projects match your current filter or search query.
            </p>
          </div>
        )}
      </div>

      {/* Luxury Glass Detail Modal */}
      <AnimatePresence>
        {activeModalProject && (
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
              padding: 'clamp(1rem, 3vw, 2rem)',
            }}
            onClick={() => setActiveModalProject(null)}
          >
            <motion.div
              initial={{ scale: 0.94, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 20 }}
              className="glass-stage"
              style={{
                maxWidth: '720px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                background: 'rgba(10, 15, 28, 0.92)',
                position: 'relative',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Corner framing brackets */}
              <div className="corner-bracket-tl" />
              <div className="corner-bracket-tr" />
              <div className="corner-bracket-bl" />
              <div className="corner-bracket-br" />

              <button
                onClick={() => setActiveModalProject(null)}
                className="glass-circle-btn"
                style={{
                  position: 'absolute',
                  top: '1.2rem',
                  right: '1.2rem',
                }}
              >
                <FaTimes />
              </button>

              <div style={{ marginBottom: '1.4rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.4rem' }}>
                  <span className="editorial-num" style={{ fontSize: '1.8rem' }}>
                    {activeModalProject.indexStr}
                  </span>
                  <span
                    style={{
                      background: activeModalProject.badgeColor,
                      color: '#fff',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.72rem',
                      fontWeight: '700',
                      border: '1px solid rgba(255,255,255,0.2)',
                    }}
                  >
                    {activeModalProject.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: '800', marginBottom: '0.3rem' }}>
                  {activeModalProject.title}
                </h3>
                {activeModalProject.subtitle && (
                  <p style={{ color: 'var(--accent)', fontSize: '0.92rem', fontWeight: '600' }}>
                    {activeModalProject.subtitle}
                  </p>
                )}
              </div>

              {/* Preview image */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '16 / 9',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  marginBottom: '1.5rem',
                  border: '1px solid var(--glass-border)',
                }}
              >
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>

              <p style={{ lineHeight: '1.7', color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.94rem' }}>
                {activeModalProject.description}
              </p>

              {/* Technical Contributions */}
              <h4 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.9rem', color: 'var(--text)' }}>
                Key Technical Contributions & Architectural Highlights:
              </h4>

              <div
                className="glass-nested-card"
                style={{
                  padding: '1.2rem',
                  marginBottom: '1.8rem',
                }}
              >
                <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {activeModalProject.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.65rem',
                        fontSize: '0.9rem',
                        lineHeight: '1.6',
                        color: 'var(--text-muted)',
                      }}
                    >
                      <FaCheckCircle style={{ color: 'var(--accent)', marginTop: '4px', flexShrink: 0 }} />
                      <span style={{ color: 'var(--text)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                {activeModalProject.github && (
                  <a
                    href={activeModalProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                  >
                    <FaGithub /> View Source on GitHub
                  </a>
                )}
                {activeModalProject.live && (
                  <a
                    href={activeModalProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <FaExternalLinkAlt /> Open Live Platform ({activeModalProject.live.replace('https://', '').replace('http://', '')})
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
