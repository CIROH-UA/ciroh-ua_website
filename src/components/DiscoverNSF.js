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

    // Function to style badges
    const styleBadges = (shadowRoot) => {
      const badges = shadowRoot.querySelectorAll('.badge');
      badges.forEach((badge) => {
        badge.classList.remove('text-bg-secondary');
        badge.style.color = 'black';
        badge.style.backgroundColor = 'white';
      });
    };

    // Function to initialize MutationObserver
    const observeShadowDom = (shadowRoot) => {
      const observer = new MutationObserver(() => {
        styleBadges(shadowRoot);
      });

      observer.observe(shadowRoot, {
        childList: true,
        subtree: true,
      });

      return observer;
    };

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
          // Apply initial styles to badges
          styleBadges(shadowRoot);

          // Observe for changes in the shadow DOM
          const observer = observeShadowDom(shadowRoot);

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
      }, 100);
    };

    loadScript();

    // Cleanup function to remove elements and observer when component unmounts
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(resourceCatalogDiv);
    };
  }, []);

  return <div id="resource-catalog-react"></div>;
};

export default DiscoverNSF;
