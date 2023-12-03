

export function searchMovies(movies, searchQuery, isSavedMovies) {
    const normalizeSearchQuery = searchQuery.toLowerCase().trim();
    const result = movies.filter((movie) => {
        const normalizeNameRu = movie.nameRU.toLowerCase().trim();
        const normalizeNameEn = movie.nameEN.toLowerCase().trim();
        return (
            normalizeNameRu.includes(normalizeSearchQuery) ||
            normalizeNameEn.includes(normalizeSearchQuery)
        );
    });
    if (!isSavedMovies) {
        localStorage.setItem("foundMovies", JSON.stringify(result));
        localStorage.setItem("moviesSearchQuery", normalizeSearchQuery);
    } else {
        localStorage.setItem("savedMoviesSearchQuery", normalizeSearchQuery);
    }
    return result;
}

export function handleMovieFiltering(movies, isFilterOn, isSavedMovies) {
    if (!isSavedMovies) {
        localStorage.setItem("isMoviesFilterOn", isFilterOn);
    } else {
        localStorage.setItem("isSavedMoviesFilterOn", isFilterOn);
    }
    if (isFilterOn) {
        const result = movies.filter((movie) => movie.duration <= 40);
        return result;
    } else {
        return movies;
    }
}
