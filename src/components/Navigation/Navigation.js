import "./Navigation.css"
import { useLocation } from 'react-router-dom';

function Navigation({ isSideMenuOpen }) {
    let location = useLocation();
    return (
        <>
            <nav className={`navigation__movie-link-container ${isSideMenuOpen ? "navigation__movie-link-container_sidemenu" : " "}`}>
                <a href="/movies" className={`navigation__movie-link hover-link ${isSideMenuOpen ? "navigation__movie-link_sidemenu" : " "} 
                ${isSideMenuOpen && location.pathname === "/movies" ? "navigation__movie-link_active" : " "}
                `} rel="noreferrer">Фильмы</a>
                <a href="/saved-movies" className={`navigation__movie-link hover-link ${isSideMenuOpen ? "navigation__movie-link_sidemenu" : " "}
                ${isSideMenuOpen && location.pathname === "/saved-movies" ? "navigation__movie-link_active" : " "}
                `} rel="noreferrer">Сохранённые фильмы</a>
            </nav>
        </>
    );
}

export default Navigation;


