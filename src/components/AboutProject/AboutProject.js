import "./AboutProject.css"
import SectionTitle from "../SectionTitle/SectionTitle"

function AboutProject() {
    return (
        <section className="aboutprojet"  id="AboutProject">
            <SectionTitle title={'О проекте'} />
            <div className="aboutprojet-description">
                <article className="aboutprojet-description__article">
                    <h3 className="aboutprojet-description__title">Дипломный проект включал 5 этапов</h3>
                    <p className="aboutprojet-description__subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </article>
                <article className="aboutprojet-description__article">
                    <h3 className="aboutprojet-description__title">На выполнение диплома ушло 5 недель</h3>
                    <p className="aboutprojet-description__subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </article>
            </div>
            <div className="aboutprojet-timeline">
                <div className="aboutprojet-timeline__backend aboutprojet-timeline__article-position">
                    <p className="aboutprojet-timeline__stage aboutprojet-timeline__stage_backend">1 неделя</p>
                    <p className="aboutprojet-timeline__subtitle">Back-end</p>
                </div>
                <div className="aboutprojet-timeline__frontend aboutprojet-timeline__article-position">
                    <p className="aboutprojet-timeline__stage aboutprojet-timeline__stage_frontend">4 недели</p>
                    <p className="aboutprojet-timeline__subtitle">Front-end</p>
                </div>
            </div>
        </section>
    );
}

export default AboutProject;
