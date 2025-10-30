import React, { useState, useEffect } from 'react';
import { useColorMode } from '@docusaurus/theme-common';

const InfrastructureNavigator = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const [activeSection, setActiveSection] = useState('');
  const [isSticky, setIsSticky] = useState(false);

  // BigQuery Icon Component
  const BigQueryIcon = ({ isActive, size = 20 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 64 64">
      <path d="M14.48 58.196L.558 34.082c-.744-1.288-.744-2.876 0-4.164L14.48 5.805c.743-1.287 2.115-2.08 3.6-2.082h27.857c1.48.007 2.845.8 3.585 2.082l13.92 24.113c.744 1.288.744 2.876 0 4.164L49.52 58.196c-.743 1.287-2.115 2.08-3.6 2.082H18.07c-1.483-.005-2.85-.798-3.593-2.082z" fill={isActive ? "white" : "#4386fa"}/>
      <path d="M40.697 24.235s3.87 9.283-1.406 14.545-14.883 1.894-14.883 1.894L43.95 60.27h1.984c1.486-.002 2.858-.796 3.6-2.082L58.75 42.23z" opacity={isActive ? "0.3" : "0.1"}/>
      <path d="M45.267 43.23L41 38.953a.67.67 0 0 0-.158-.12 11.63 11.63 0 1 0-2.032 2.037.67.67 0 0 0 .113.15l4.277 4.277a.67.67 0 0 0 .947 0l1.12-1.12a.67.67 0 0 0 0-.947zM31.64 40.464a8.75 8.75 0 1 1 8.749-8.749 8.75 8.75 0 0 1-8.749 8.749zm-5.593-9.216v3.616c.557.983 1.363 1.803 2.338 2.375v-6.013zm4.375-2.998v9.772a6.45 6.45 0 0 0 2.338 0V28.25zm6.764 6.606v-2.142H34.85v4.5a6.43 6.43 0 0 0 2.338-2.368z" fill={isActive ? "rgba(255,255,255,0.9)" : "#fff"}/>
    </svg>
  );

  const sections = [
    { id: 'public-cloud', label: 'Public Cloud', shortLabel: 'Public Cloud', icon: '☁️', type: 'emoji' },
    { id: 'jupyterhub', label: 'CIROH-2i2c JupyterHub', shortLabel: 'CIROH-2i2c JupyterHub', icon: '📓', type: 'emoji' },
    { id: 'on-premises', label: 'On-Premises (HPC)', shortLabel: 'On-Premises (HPC)', icon: '🖥️', type: 'emoji' },
    { id: 'nsf-access', label: 'NSF ACCESS', shortLabel: 'NSF Access', icon: '🚀', type: 'emoji' },
    { id: 'bigquery', label: 'NWM BigQuery API', shortLabel: 'NWM BigQuery API', icon: 'bigquery', type: 'svg' },
    { id: 'workshops', label: 'Workshops', shortLabel: 'Workshops', icon: '🎓', type: 'emoji' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 400);

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

  const navStyle = {
    position: isSticky ? 'sticky' : 'relative',
    top: isSticky ? '60px' : '0',
    zIndex: 100,
    background: isDark 
      ? 'linear-gradient(to right, rgba(36, 37, 38, 0.95), rgba(28, 29, 30, 0.95))' 
      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(248, 250, 252, 0.98))',
    backdropFilter: 'blur(12px)',
    borderRadius: isSticky ? '0' : '1rem',
    padding: isSticky ? '0.5rem 1rem' : '1.25rem',
    marginBottom: '2rem',
    border: isDark 
      ? '1px solid rgba(71, 85, 105, 0.5)' 
      : isSticky 
        ? '1px solid rgba(203, 213, 225, 0.6)' 
        : '2px solid rgba(226, 232, 240, 0.8)',
    boxShadow: isSticky 
      ? isDark 
        ? '0 2px 12px rgba(0, 0, 0, 0.15)' 
        : '0 4px 16px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04)'
      : 'none',
    transition: 'all 0.3s ease'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: isSticky 
      ? 'repeat(auto-fit, minmax(100px, 1fr))' 
      : 'repeat(auto-fit, minmax(140px, 1fr))',
    gap: isSticky ? '0.4rem' : '0.75rem',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const buttonBaseStyle = {
    display: 'flex',
    flexDirection: isSticky ? 'row' : 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: isSticky ? '0.35rem 0.5rem' : '0.5rem 0.15rem',
    border: 'none',
    borderRadius: isSticky ? '0.4rem' : '0.75rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: isSticky ? '0.7rem' : '0.875rem',
    fontWeight: 500,
    textAlign: 'center',
    gap: isSticky ? '0.3rem' : '0.5rem'
  };

  return (
    <nav style={navStyle}>
      <div style={gridStyle}>
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          
          const buttonStyle = {
            ...buttonBaseStyle,
            background: isActive
              ? isDark
                ? 'linear-gradient(135deg, #06b6d4 0%, #2563eb 100%)'
                : 'linear-gradient(135deg, #0891b2 0%, #1d4ed8 100%)'
              : isDark 
                ? 'rgba(58, 58, 58, 0.6)' 
                : 'rgba(255, 255, 255, 0.8)',
            color: isActive 
              ? 'white' 
              : isDark 
                ? 'var(--ifm-color-emphasis-800)' 
                : '#334155',
            border: isActive 
              ? isDark
                ? isSticky ? '1.5px solid rgba(6, 182, 212, 0.5)' : '2px solid rgba(6, 182, 212, 0.5)'
                : isSticky ? '1.5px solid rgba(8, 145, 178, 0.5)' : '2px solid rgba(8, 145, 178, 0.5)'
              : isDark 
                ? '1px solid rgba(71, 85, 105, 0.5)' 
                : isSticky 
                  ? '1px solid rgba(226, 232, 240, 0.8)'
                  : '2px solid rgba(226, 232, 240, 1)',
            transform: isActive && !isSticky ? 'translateY(-2px)' : 'translateY(0)',
            boxShadow: isActive 
              ? isDark
                ? isSticky ? '0 3px 8px rgba(6, 182, 212, 0.2)' : '0 8px 20px rgba(6, 182, 212, 0.3)'
                : isSticky ? '0 3px 10px rgba(8, 145, 178, 0.15)' : '0 8px 24px rgba(8, 145, 178, 0.25), 0 2px 8px rgba(8, 145, 178, 0.15)'
              : isDark
                ? 'none'
                : isSticky 
                  ? '0 1px 2px rgba(0, 0, 0, 0.04)'
                  : '0 2px 8px rgba(0, 0, 0, 0.04)'
          };

          const iconSize = isSticky ? '0.9rem' : '1.5rem';

          return (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              style={buttonStyle}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = isDark 
                    ? 'rgba(51, 65, 85, 0.8)' 
                    : 'rgba(240, 246, 252, 1)';
                  if (!isSticky) {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }
                  e.currentTarget.style.boxShadow = isDark
                    ? '0 4px 12px rgba(0, 0, 0, 0.1)'
                    : '0 4px 16px rgba(8, 145, 178, 0.12)';
                  e.currentTarget.style.borderColor = isDark
                    ? 'rgba(100, 116, 139, 0.6)'
                    : 'rgba(8, 145, 178, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = isDark 
                    ? 'rgba(58, 58, 58, 0.6)' 
                    : 'rgba(255, 255, 255, 0.8)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = isDark
                    ? 'none'
                    : isSticky 
                      ? '0 1px 2px rgba(0, 0, 0, 0.04)'
                      : '0 2px 8px rgba(0, 0, 0, 0.04)';
                  e.currentTarget.style.borderColor = isDark
                    ? 'rgba(71, 85, 105, 0.5)'
                    : 'rgba(226, 232, 240, 1)';
                }
              }}
            >
              {section.type === 'svg' ? (
                <BigQueryIcon isActive={isActive} size={isSticky ? 16 : 20} />
              ) : (
                <span style={{ fontSize: iconSize }}>{section.icon}</span>
              )}
              <span style={{ 
                fontWeight: isActive ? 600 : 500,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}>
                {isSticky ? section.shortLabel : section.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default InfrastructureNavigator;