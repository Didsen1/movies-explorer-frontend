import "./Footer.css"

function Footer() {
    return (
        <section className="footer">
            <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <article className="footer__linkcontainer">
                <p className="footer__date">© 2023 By Didsen1</p>
                <div className="footer__wrapper">
                    <a className="footer__link hover-link" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
                    <a className="footer__link hover-link" href="https://github.com/Didsen1" target="_blank" rel="noreferrer">Github</a>
                </div>
            </article>
        </section>
    );
}

export default Footer;
