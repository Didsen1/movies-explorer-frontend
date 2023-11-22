import "./MovieCards.css";

function MovieCards({ card, isLiked, onCardLike }) {

    function convertTime(duration) {
        const min = duration % 60;
        const hour = (duration - min) / 60;
        return `${hour}ч ${min} м`;
    }

    return (
        <div className="movie-card">
            <img src={card.image} alt={card.nameRU} className="movie-card__title-img" />
            <div className="movie-card__descriptio-wrapper">
                <div className="movie-card__text-wrapper">
                    <h2 className="movie-card__title">{card.nameRU}</h2>
                    <button className={`movie-card__function-button hover-button ${isLiked ? "movie-card__function-button_active" : " "}  `} onClick={onCardLike} type="button"></button>
                </div>
                <p className="movie-card__duration">{convertTime(card.duration)}</p>
            </div>
        </div>
    );
}

export default MovieCards;
