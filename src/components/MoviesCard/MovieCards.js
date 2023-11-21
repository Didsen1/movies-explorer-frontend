import "./MovieCards.css";

function MovieCards({ cards }) {

    return (
        <div className="movie-card">
            <img src={cards.image} alt={cards.name} className="movie-card__title-img" />
            <div className="movie-card__descriptio-wrapper">
                <div className="movie-card__text-wrapper">
                    <h2 className="movie-card__title">{cards.name}</h2>
                    <button className="movie-card__function-button hover-button movie-card__function-button_active" type="button"></button>
                </div>
                <p className="movie-card__duration">{cards.duration}</p>
            </div>
        </div>
    );
}

export default MovieCards;