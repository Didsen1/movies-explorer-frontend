import "./Main.css"

import Promo from "../Promo/Promo.js";
import AboutProject from "../AboutProject/AboutProject.js"
import Techs from "../Techs/Techs.js"
import Aboutme from "../AboutMe/AboutMe.js"
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer";

function Main({ isLoading, onHamburgerClick }) {

    return (
        <>
            <Header isLoading={isLoading} onHamburgerClick={onHamburgerClick} />
            <main className="main">
                <Promo />
                <AboutProject />
                <Techs />
                <Aboutme />
            </main>
            <Footer />
        </>
    );
}

export default Main;
