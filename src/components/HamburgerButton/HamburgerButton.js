import React from 'react';
import './HamburgerButton.css'
function HamburgerButton ({handleToggleMenu,isMenuOpen}) {
        return (
            <button onClick={handleToggleMenu} className={isMenuOpen ? "hamburger-button is-open" : "hamburger-button"}>
                <div className="stack"></div>
                <div className="stack"></div>
                <div className="stack"></div>
            </button>
        );
}

export default HamburgerButton;