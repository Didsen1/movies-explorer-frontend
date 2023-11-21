import "./NotFound.css"

function NotFound() {
    return (
        <main className="not-found">
            <div>
                <p className="not-found__number">404</p>
                <h1 className="not-found__title">Страница не найдена</h1>
                <button className="not-found__button hover-button">Назад</button>
            </div>
        </main>
    );
}

export default NotFound;