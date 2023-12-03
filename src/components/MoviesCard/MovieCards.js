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
                        <button className={`movie-card__function-button hover-button`} onClick={isSaved ? handleDeleteClick : handleSaveClick} type="button">
                            <svg className={`movie-card__button-img ${ isSaved ? "movie-card__button-img_true" : ""}`} viewBox="0 0 30 30">
                                <path
                                    stroke="#424242"
                                    d="M14.6524 11.8979L15.0142 12.2477L15.3617 11.8837C16.0822 11.1289 16.9782 10.5 18.1818 10.5C20.1019 10.5 21.5 12.0286 21.5 14C21.5 14.9368 21.0747 15.7359 20.3847 16.405L15 21.3228L9.60992 16.4L9.59988 16.3909L9.58936 16.3823C8.88561 15.8064 8.5 14.9677 8.5 14C8.5 12.0286 9.89813 10.5 11.8182 10.5C13.0133 10.5 13.9085 11.1785 14.6524 11.8979Z"
                                /></svg></button>
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
