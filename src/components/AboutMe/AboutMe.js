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
                    <h3 className="aboutme-wrapper__title">Артём</h3>
                    <p className="aboutme-wrapper__subtitle">Фронтенд-разработчик, 22 года.</p>
                    <p className="aboutme-wrapper__description">Я родился и живу в Санкт-Петербурге.
                        Закончил местный Радиотехнический Колледж по специальности компьютерные сети.
                        Отдаю предпочтение компьютерным технологиям, особенно увлекаюсь видеоиграми.
                        Во время учебы мое внимание привлекло программирование, и пары по программированию были моими самыми любимыми.
                        С августа 2022 года я осознал, что мое хобби может стать моей основной работой, и фронтенд-разработка меня увлекает, особенно благодаря своей визуализации.</p>
                    <a className="aboutme-wrapper__gitlink hover-button" href="https://github.com/Didsen1" target="_blank" rel="noreferrer">Github</a>
                </div>
                <img className="aboutme-wrapper__image" src={photoAuthor} alt="Фото автора работы" />
            </article>
            <Portfolio />
        </section>
    );
}

export default AboutMe;
