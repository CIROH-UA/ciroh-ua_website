import React, { useState } from 'react';
import { useCollapse } from "react-collapsed";


const FoldableButton = ({ text, children }) => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    return (
        <div>
            <div class="button button--active button--primary" style={{'margin-right':'1.3rem','margin-bottom':'1.3rem'}} {...getToggleProps()}>
                {text}
            </div>
            <section {...getCollapseProps()}>
                {children}
            </section>
        </div>
    )
}

export default FoldableButton;