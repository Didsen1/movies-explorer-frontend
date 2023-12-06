class MoviesApi {
    constructor(option) {
        this._baseURL = option.baseURL;
    }

    getMovies() {
        return fetch(`${this._baseURL}`, )
        .then((res) => {
            return res.ok ? res.json() : res.json().then((err) => Promise.reject(err.message));
        }
        )
    }
}


export const moviesApi = new MoviesApi({
    baseURL: "https://api.nomoreparties.co/beatfilm-movies",
});
