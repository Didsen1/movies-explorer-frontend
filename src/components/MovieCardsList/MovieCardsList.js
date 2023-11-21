import "./MovieCardsList.css"

import MovieCards from "../MoviesCard/MovieCards";

function MovieCardsList({ cards }) {
    return (
        <>
            {cards.length === 0 ? (
                <p className="movie-cards-list__not-found">Ничего не найдено</p>
            ) : (
                <>
                    <div className="movie-cards-list__cards-template">
                        <MovieCards
                            cards={cards} />
                    </div>
                    <div className="movie-cards-list__more-button-wrapper">
                        <button className="movie-cards-list__more-button hover-button">
                            Еще
                        </button>
                    </div>
                </>
            )}
        </>
    );
}

export default MovieCardsList;