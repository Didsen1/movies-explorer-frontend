import "./SearchBox.css"

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function SearchBox({ onSearch, onFilterChange, isFilterOn, isSearching }) {

    const [searchQuery, setSearchQuery] = useState("");
    const [queryError, setQueryError] = useState("");
    const location = useLocation();

    useEffect(() => {
        if (
            location.pathname === "/movies" &&
            localStorage.getItem("moviesSearchQuery")
        ) {
            const savedSearchQuery = localStorage.getItem("moviesSearchQuery");
            setSearchQuery(savedSearchQuery);
        } else if (
            location.pathname === "/saved-movies" &&
            localStorage.getItem("savedMoviesSearchQuery")
        ) {
            const savedSearchQuery = localStorage.getItem("savedMoviesSearchQuery");
            setSearchQuery(savedSearchQuery);
        }
    }, [location.pathname]);

    useEffect(() => {
        setQueryError("");
    }, [searchQuery]);

    function handleSubmit(e) {
        e.preventDefault();
        if (location.pathname === "/movies") {
            searchQuery
                ? onSearch(searchQuery)
                : setQueryError("Нужно ввести ключевое слово");
        } else {
            onSearch(searchQuery);
        }
    }

    return (
        <div className="search-box">
            <form className="search-box__form" onSubmit={handleSubmit}>
                <div className="search-box__label">
                    <input type="search" className="search-box__input-text" placeholder="Фильм" required onChange={(e) => setSearchQuery(e.target.value)} disabled={isSearching ? true : false} value={searchQuery || ""}></input>
                    <button type="submit" className="search-box__input-submit hover-button" ></button>
                </div>
                <div className="search-box__checkbox hover-button">
                    <input className="search-box__input" type="checkbox" onChange={(evt) => onFilterChange(evt.target.checked)} checked={isFilterOn} disabled={isSearching ? true : false}/>
                    <span className="search-box__slider"></span>
                    Короткометражки
                </div>
            </form>
        </div>
    );
}

export default SearchBox;