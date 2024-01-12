import "./SearchBox.css"

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function SearchBox({ onSearch, errors, onFilterChange, isFilterOn, isSearching }) {

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
            <form className="search-box__form" onSubmit={handleSubmit} noValidate>
                <div className="search-box__label">
                    <input type="search" className="search-box__input-text" placeholder="Фильм" required onChange={(e) => setSearchQuery(e.target.value)} disabled={isSearching ? true : false}
                        value={searchQuery || ""} minLength={1} autoComplete="off" autoCapitalize="off"
                        name="search"></input>
                    <button type="submit" className="search-box__input-submit hover-button" ></button>
                </div>
                <div className="search-box__checkbox hover-button">
                    <input className="search-box__input" type="checkbox" onChange={(evt) => onFilterChange(evt.target.checked)} checked={isFilterOn} disabled={isSearching ? true : false} />
                    <span className="search-box__slider"></span>
                    Короткометражки
                </div>
            </form>
            <p className="search-form__error">{queryError}</p>
        </div>
    );
}

export default SearchBox;