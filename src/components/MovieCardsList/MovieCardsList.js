import "./MovieCardsList.css"

import MovieCards from "../MoviesCard/MovieCards";

function MovieCardsList({ cards, isLiked, onCardLike }) {
    return (
        <section className="movie-cards-list">
            {cards.length === 0 ? (
                <p className="movie-cards-list__not-found">Ничего не найдено</p>
            ) : (
                <>
                    <div className="movie-cards-list__cards-template">
                        {cards.map((card) => (
                            <MovieCards
                                card={card} isLiked={isLiked} onCardLike={onCardLike} />
                        ))}
                    </div>
                    <div className="movie-cards-list__more-button-wrapper">
                        <button className="movie-cards-list__more-button hover-button" type="button">
                            Еще
                        </button>
                    </div>
                </>
            )}
        </section>
    );
}

export default MovieCardsList;