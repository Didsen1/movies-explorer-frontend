import "./Movie.css";
import { useState, useEffect, useCallback } from "react";
import { searchMovies, handleMovieFiltering } from "../../utils/Utils"
import { useResizeScreen } from "../../hooks/useResizeScreen";
import { SizeConfig } from "../../utils/SizeConfig"

import Header from "../Header/Header";
import SearchBox from "../SearchBox/SearchBox";
import MovieCardsList from "../MovieCardsList/MovieCardsList"
import Footer from "../Footer/Footer";

function Movie({ isLoggedIn, onSearch, onHamburgerClick, savedCards, onCardSave, onCardDelete, isLoading }) {

    const [initialCards, setInitialCards] = useState([]);
    const [isCardsNotFound, setCardsNotFound] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const [cardsForRender, setCardsForRender] = useState([]);
    const [foundCards, setFoundCards] = useState([]);
    const [isFilterOn, setFilter] = useState(false);
    const screenWidth = useResizeScreen();
    const [cardsRenderParams, setCardsRenderParams] = useState({});

    const handleSearch = useCallback(
        (cards, searchQuery) => {
            const found = searchMovies(cards, searchQuery, false);
            setFoundCards(found);
            if (!found.length) {
                setCardsNotFound(true);
                setIsSearching(false);
                setCardsForRender(found);
            } else {
                const filtered = handleMovieFiltering(found, isFilterOn, false);
                setIsSearching(false);
                setCardsForRender(filtered);
                if (!filtered.length) {
                    setIsSearching(false);
                    setCardsNotFound(true);
                }
            }
        },
        [isFilterOn]
    );

    const handleOnSearchSubmit = useCallback(
        async (searchQuery) => {
            setCardsNotFound(false);
            setIsSearching(true);
            if (!initialCards.length) {
                const moviesData = await onSearch();
                if (moviesData) {
                    setInitialCards(moviesData);
                    handleSearch(moviesData, searchQuery);
                }
            } else {
                handleSearch(initialCards, searchQuery);
            }
        },
        [handleSearch, initialCards, onSearch]
    );

    const handleOnFilterClick = useCallback(
        (isChecked) => {
            setFilter(isChecked);
            setCardsNotFound(false);
            const filtered = handleMovieFiltering(foundCards, isChecked, false);
            setCardsForRender(filtered);
            if (!filtered.length) {
                setCardsNotFound(true);
            }
        },
        [foundCards]
    );

    useEffect(() => {
        if (screenWidth >= SizeConfig.base.width) {
            setCardsRenderParams(SizeConfig.base.cards);
        } else if (
            screenWidth < SizeConfig.base.width &&
            screenWidth >= SizeConfig.desktop.width
        ) {
            setCardsRenderParams(SizeConfig.desktop.cards);
        } else if (
            screenWidth < SizeConfig.desktop.width &&
            screenWidth >= SizeConfig.tablet.width
        ) {
            setCardsRenderParams(SizeConfig.tablet.cards);
        } else {
            setCardsRenderParams(SizeConfig.mobile.cards);
        }
    }, [screenWidth]);

    useEffect(() => {
        if (
            localStorage.getItem("foundMovies") &&
            localStorage.getItem("isMoviesFilterOn")
        ) {
            const filter = JSON.parse(localStorage.getItem("isMoviesFilterOn"));
            setFilter(filter);
            const foundMovies = JSON.parse(localStorage.getItem("foundMovies"));
            setFoundCards(foundMovies);
            if (!foundMovies.length) {
                setCardsNotFound(true);
                setCardsForRender(foundMovies);
            } else {
                const filtered = handleMovieFiltering(foundMovies, filter, false);
                setCardsForRender(filtered);
                if (!filtered.length) {
                    setCardsNotFound(true);
                }
            }
        }
    }, []);

    return (
        <>
            <Header isLoggedIn={isLoggedIn} onHamburgerClick={onHamburgerClick} />
            <main className="movie">
                <SearchBox
                    onSearch={handleOnSearchSubmit}
                    onFilterChange={handleOnFilterClick}
                    isFilterOn={isFilterOn}
                    isSearching={isSearching} />
                <MovieCardsList
                    cards={cardsForRender}
                    savedCards={savedCards}
                    cardsRenderParams={cardsRenderParams}
                    isCardsNotFound={isCardsNotFound}
                    isLoading={isLoading}
                    onCardSave={onCardSave}
                    onCardDelete={onCardDelete} />
            </main>
            <Footer />
        </>
    );
}

export default Movie;