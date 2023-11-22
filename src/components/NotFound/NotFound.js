import { useNavigate } from "react-router-dom";

import "./NotFound.css"

function NotFound() {
    const navigate = useNavigate();

    function handleBtnBackClick() {
        if (window.history.state && window.history.state.idx > 0) {
            navigate(-1);
        } else {
            navigate("/", { replace: true });
        }
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