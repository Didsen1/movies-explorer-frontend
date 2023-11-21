
import { useEffect } from "react";

import "./HamburgerMenu.css";

import Navigation from '../Navigation/Navigation';
import AccountLink from "../AccountLink/AccountLink"
import { useLocation } from 'react-router-dom';

function HamburgerMenu({ isSideMenuOpen, onClose }) {
    let location = useLocation();

    useEffect(() => {
        function handleEscClose(evt) {
            if (evt.key === "Escape") {
                onClose();
            }
        }
        if (isSideMenuOpen) {
            document.addEventListener("keydown", handleEscClose);
            return () => document.removeEventListener("keydown", handleEscClose);
        }
    }, [isSideMenuOpen, onClose]);

    const closeByClickOnOverlay = (evt) => {
        if (evt.target === evt.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={`hamburger ${isSideMenuOpen ? "hamburger_active" : " "}`} onMouseDown={closeByClickOnOverlay}>
            <nav className={`hamburger-menu ${isSideMenuOpen ? "hamburger-menu_active" : " "}`}>
            <button className="hamburger-menu__close-button hover-button" onClick={onClose}></button>
            <a href="/" className={`hamburger-menu__main-link hover-link ${isSideMenuOpen && location.pathname === "/" ? "hamburger-menu__main-link_active" : " "} `}>Главная</a>
            <Navigation isSideMenuOpen={isSideMenuOpen} />
            <AccountLink isSideMenuOpen={isSideMenuOpen} />
        </nav>
        </div >
    );
}

export default HamburgerMenu;