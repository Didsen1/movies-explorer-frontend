import "./SearchBox.css"

function SearchBox() {
    return (
        <div className="search-box">
            <form className="search-box__form">
                <div className="search-box__label">
                    <input type="search" className="search-box__input-text" placeholder="Фильм" required></input>
                    <button type="submit" className="search-box__input-submit hover-button" ></button>
                </div>
                <div className="search-box__checkbox hover-button">
                    <input className="search-box__input" type="checkbox" />
                    <span className="search-box__slider"></span>
                    Короткометражки
                </div>
            </form>
        </div>
    );
}

export default SearchBox;