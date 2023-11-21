import "./SavedMovie.css";
import Header from "../Header/Header";
import SearchBox from "../SearchBox/SearchBox";
import MovieCardsList from "../MovieCardsList/MovieCardsList"
import Footer from "../Footer/Footer";

function SavedMovie({ isLoading, onHamburgerClick, cards }) {

    return (
        <>
            <Header isLoading={isLoading} onHamburgerClick={onHamburgerClick} />
            <main className="saved-movie">
                <SearchBox />
                <MovieCardsList cards={cards} />
            </main>
            <Footer />
        </>
    );
}

export default SavedMovie;