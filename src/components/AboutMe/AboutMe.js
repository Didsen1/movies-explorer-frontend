import Portfolio from "../Portfolio/Portfolio.js";
import "./AboutMe.css";
import photoAuthor from "../../images/photoAuthor.jpg"
import SectionTitle from "../SectionTitle/SectionTitle.js"

function AboutMe() {
    return (
        <section className="aboutme" id="AboutMe">
            <SectionTitle title={'Студент'}/>
            <article className="aboutme-wrapper">
                <div className="aboutme-wrapper__container">
                    <h3 className="aboutme-wrapper__title">Артём</h3>
                    <p className="aboutme-wrapper__subtitle">Фронтенд-разработчик, 22 года</p>
                    <p className="aboutme-wrapper__description">О себе: я - это я</p>
                    <a className="aboutme-wrapper__gitlink hover-button" href="https://github.com/Didsen1" target="_blank" rel="noreferrer">Github</a>
                </div>
                <img className="aboutme-wrapper__image" src={photoAuthor} alt="Фото автора работы" />
            </article>
            <Portfolio />
        </section>
    );
}

export default AboutMe;
