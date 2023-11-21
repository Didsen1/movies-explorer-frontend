import React from 'react';
import { useLocation } from 'react-router-dom';

import "./Header.css"

import logo from "../../images/logo.svg"
import AccountLink from "../AccountLink/AccountLink"
import Navigation from '../Navigation/Navigation';

function Header({ isLoading, onHamburgerClick }) {
    let location = useLocation();

    return (
        <header className={`header ${location.pathname === "/" ? "header_promo" : " "}`} >
            {
                isLoading ? (
                    <>
                        <a href="/" rel="noreferrer"><img src={logo} className="header__img hover-link" alt='Логотип' /></a>
                        <Navigation />
                        <div className="header__end-content">
                            <AccountLink />
                            <button className="header__hamburger hover-button" onClick={onHamburgerClick}></button>
                        </div>
                    </>

                ) : (
                    <>
                        <a href="/" rel="noreferrer"><img src={logo} className="header__img hover-link" alt='Логотип' /></a>
                        <div className="header__end-content">
                            <div className="header-button-container">
                                <a href="/sigup" className="header-button__signup hover-link" rel="noreferrer">Регистрация</a>
                                <a href="/sigin" className="header-button__signin hover-link" rel="noreferrer">Войти</a>
                            </div>
                        </div>
                    </>
                )
            }
        </header >
    );
}

export default Header;