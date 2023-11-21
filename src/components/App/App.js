import React from 'react';
import { useState, useRef, } from "react";
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

function App() {

  const [isLoading, setLoading] = useState(true);
  const [isSideMenuOpen, setSideMenuStatus] = useState(false);
  const [cards, setCards] = useState([]);
  const [savedCards, setSavedCards] = useState([]);

  function handleOpenSideMenu() {
    setSideMenuStatus(!isSideMenuOpen);
  }

  function handleCloseSideMenu() {
    setSideMenuStatus(false);
  }



  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <Main
            isLoading={isLoading}
            onHamburgerClick={handleOpenSideMenu}
          />
        } />
        <Route path='/sigup' element={<Register />} />
        <Route path='/sigin' element={<Login />} />
        <Route path='/movies' element={
          <Movie
            cards={cards}
            isLoading={isLoading}
            onHamburgerClick={handleOpenSideMenu}
          />
        } />
        <Route path='/saved-movies' element={
          <SavedMovie
            cards={savedCards}
            isLoading={isLoading}
            onHamburgerClick={handleOpenSideMenu} />
        } />
        <Route path='/profile' element={
          <Profile user={' '} />
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
