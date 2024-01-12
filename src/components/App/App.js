import React from 'react';
import { useState, useEffect, useCallback } from "react";
import { useNavigate, Route, Routes } from 'react-router-dom';

import './App.css';

import Login from "../Login/Login";
import Main from "../Main/Main";
import Movie from "../Movie/Movie";
import SavedMovie from "../SavedMovie/SavedMovie"
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile"
import Register from "../Register/Register";
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import { CurrentUserContext } from "../contexts/CurrentUserContext"

import { mainApi } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi';

function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isMovieLoaded, setIsMovieLoaded] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isAppLoaded, setIsAppLoaded] = useState(false);
  const [serverError, setServerError] = useState('');

  const MOVIES_API_URL = "https://api.nomoreparties.co";

  const [isSideMenuOpen, setSideMenuStatus] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const [cards, setCards] = useState([]);
  const [savedCards, setSavedCards] = useState([]);

  const navigate = useNavigate();

  const handleLoginTrue = () => setLoggedIn(true);

  async function handleLogin({ email, password }) {
    setLoading(true);

    try {
      const userData = await mainApi.loginUser({ email, password });
      if (userData) {
        localStorage.setItem("jwt", userData.token);
        handleLoginTrue()
        navigate("/movies", { replace: true });

        const user = await mainApi.getUserInfo()
        setCurrentUser(user.user)
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleRegister({ name, email, password }) {
    setLoading(true);

    try {
      const userData = await mainApi.registerUser({ password, email, name });
      if (userData) {
        handleLogin({ email, password });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleUpdateUserData({ email, name }) {
    setLoading(true);
    try {
      const userData = await mainApi.updateUserInfo({ email, name });
      if (userData) {
        setCurrentUser(userData.user);
        setServerError('Данные обновлены.')
      }
    } catch (err) {
      console.error(err);
      setServerError(err)
    } finally {
      setLoading(false);
    }
  }

  const resetServerError = () => {
    setServerError('');
  };

  const checkToken = useCallback(() => {
    const jwt = localStorage.getItem('jwt')
    if (jwt) {
      mainApi.getUserInfo()
        .then((userData) => {
          setCurrentUser(userData.user)
          handleLoginTrue()
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          setIsAppLoaded(true);
        });
    } else {
      setIsAppLoaded(true);
    }

  }, [])

  useEffect(() => checkToken(), []);

  async function handleUserLogout() {
    setLoggedIn(false);
    setCurrentUser({});
    setSavedCards([]);
    localStorage.clear();
    navigate("/", { replace: true });
  }

  async function handleGetMovies() {
    setLoading(true);
    try {
      const moviesData = await moviesApi.getMovies();
      console.log(moviesData)
      if (moviesData) {
        return moviesData;
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }

  }

  const handlerGetUserMovies = useCallback(async () => {
    try {
      const userMoviesData = await mainApi.getSavedMovies();
      if (userMoviesData) {
        setSavedCards(userMoviesData.movies);
      }
    } catch (err) {
      console.error(err);
    }
  }, [])

  async function handleSaveMovie(movie) {
    try {
      const moviesData = await mainApi.createMovie({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `${MOVIES_API_URL}${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `${MOVIES_API_URL}${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      })
      if (moviesData) {
        setSavedCards([moviesData.data, ...savedCards]);
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function handleDeleteMovie(movie) {
    const savedMovie = savedCards.find(
      (card) => card.movieId === movie.id || card.movieId === movie.movieId
    );
    try {
      const data = await mainApi.deleteCard(savedMovie._id);
      if (data) {
        setSavedCards((state) =>
          state.filter((card) => card._id !== savedMovie._id)
        );
      }
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    if (isLoggedIn) {
      handlerGetUserMovies();
    }
  }, [isLoggedIn, handlerGetUserMovies]);

  function handleOpenSideMenu() {
    setSideMenuStatus(!isSideMenuOpen);
  }

  function handleCloseSideMenu() {
    setSideMenuStatus(false);
  }

  return (
    isAppLoaded && (
      <div className="App">

        <CurrentUserContext.Provider value={currentUser}>

          <Routes>

            <Route path='/movies' element={

              <ProtectedRoute loggedIn={isLoggedIn}>
                <Movie
                  savedCards={savedCards}
                  cards={cards}
                  onSearch={handleGetMovies}
                  onCardSave={handleSaveMovie}
                  onCardDelete={handleDeleteMovie}
                  isLoggedIn={isLoggedIn}
                  onHamburgerClick={handleOpenSideMenu}
                  isLoading={isLoading}
                />
              </ProtectedRoute>} />

            <Route path='/saved-movies' element={

              <ProtectedRoute loggedIn={isLoggedIn}>

                <SavedMovie
                  isLoading={isLoading}
                  savedCards={savedCards}
                  isLoggedIn={isLoggedIn}
                  onHamburgerClick={handleOpenSideMenu}
                  onCardDelete={handleDeleteMovie} />
              </ProtectedRoute>} />

            <Route path='/profile' element={
              <ProtectedRoute loggedIn={isLoggedIn}>
                <Profile
                  resetServerError={resetServerError}
                  serverError={serverError}
                  isLoggedIn={isLoggedIn}
                  onLogout={handleUserLogout}
                  onUpdateUser={handleUpdateUserData}
                  onHamburgerClick={handleOpenSideMenu} />

              </ProtectedRoute>}
            />

            <Route path="/" element={
              <Main
                isLoggedIn={isLoggedIn}
                onHamburgerClick={handleOpenSideMenu}
              />} />

            <Route path='/signup' element={
              <Register onSubmit={handleRegister} />} />

            <Route path='/signin' element={
              <Login onSubmit={handleLogin} isLoggedIn={isLoggedIn} />} />

            <Route path="/*" element={<NotFound />} />

          </Routes>

          <HamburgerMenu
            isSideMenuOpen={isSideMenuOpen}
            onClose={handleCloseSideMenu}
          />

        </CurrentUserContext.Provider >

      </div>

    )
  );
}


export default App;
