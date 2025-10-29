import React, { useState, useEffect } from 'react';
import { useColorMode } from '@docusaurus/theme-common';

const TableOfContents = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { id: 'public-cloud', label: 'Public Cloud Services' },
    { id: 'jupyterhub', label: 'CIROH-2i2c JupyterHub' },
    { id: 'on-premises', label: 'On-Premises Infra (HPC)' },
    { id: 'nsf-access', label: 'NSF ACCESS Allocations' },
    { id: 'bigquery', label: 'NWM BigQuery API' },
    { id: 'workshops', label: 'Workshop Support' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const currentSection = sectionElements.find(el => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    scrollToSection(id);
  };

  const handleMouseEnter = (e, isActive) => {
    if (!isActive) {
      e.currentTarget.style.color = isDark ? '#22d3ee' : '#0891b2';
      e.currentTarget.style.backgroundColor = isDark 
        ? 'rgba(6, 182, 212, 0.05)' 
        : 'rgba(6, 182, 212, 0.03)';
    }
  };

  const handleMouseLeave = (e, isActive) => {
    if (!isActive) {
      e.currentTarget.style.color = 'var(--ifm-color-emphasis-700)';
      e.currentTarget.style.backgroundColor = 'transparent';
    }
  };

  const containerStyle = {
    position: 'fixed',
    right: '20px',
    top: '120px',
    width: '250px',
    maxHeight: 'calc(100vh - 140px)',
    overflowY: 'auto',
    padding: '1rem',
    borderLeft: isDark 
      ? '2px solid rgba(71, 85, 105, 0.5)' 
      : '2px solid rgba(226, 232, 240, 1)',
    zIndex: 10
  };

  const titleStyle = {
    fontSize: '0.75rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: 'var(--ifm-color-emphasis-600)',
    marginBottom: '0.75rem'
  };

  const listStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0
  };

  const getLinkStyle = (isActive) => ({
    display: 'block',
    padding: '0.375rem 0.75rem',
    fontSize: '0.875rem',
    lineHeight: 1.4,
    textDecoration: 'none',
    borderLeft: '2px solid transparent',
    marginLeft: '-2px',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    color: isActive 
      ? (isDark ? '#06b6d4' : '#0891b2')
      : 'var(--ifm-color-emphasis-700)',
    borderLeftColor: isActive 
      ? (isDark ? '#06b6d4' : '#0891b2')
      : 'transparent',
    fontWeight: isActive ? 600 : 400,
    backgroundColor: isActive 
      ? (isDark ? 'rgba(6, 182, 212, 0.1)' : 'rgba(6, 182, 212, 0.05)')
      : 'transparent'
  });

  return (
    <nav style={containerStyle} className="thin-scrollbar">
      <div style={titleStyle}>On This Page</div>
      <ul style={listStyle}>
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={(e) => handleLinkClick(e, section.id)}
                style={getLinkStyle(isActive)}
                onMouseEnter={(e) => handleMouseEnter(e, isActive)}
                onMouseLeave={(e) => handleMouseLeave(e, isActive)}
              >
                {section.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default TableOfContents;