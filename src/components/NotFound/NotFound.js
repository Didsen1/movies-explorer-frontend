import { useNavigate } from "react-router-dom";

import "./NotFound.css"

function NotFound() {
    const navigate = useNavigate();

    function handleBtnBackClick() {
        navigate(-1);
    }

    return (
        <main className="not-found">
            <div>
                <p className="not-found__number">404</p>
                <h1 className="not-found__title">Страница не найдена</h1>
                <button className="not-found__button hover-button" type="button" onClick={handleBtnBackClick}>Назад</button>
            </div>
        </main>
    );
}

export default NotFound;