import "./Footer.css"

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__linkcontainer">
                <p className="footer__date">© 2023 By Didsen1</p>
                <ul className="footer__wrapper">
                    <li className="footer__link-line">
                        <a className="footer__link hover-link" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
                    </li>
                    <li className="footer__link-line">
                        <a className="footer__link hover-link" href="https://github.com/Didsen1" target="_blank" rel="noreferrer">Github</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
