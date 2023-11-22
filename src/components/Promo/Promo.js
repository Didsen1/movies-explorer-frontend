import NavTab from "../NavTab/NavTab";
import "./Promo.css";

function Promo() {
    return (
        <section className="promo">
            <div className="promo-wrapper">
                <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
            </div>
            <NavTab />
        </section>
    );
}

export default Promo;