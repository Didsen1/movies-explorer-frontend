import React, { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import useFormValidator from "../../hooks/useFormValidator.js";

import "./Profile.css"
import Header from "../Header/Header.js";

function Profile({ isLoggedIn, onHamburgerClick, onUpdateUser, onLogout, }) {
    const [isCurrentUser, setUserDifference] = useState(true);
    const [isEditing, setEditing] = useState(false);
    const currentUser = useContext(CurrentUserContext);
    const { values, errors, isFormValid, handleChange, resetForm } = useFormValidator()

    useEffect(() => {
        currentUser.name !== values.name || currentUser.email !== values.email
            ? setUserDifference(false)
            : setUserDifference(true);
    }, [currentUser, values]);

    useEffect(() => {
        resetForm(false, currentUser);
    }, [resetForm, currentUser]);

    const handleEditClick = () => {
        setEditing(!isEditing);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({ email: values.email, name: values.name });
    }

    return (
        <>
            <Header isLoggedIn={isLoggedIn} onHamburgerClick={onHamburgerClick} isFormValid={isFormValid} />
            <main className="profile">
                <section className="profile__wrapper">
                    <h1 className="profile__title">Привет, {currentUser.name}!</h1>
                    <form className="profile__form"
                        onSubmit={handleSubmit}>
                        <label className="profile__label">
                            <div className='profile__input-wrapper'>
                                Имя
                                <input type="text" className="profile__input" value={values.name || ""} name='name' required disabled={!isEditing} minLength="2" maxLength="30" onChange={handleChange} autoComplete="off"
                                    placeholder="Введите имя"></input>
                            </div>
                            <span className='profile__input-error'>{errors.name}</span>
                        </label>
                        <label className="profile__label">
                            <div className='profile__input-wrapper'>
                                E-mail
                                <input type="email" className="profile__input" value={values.email || ""} name='email' required disabled={!isEditing} onChange={handleChange} autoComplete="off" placeholder="Введите email"></input>
                            </div>
                            <span className='profile__input-error'>{errors.email}</span>
                        </label>

                        <div className={`profile__button-wrapper ${!isEditing ? "profile__button-wrapper_active" : ""}`}>
                            <button className="profile__button hover-button" type="button"
                                onClick={handleEditClick}>Редактировать</button>
                            <button type="button" className="profile__button hover-button profile__button_red" onClick={onLogout}>Выйти из аккаунта</button>
                        </div>
                        <div className={`profile__button-wrapper ${isEditing ? "profile__button-wrapper_active" : ""}`}>
                            <button type="submit" className={`profile__button profile__button_submit hover-button ${!isFormValid ? 'profile__button_submit_disabled' : ' '}`} disabled={!isFormValid}
                                onClick={handleEditClick}>Сохранить</button>
                        </div>
                    </form>
                </section>

            </main>
        </>
    );
}

export default Profile;



