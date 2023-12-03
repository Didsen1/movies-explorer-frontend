import "./MovieCardsList.css"

import MovieCards from "../MoviesCard/MovieCards";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";

function MovieCardsList({ cards, savedCards, cardsRenderParams, isCardsNotFound, onCardSave, onCardDelete, isLoading }) {

    const [cardsForRender, setCardsForRender] = useState([]);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/movies" && cards.length) {
            const result = cards.filter((card, index) => {
                return index < cardsRenderParams.total;
            });
            setCardsForRender(result);
        }
    }, [location.pathname, cards, cardsRenderParams]);

    useEffect(() => {
        if (location.pathname === "/saved-movies") {
            setCardsForRender(cards);
        }
    }, [location.pathname, cards]);

    function handleClickOnButtonMore() {
        const start = cardsForRender.length;
        const end = start + cardsRenderParams.more;
        const count = cards.length - start;
        if (count > 0) {
            const additionalCards = cards.slice(start, end);
            setCardsForRender([...cardsForRender, ...additionalCards]);
        }
    }

    const handleSavedStatus = (id) => { 
        return savedCards?.find((card) => card.movieId === id);
    }

    return (
        <section className="movie-cards-list">
            {!localStorage.getItem("searchQuery") && cards.length === 0 && null}
            {isLoading && cards.length === 0 && <Preloader />}
            {isCardsNotFound && (
                <p className="movie-cards-list__not-found">Ничего не найдено</p>
            )}
            {cards.length !== 0 && !isCardsNotFound && (
                <>
                    <div className="movie-cards-list__cards-template">
                        {cardsForRender.map((card) => (
                            <MovieCards
                                card={card}
                                key={card.id || card._id}
                                isSaved={handleSavedStatus(card.id)}
                                onCardSave={onCardSave}
                                onCardDelete={onCardDelete} />
                        ))}
                    </div>
                    {cardsForRender.length >= 5 && cardsForRender.length < cards.length && (
                        <div className="movie-cards-list__more-button-wrapper">
                            <button className="movie-cards-list__more-button hover-button" type="button" onClick={handleClickOnButtonMore}>
                                Еще
                            </button>
                        </div>

                    )}
                </>
            )}
        </section>
    );
}

export default MovieCardsList;