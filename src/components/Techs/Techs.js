import "./Techs.css"
import SectionTitle from "../SectionTitle/SectionTitle"

function Techs() {
    return (
        <section className="techs" id="Techs">
            <SectionTitle title={'Технологии'} />
            <div className="techs__wrapper">
                <article className="techs-title-wrapper">
                    <h3 className="techs-title-wrapper__title">7 технологий</h3>
                    <p className="techs-title-wrapper__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                </article>
                <ul className="techs-list">
                    <li className="techs-list__tech">
                        HTML
                    </li>
                    <li className="techs-list__tech">
                        CSS
                    </li>
                    <li className="techs-list__tech">
                        JS
                    </li>
                    <li className="techs-list__tech">
                        React
                    </li>
                    <li className="techs-list__tech">
                        Git
                    </li>
                    <li className="techs-list__tech">
                        Express.js
                    </li>
                    <li className="techs-list__tech">
                        mongoDB
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Techs;
