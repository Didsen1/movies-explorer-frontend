
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Profile.css"
import Header from "../Header/Header.js";

function Profile({ user, isLoading, onHamburgerClick }) {
    const [isEditing, setEditing] = useState(false);

    function handleEditClick() {
        setEditing(!isEditing);
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    const navigate = useNavigate();

    function handleBtnExitClick() {
        navigate("/", { replace: true });
    }


    return (
        <>
            <Header isLoading={isLoading} onHamburgerClick={onHamburgerClick}  />
            <main className="profile">
                <section className="profile__wrapper">
                    <h1 className="profile__title">Привет, {user.name}!</h1>
                    <form className="profile__form"
                        onSubmit={handleSubmit}>
                        <label className="profile__label">
                            Имя
                            <input type="text" className="profile__input" value={user.name} required disabled={isEditing ? false : true} minLength="2" maxLength="30"></input>
                        </label>
                        <label className="profile__label">
                            E-mail
                            <input type="email" className="profile__input" value={user.email} required disabled={isEditing ? false : true}></input>
                        </label>
                    </form>
                    <>
                        {isEditing ? (
                            <div className={`profile__button-wrapper `}>
                                <button type="submit" className="profile__button profile__button_submit hover-button"
                                    onClick={handleEditClick}>Сохранить</button>
                            </div>
                        ) : (
                            <div className="profile__button-wrapper">
                                <button className="profile__button hover-button" type="button"
                                    onClick={handleEditClick}>Редактировать</button>
                                <button type="button" className="profile__button hover-button profile__button_red" onClick={handleBtnExitClick}>Выйти из аккаунта</button>
                            </div>
                        )}
                    </>
                </section>

            </main>
        </>
    );
}

export default Profile;



