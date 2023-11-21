import React from 'react';
import { useLocation } from 'react-router-dom';

import "./Sign.css"
import logo from "../../images/logo.svg"

function Register(props) {
    let location = useLocation();

    return (
        <main className="sign">
            <a href="/" rel="noreferrer" className='hover-link'><img className="sign__img-logo" src={logo} alt="Логотип" /></a>
            <h1 className="sign__title">{props.title}</h1>
            <form className="sign__form">
                {props.children}
            </form>
            <div className={`sign__button-wrapper ${location.pathname === "/sigin" ? "sign__button-wrapper_sigin" : " "}`}>
                <button className="sign__button hover-button">{props.button}</button>
                <p className="sign__text">{props.text} <a className="sign__text-link hover-link" href={props.link}>{props.linkText}</a></p>
            </div>
        </main>
    );
}

export default Register;