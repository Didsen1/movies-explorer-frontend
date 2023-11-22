import "./NavTab.css"
function NavTab() {
    return (
        <nav className="navtab">
            <ul className="navtab__menu">
                <li className="navtab__line hover-link"><a href="#AboutProject" className="navtab__ref">О проекте</a></li>
                <li className="navtab__line hover-link"><a href="#Techs" className="navtab__ref">Технологии</a></li>
                <li className="navtab__line hover-link"><a href="#AboutMe" className="navtab__ref">Студент</a></li>
            </ul>
        </nav>
    );
}

export default NavTab;