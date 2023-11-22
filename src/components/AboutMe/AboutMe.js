import Portfolio from "../Portfolio/Portfolio.js";
import "./AboutMe.css";
import photoAuthor from "../../images/photoAuthor.jpg"
import SectionTitle from "../SectionTitle/SectionTitle.js"

function AboutMe() {
    return (
        <section className="aboutme" id="AboutMe">
            <SectionTitle title={'Студент'} />
            <article className="aboutme-wrapper">
                <div className="aboutme-wrapper__container">
                    <h3 className="aboutme-wrapper__title">Виталий</h3>
                    <p className="aboutme-wrapper__subtitle">Фронтенд-разработчик, 30 лет</p>
                    <p className="aboutme-wrapper__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
                        С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <a className="aboutme-wrapper__gitlink hover-button" href="https://github.com/Didsen1" target="_blank" rel="noreferrer">Github</a>
                </div>
                <img className="aboutme-wrapper__image" src={photoAuthor} alt="Фото автора работы" />
            </article>
            <Portfolio />
        </section>
    );
}

export default AboutMe;
