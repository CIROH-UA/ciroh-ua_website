import React, { useState } from 'react';
import { useCollapse } from "react-collapsed";

import FeaturesSection from "./features-section.js"
import CapabilitiesSection from "./capabilities-section.js"
import AccessSection from "./access-section.js"

const PlatformModal = () => {
    const [ currentTab, setCurrentTab ] = useState(1);
    // Tab 0 is reserved for status dashboard

    return (
        <div>
            <ul class="tabs">
                <li class={currentTab == 1 ? "tabs__item tabs__item--active" : "tabs__item"} 
                    onClick={() => {setCurrentTab(1);}}>Key Features</li>
                <li class={currentTab == 2 ? "tabs__item tabs__item--active" : "tabs__item"}
                    onClick={() => {setCurrentTab(2);}}>Capabilities</li>
                <li class={currentTab == 3 ? "tabs__item tabs__item--active" : "tabs__item"}
                    onClick={() => {setCurrentTab(3);}}>Access Methods</li>
            </ul>
            <FeaturesSection display={ currentTab == 1 } />
            <CapabilitiesSection display={ currentTab == 2 } />
            <AccessSection display={ currentTab == 3 } />
        </div>
    )
}

export default PlatformModal;