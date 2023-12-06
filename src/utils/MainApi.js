class MainApi {
    constructor(option) {
        this._baseURL = option.baseURL;
        this._headers = option.headers;
    }

    async _fetch(url, options = {}) {
        const res = await fetch(`${this._baseURL}${url}`, {
            ...options,
            credentials: 'include',
            headers: this._headers,
        });
        return res.ok ? res.json() : res.json().then((err) => Promise.reject(err.message));
    }

    registerUser({ name, email, password }) {
        return this._fetch('/signup', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
        });
    }

    loginUser({ email, password }) {
        return this._fetch('/signin', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
        });
    }

    getUserInfo() {
        return fetch(`${this._baseURL}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
        }).then((res) => {
            return res.ok ? res.json() : res.json().then((err) => Promise.reject(err.message));
        }
        )
    };

    updateUserInfo({ email, name }) {
        return fetch(`${this._baseURL}/users/me`, {
            method: 'PATCH',
            body: JSON.stringify({ email, name }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
        }).then((res) => {
            return res.ok ? res.json() : res.json().then((err) => Promise.reject(err.message));
        }
        )
    };

    getSavedMovies() {
        return fetch(`${this._baseURL}/movies`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
        }).then((res) => {
            return res.ok ? res.json() : res.json().then((err) => Promise.reject(err.message));
        }
        )
    }

    createMovie({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        thumbnail,
        movieId,
        nameRU,
        nameEN,
    }) {
        return fetch(`${this._baseURL}/movies`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
            method: 'POST',
            body: JSON.stringify({
                country,
                director,
                duration,
                year,
                description,
                image,
                trailerLink,
                thumbnail,
                movieId,
                nameRU,
                nameEN,
            }),
        }).then((res) => {
            return res.ok ? res.json() : res.json().then((err) => Promise.reject(err.message));
        }
        )
    }

    deleteCard(id) {
        return fetch(`${this._baseURL}/movies/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
        }).then((res) => {
            return res.ok ? res.json() : res.json().then((err) => Promise.reject(err.message));
        }
        )

    }



    getToken() {
        return this._headers.authorization = `Bearer ${localStorage.getItem('jwt')}`;
    }
}

export const mainApi = new MainApi({
    baseURL: "https://api.didsen1.movies.nomoredomainsmonster.ru",
    headers: {
        'Content-type': 'application/json',
    }
});
