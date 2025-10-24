import React, { useState } from 'react';
import { useColorMode } from '@docusaurus/theme-common';

// SVG Icons
const ChevronRight = ({ size = 16, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const CheckCircle = ({ size = 24, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const AlertCircle = ({ size = 24, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const ExternalLink = ({ size = 16, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const Info = ({ size = 20, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

// Main Component
const InfrastructureAccessSection = ({ 
  badge,
  title, 
  description, 
  steps, 
  helpBox,
  successBox,
  maxWidth = '1200px'
}) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const [expandedStep, setExpandedStep] = useState(null);

  // Theme-aware colors
  const theme = {
    badge: {
      bg: isDark ? 'rgba(6, 182, 212, 0.1)' : 'rgba(6, 182, 212, 0.08)',
      border: isDark ? 'rgba(6, 182, 212, 0.3)' : 'rgba(6, 182, 212, 0.25)',
      text: isDark ? '#06b6d4' : '#0891b2'
    },
    stepCard: {
      bg: isDark ? 'rgba(30, 41, 59, 0.4)' : 'rgba(241, 245, 249, 0.8)',
      border: isDark ? 'rgba(71, 85, 105, 0.5)' : 'rgba(203, 213, 225, 0.7)',
    },
    stepNumber: {
      bg: isDark ? 'linear-gradient(to bottom right, #06b6d4, #2563eb)' : 'linear-gradient(to bottom right, #0891b2, #1d4ed8)',
      shadow: isDark ? '0 10px 15px -3px rgba(6, 182, 212, 0.2)' : '0 10px 15px -3px rgba(6, 182, 212, 0.25)'
    },
    optionalBadge: {
      bg: isDark ? 'rgba(245, 158, 11, 0.2)' : 'rgba(251, 191, 36, 0.15)',
      text: isDark ? '#fbbf24' : '#d97706',
      border: isDark ? 'rgba(245, 158, 11, 0.3)' : 'rgba(245, 158, 11, 0.3)'
    },
    expandedDetails: {
      bg: isDark ? 'rgba(15, 23, 42, 0.5)' : 'rgba(226, 232, 240, 0.6)',
      border: isDark ? 'rgba(71, 85, 105, 0.5)' : 'rgba(203, 213, 225, 0.8)',
      iconColor: isDark ? '#06b6d4' : '#0891b2'
    },
    button: {
      primary: {
        bg: isDark ? '#06b6d4' : '#0891b2',
      },
      secondary: {
        text: isDark ? '#06b6d4' : '#0891b2',
      }
    },
    infoBox: {
      bg: isDark ? 'linear-gradient(to right, rgba(30, 58, 138, 0.3), rgba(8, 145, 178, 0.3))' : 'linear-gradient(to right, rgba(191, 219, 254, 0.5), rgba(165, 243, 252, 0.5))',
      border: isDark ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.4)',
      iconColor: isDark ? '#60a5fa' : '#3b82f6'
    },
    successBox: {
      bg: isDark ? 'rgba(30, 41, 59, 0.4)' : 'rgba(241, 245, 249, 0.8)',
      border: isDark ? 'rgba(71, 85, 105, 0.5)' : 'rgba(203, 213, 225, 0.7)',
      iconColor: isDark ? '#4ade80' : '#22c55e'
    },
    successButton: {
      bg: isDark ? 'linear-gradient(to right, #10b981, #059669)' : 'linear-gradient(to right, #22c55e, #16a34a)',
    },
    link: {
      color: isDark ? '#06b6d4' : '#0891b2',
      decoration: isDark ? 'rgba(6, 182, 212, 0.3)' : 'rgba(6, 182, 212, 0.4)'
    },
    decorator: isDark ? 'linear-gradient(to right, #06b6d4, #3b82f6)' : 'linear-gradient(to right, #0891b2, #2563eb)'
  };

  return (
    <div style={{ maxWidth, margin: '0 auto', padding: '1rem 1rem' }}>
      {badge && (
        <div style={{ display: 'inline-block', padding: '0.375rem 1rem', background: theme.badge.bg, border: `1px solid ${theme.badge.border}`, borderRadius: '9999px', marginBottom: '1rem' }}>
          <span style={{ color: theme.badge.text, fontSize: '0.875rem', fontWeight: 500 }}>{badge}</span>
        </div>
      )}
      
      {title && (
        <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1.5rem', background: isDark ? 'linear-gradient(to right, var(--ifm-font-color-base), rgba(156, 163, 175, 0.8))' : 'linear-gradient(to right, var(--ifm-font-color-base), rgba(100, 116, 139, 0.7))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1.2 }}>
          {title}
        </h1>
      )}
      
      {description && (
        <div style={{ fontSize: '1.25rem', lineHeight: 1.75, marginBottom: '3rem', maxWidth: '70rem', color: 'var(--ifm-color-emphasis-700)' }}>
          {description}
        </div>
      )}

      {steps && steps.length > 0 && (
        <>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem' }}>
            <div style={{ height: '4px', width: '3rem', background: theme.decorator, borderRadius: '9999px' }}></div>
            Getting Started
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
            {steps.map((step, index) => (
              <div key={index} style={{ background: theme.stepCard.bg, border: `1px solid ${theme.stepCard.border}`, borderRadius: '0.75rem', padding: '1.5rem', transition: 'all 0.3s' }}>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'start' }}>
                  <div style={{ flexShrink: 0, width: '3rem', height: '3rem', borderRadius: '50%', background: theme.stepNumber.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1.125rem', boxShadow: theme.stepNumber.shadow, color: 'white' }}>
                    {step.number || index + 1}
                  </div>
                  
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {step.title}
                      {step.optional && (
                        <span style={{ fontSize: '0.75rem', padding: '0.125rem 0.5rem', background: theme.optionalBadge.bg, color: theme.optionalBadge.text, border: `1px solid ${theme.optionalBadge.border}`, borderRadius: '9999px' }}>
                          If needed
                        </span>
                      )}
                    </h3>
                    <p style={{ color: 'var(--ifm-color-emphasis-700)', lineHeight: 1.625, marginBottom: '1rem' }}>{step.description}</p>

                    {step.details && expandedStep === index && (
                      <div style={{ marginTop: '1rem', padding: '1rem', background: theme.expandedDetails.bg, border: `1px solid ${theme.expandedDetails.border}`, borderRadius: '0.5rem', display: 'flex', gap: '0.75rem' }}>
                        <Info size={20} style={{ color: theme.expandedDetails.iconColor, flexShrink: 0, marginTop: '0.125rem' }} />
                        <p style={{ fontSize: '0.875rem', color: 'var(--ifm-color-emphasis-700)' }}>{step.details}</p>
                      </div>
                    )}

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                      {step.buttons && step.buttons.map((button, btnIndex) => (
                        <a 
                          key={btnIndex}
                          href={button.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', background: theme.button.primary.bg, color: 'white', fontSize: '1rem', fontWeight: 500, border: 'none', borderRadius: '0.5rem', cursor: 'pointer', transition: 'all 0.3s', textDecoration: 'none' }}
                        >
                          {button.text}
                          <ExternalLink size={18} />
                        </a>
                      ))}
                      {step.details && (
                        <button 
                          onClick={() => setExpandedStep(expandedStep === index ? null : index)} 
                          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1rem', background: 'transparent', color: theme.button.secondary.text, fontSize: '1rem', fontWeight: 500, border: 'none', cursor: 'pointer', transition: 'all 0.2s' }}
                        >
                          {expandedStep === index ? 'Hide' : 'More'} details
                          <ChevronRight size={18} style={{ transition: 'transform 0.3s', transform: expandedStep === index ? 'rotate(90deg)' : 'rotate(0deg)' }} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {helpBox && (
        <div style={{ background: theme.infoBox.bg, border: `1px solid ${theme.infoBox.border}`, borderRadius: '0.75rem', padding: '1.5rem', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <AlertCircle size={24} style={{ color: theme.infoBox.iconColor, flexShrink: 0, marginTop: '0.25rem' }} />
            <div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>{helpBox.title}</h3>
              <div style={{ color: 'var(--ifm-color-emphasis-700)' }}>
                {helpBox.content}
              </div>
            </div>
          </div>
        </div>
      )}

      {successBox && (
        <div style={{ background: theme.successBox.bg, border: `1px solid ${theme.successBox.border}`, borderRadius: '0.75rem', padding: '2rem' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
            <CheckCircle size={28} style={{ color: theme.successBox.iconColor, flexShrink: 0, marginTop: '0.25rem' }} />
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>{successBox.title}</h3>
              <p style={{ fontSize: '1.125rem', color: 'var(--ifm-color-emphasis-700)', marginBottom: '1rem' }}>
                {successBox.description}
              </p>
              {successBox.link && (
                <a href={successBox.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', background: theme.successButton.bg, color: 'white', fontWeight: 600, textDecoration: 'none', borderRadius: '0.5rem', transition: 'all 0.3s' }}>
                  {successBox.linkText}
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfrastructureAccessSection;