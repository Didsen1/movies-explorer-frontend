import React from 'react';
import { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';

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

//временные файлы
import movieCards from '../../temp/data.json';
import savedMovieCards from '../../temp/savedData.json';
import userData from "../../temp/userData.json"

function App() {

  const [isLoading, setLoading] = useState(true);
  const [isSideMenuOpen, setSideMenuStatus] = useState(false);
  const [cards, setCards] = useState([]);
  const [savedCards, setSavedCards] = useState([]);
  const [isLiked, setLike] = useState(false);

  function handleCardLike() {
    setLike(!isLiked);
  }

  function handleOpenSideMenu() {
    setSideMenuStatus(!isSideMenuOpen);
  }

  function handleCloseSideMenu() {
    setSideMenuStatus(false);
  }

  useEffect(() => {
    setCards(movieCards);
    setSavedCards(savedMovieCards);
  }, []);


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <Main
            isLoading={isLoading}
            onHamburgerClick={handleOpenSideMenu}
          />
        } />
        <Route path='/signup' element={<Register />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/movies' element={
          <Movie
            cards={cards}
            isLoading={isLoading}
            onHamburgerClick={handleOpenSideMenu}
            isLiked={isLiked}
            onCardLike={handleCardLike}
          />
        } />
        <Route path='/saved-movies' element={
          <SavedMovie
            cards={savedCards}
            isLoading={isLoading}
            onHamburgerClick={handleOpenSideMenu}
            isLiked={isLiked}
            onCardLike={handleCardLike} />
        } />
        <Route path='/profile' element={
          <Profile user={userData}
            isLoading={isLoading}
            onHamburgerClick={handleOpenSideMenu} />
        } />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <HamburgerMenu
        isSideMenuOpen={isSideMenuOpen}
        onClose={handleCloseSideMenu}
      />
    </div>
  );
}


export default App;
