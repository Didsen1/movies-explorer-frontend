import "./SearchBox.css"

function SearchBox() {
    return (
        <section className="search-box">
            <form className="search-box-input">
                <input type="text" className="search-box-input__text" placeholder="Фильм"></input>
                <button type="submit" className="search-box-input__submit hover-button" ></button>
            </form>
            <div className="checkbox-wrapper">
                <label className="checkbox">
                    <input type="checkbox" className="checkbox__input" />
                    <span className="checkbox__slider"></span>
                    Короткометражки
                </label>
            </div>
        </section>
    );
}

export default SearchBox;