
import "./AccountLink.css"

import profile from "../../images/profile-icon.svg"
import { useLocation } from 'react-router-dom';

function AccountLink({ isSideMenuOpen }) {
    let location = useLocation();
    return (
        <a href="/profile" className={`account-link-wrapper hover-link ${isSideMenuOpen ? "account-link-wrapper_sidemenu" : " "}`}>
            <span className="account-link-wrapper__text">Аккаунт</span>
            <img className={`account-link-wrapper__img ${isSideMenuOpen || location.pathname === "/movies" || location.pathname === "/saved-movies" ? "account-link-wrapper__img_black" : " "}`} src={profile} alt='Иконка профиля' />
        </a >
    );
}

export default AccountLink;