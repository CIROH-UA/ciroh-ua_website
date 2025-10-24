import React from 'react';

const SectionWrapper = ({ id, children }) => {
  return (
    <section 
      id={id} 
      style={{ 
        scrollMarginTop: '100px',
        // marginBottom: '4rem'
      }}
    >
      {children}
      <div style={{
        // height: '1px',
        background: 'linear-gradient(to right, transparent, var(--ifm-color-emphasis-200), transparent)',
        // margin: '4rem 0'
      }} />
      
    </section>
  );
};

export default SectionWrapper;