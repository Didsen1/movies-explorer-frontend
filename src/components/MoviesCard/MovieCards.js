import "./MovieCards.css";
import { useLocation } from "react-router-dom";

function MovieCards({ card, isSaved, onCardSave, onCardDelete }) {
    const location = useLocation();

    function convertTime(duration) {
        const minutes = duration % 60;
        const hours = (duration - minutes) / 60;
        if (hours < 1) {
            return `${minutes}м`;
        } else {
            return `${hours}ч ${minutes}м`;
        }
    }

    function handleSaveClick() {
        onCardSave(card);
    }

    function handleDeleteClick() {
        onCardDelete(card);
    }

    return (
        <div className="movie-card">
            <a className="movies-card__link hover-link" target="_blank" rel="noreferrer" href={card.trailerLink}>
                <img src={
                    location.pathname === "/movies"
                        ? `${'https://api.nomoreparties.co'}${card.image.url}`
                        : `${card.image}`} alt={card.nameRU.trim()} className="movie-card__title-img" /></a>
            <div className="movie-card__descriptio-wrapper">
                <div className="movie-card__text-wrapper">
                    <h2 className="movie-card__title">{card.nameRU}</h2>
                    {location.pathname === "/movies" ? (
                        <button className={`movie-card__function-button hover-button ${isSaved ? "movie-card__function-button_true" : ""}`} onClick={isSaved ? handleDeleteClick : handleSaveClick} type="button"></button>
                    )
                        : (
                            <button className={`movie-card__function-button hover-button movie-card__function-button_delete`} onClick={handleDeleteClick} type="button"></button>
                        )}
                </div>
                <p className="movie-card__duration">{convertTime(card.duration)}</p>
            </div>
        </div >
    );
}

export default MovieCards;
