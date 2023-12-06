import "./SavedMovie.css";
import Header from "../Header/Header";
import SearchBox from "../SearchBox/SearchBox";
import MovieCardsList from "../MovieCardsList/MovieCardsList"
import Footer from "../Footer/Footer";
import { useState, useCallback, useEffect } from "react";
import { searchMovies, handleMovieFiltering } from "../../utils/Utils"

function SavedMovie({ isLoggedIn, onHamburgerClick, savedCards, onCardDelete, isLoading }) {

    const [cardsForRender, setCardsForRender] = useState([]);

    const [filteredCards, setFilteredCards] = useState([]);
    const [isFilterOn, setFilter] = useState(false);
    const [isCardsNotFound, setCardsNotFound] = useState(false);
    const [isSearching, setIsSearching] = useState(false);

    const handleSearch = useCallback(
        (searchQuery) => {
            setCardsNotFound(false);
            setIsSearching(true);
            if (savedCards.length) {
                const found = searchMovies(savedCards, searchQuery, true);
                setFilteredCards(found);
                if (!found.length) {
                    setCardsNotFound(true);
                    setIsSearching(false);
                    setCardsForRender(found);
                } else {
                    const filtered = handleMovieFiltering(found, isFilterOn, true);
                    setIsSearching(false);
                    setCardsForRender(filtered);
                    if (!filtered.length) {
                        setIsSearching(false);
                        setCardsNotFound(true);
                    }
                }
            } else {
                setIsSearching(false);
                setCardsNotFound(true);
            }
        },
        [savedCards, isFilterOn]
    );

    const handleOnFilterClick = useCallback(
        (isChecked) => {
            setFilter(isChecked);
            setCardsNotFound(false);
            const filtered = handleMovieFiltering(filteredCards, isChecked, true);
            setCardsForRender(filtered);
            if (!filtered.length) {
                setCardsNotFound(true);
            }
        },
        [filteredCards]
    );

    useEffect(() => {
        setCardsNotFound(false);
        if (
            localStorage.getItem("savedMoviesSearchQuery") &&
            localStorage.getItem("isSavedMoviesFilterOn")
        ) {
            const filter = JSON.parse(localStorage.getItem("isSavedMoviesFilterOn"));
            setFilter(filter);
            const searchQuery = localStorage.getItem("savedMoviesSearchQuery");
            const found = searchMovies(savedCards, searchQuery, true);
            setFilteredCards(found);
            if (!found.length) {
                setCardsNotFound(true);
                setCardsForRender(found);
            } else {
                const filtered = handleMovieFiltering(found, filter, true);
                setCardsForRender(filtered);
                if (!filtered.length) {
                    setCardsNotFound(true);
                }
            }
        } else if (
            !localStorage.getItem("savedMoviesSearchQuery") &&
            localStorage.getItem("isSavedMoviesFilterOn")
        ) {
            setFilteredCards(savedCards);
            const filter = JSON.parse(localStorage.getItem("isSavedMoviesFilterOn"));
            setFilter(filter);
            const filtered = handleMovieFiltering(savedCards, filter, true);
            setCardsForRender(filtered);
            if (!filtered.length) {
                setCardsNotFound(true);
            }
        } else {
            setCardsForRender(savedCards);
            setFilteredCards(savedCards);
        }
    }, [savedCards]);

    useEffect(() => {
        localStorage.removeItem("savedMoviesSearchQuery")
        localStorage.removeItem("isSavedMoviesFilterOn")
        setFilter(false)
    }, [])


    return (
        <>
            <Header isLoggedIn={isLoggedIn} onHamburgerClick={onHamburgerClick} />
            <main className="saved-movie">
                <SearchBox
                    onSearch={handleSearch}
                    onFilterChange={handleOnFilterClick}
                    isFilterOn={isFilterOn}
                    isSearching={isSearching} />
                <MovieCardsList
                    cards={cardsForRender}
                    isLoading={isLoading}
                    savedCards={savedCards}
                    isCardsNotFound={isCardsNotFound}
                    onCardDelete={onCardDelete} />
            </main>
            <Footer />
        </>
    );
}

export default SavedMovie;