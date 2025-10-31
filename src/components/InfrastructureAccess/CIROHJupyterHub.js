import React from 'react';
import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';
import InfrastructureAccessSection from './InfrastructureAccessSection';

const CIROHJupyterHub = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const steps = [
    {
      title: "Submit Infrastructure Request",
      description: "Submit a GitHub template request detailing your project requirements and specifications.",
      buttons: [
        {
          text: "Cloud Infrastructure Request Form",
          link: "https://github.com/CIROH-UA/NGIAB-CloudInfra/issues/new?assignees=&labels=infrastructure&projects=&template=case_studies_call.md&title="
        }
      ],
      details: "Our team will review your request and assist you in obtaining the necessary access."
    },
    {
      title: "Request Individual Access",
      description: "After your project has been approved, submit one of the following forms to get access to CIROH-2i2c JupyterHub environments.",
      buttons: [
        {
          text: "CPU Access Request Form",
          link: "https://forms.office.com/Pages/ResponsePage.aspx?id=jnIAKtDwtECk6M5DPz-8p4IIpHdEnmhNgjOa9FjrwGtUNUoyV1UxNFIzV1AyTDhTNzdOT1Q5NVlLTC4u"
        },
        {
          text: "GPU Access Request Form",
          link: "https://forms.office.com/r/mkrVJzyg9u"
        }
      ],
      details: (
        <>
            You will need to submit your GitHub username for this request. If you do not currently have a GitHub account, follow the instructions at{' '}
            <a href="https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github" target="_blank" rel="noopener noreferrer" style={{color: '#06b6d4', textDecoration: 'underline'}}
            >
                GitHub
            </a>.
        </>
    )
    }
  ];

  const description = (
    <>
      In partnership with{' '}
      <a href="https://2i2c.org/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600 }}>
        2i2c
      </a>
      , CIROH provides JupyterHub with both CPU and GPU capabilities.
    </>
  );

  return (
    <>
      <InfrastructureAccessSection
        badge="Cloud Computing"
        title="Accessing CIROH-2i2c JupyterHub"
        description={description}
        steps={steps}
        
      />
      
      {/* Custom Images Section */}
      <div style={{
        maxWidth: '1200px',
        margin: '0rem auto 0',
        padding: '0 1rem'
      }}>
        <div style={{
          padding: '2rem',
          background: isDark ? 'rgba(30, 41, 59, 0.4)' : 'rgba(241, 245, 249, 0.8)',
          border: isDark ? '1px solid rgba(71, 85, 105, 0.5)' : '1px solid rgba(203, 213, 225, 0.7)',
          borderRadius: '0.75rem',
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            Requesting Custom Images
          </h3>
          
          <p style={{
            color: 'var(--ifm-color-emphasis-700)',
            marginBottom: '1rem',
            fontSize: '1rem'
          }}>
            To request custom images:
          </p>
          
          <ol style={{
            marginBottom: '1.5rem',
            paddingLeft: '1.5rem',
            color: 'var(--ifm-color-emphasis-800)'
          }}>
            <li style={{marginBottom: '0.75rem', lineHeight: 1.6}}>
              Create an{' '}
              <code style={{
                padding: '0.2rem 0.5rem',
                background: isDark ? 'rgba(71, 85, 105, 0.4)' : 'rgba(226, 232, 240, 0.8)',
                borderRadius: '0.25rem',
                fontSize: '0.9em',
                fontFamily: 'var(--ifm-font-family-monospace)',
                color: isDark ? '#06b6d4' : '#0891b2',
                fontWeight: 500
              }}>
                environment.yml
              </code>
              {' '}file by exporting your conda environment.
            </li>
            <li style={{lineHeight: 1.6}}>
              Fill out the CIROH-2i2c JupyterHub Software Install form.
            </li>
          </ol>
          
          <a 
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=jnIAKtDwtECk6M5DPz-8p4IIpHdEnmhNgjOa9FjrwGtUNUoyV1UxNFIzV1AyTDhTNzdOT1Q5NVlLTC4u"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              background: isDark ? '#06b6d4' : '#0891b2',
              color: 'white',
              fontSize: '1rem',
              fontWeight: 500,
              border: 'none',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              transition: 'all 0.3s',
              textDecoration: 'none'
            }}
          >
            JupyterHub Software Install Form
            <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default CIROHJupyterHub;