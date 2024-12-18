import React, { useEffect } from 'react';
import { onRampsResourceCatalog, shadowTarget } from '@xras/ui';

const DiscoverNSF = () => {
  useEffect(() => {
    // Load Bootstrap Icons stylesheet
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css';
    document.head.appendChild(link);

    // Create the div for the NSF Resource Catalog
    const resourceCatalogDiv = document.createElement('div');
    resourceCatalogDiv.id = 'resource-catalog-react';
    document.body.appendChild(resourceCatalogDiv);

    // Dynamically import and initialize the script
    const loadScript = async () => {
      const baseUrl = 'https://esm.sh/@xras/ui@onramps_v1/dist';

      onRampsResourceCatalog({
        target: shadowTarget(
          document.getElementById('resource-catalog-react'),
          { accessStyles: true, baseUrl }
        ),
        onRamps: true,
        baseUrl,
      });

      setTimeout(() => {
        const shadowHost = document.getElementById('resource-catalog-react');
        const shadowRoot = shadowHost.shadowRoot;

        if (shadowRoot) {
          // Query inside shadowRoot for the badges
          const badges = shadowRoot.querySelectorAll('.badge');

          badges.forEach((badge) => {
            // Remove the 'text-bg-secondary' class if it exists
            badge.classList.remove('text-bg-secondary');

            // Apply inline styles for color and background
            badge.style.color = 'black'; // Set text color to black
            badge.style.backgroundColor = 'white'; // Clear any background color
          });

          // Also, check and modify the bootstrap-fonts element's data-bs-theme
          const element = shadowRoot.querySelector('.bootstrap-fonts');
          if (element) {
            element.setAttribute('data-bs-theme', ''); // Remove theme if needed
          } else {
            console.log('Element not found in shadow root');
          }
        } else {
          console.log('Shadow root not found');
        }
      }, 500);
    };

    loadScript();

    // Cleanup function to remove elements when component unmounts
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(resourceCatalogDiv);
    };
  }, []);

  return <div id="resource-catalog-react"></div>;
};

export default DiscoverNSF;
