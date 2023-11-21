import "./NavTab.css"
function NavTab() {
    return (
        <div className="navtab">
            <nav>
                <ul className="navtab__menu">
                    <li className="navrab__line hover-link"><a href="AboutProject" className="navbar__ref">О проекте</a></li>
                    <li className="navrab__line hover-link"><a href="Techs" className="navbar__ref">Технологии</a></li>
                    <li className="navrab__line hover-link"><a href="AboutMe" className="navbar__ref">Студент</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavTab;