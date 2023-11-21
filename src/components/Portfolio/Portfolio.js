import "./Portfolio.css"

function Portfolio() {
    return (
        <div>
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__linklist">
                <li className="portfolio__linkcontainer">
                    <a className="portfolio__link hover-link" href="https://github.com/Didsen1/how-to-learn" target="_blank" rel="noreferrer">
                        <span className="portfolio__text">Статичный сайт</span>
                        <span className="portfolio__symbol">↗</span>
                    </a>
                </li>
                <li className="portfolio__linkcontainer">
                    <a className="portfolio__link hover-link" href="https://github.com/Didsen1/russian-travel" target="_blank" rel="noreferrer">
                        <span className="portfolio__text">Адаптивный сайт</span>
                        <span className="portfolio__symbol">↗</span>
                    </a>
                </li>
                <li className="portfolio__linkcontainer">
                    <a className="portfolio__link hover-link" href="https://github.com/Didsen1/react-mesto-api-full-gha" target="_blank" rel="noreferrer">
                        <span className="portfolio__text">Одностраничное приложение</span>
                        <span className="portfolio__symbol">↗</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Portfolio;
