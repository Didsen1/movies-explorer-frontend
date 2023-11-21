
import { useEffect, useState } from "react";

import "./Profile.css"
import Header from "../Header/Header.js";

function Profile(user) {
    const [isEditing, setEditing] = useState(false);

    function handleEditClick() {
        setEditing(!isEditing);
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <>
            <Header />
            <main className="profile">
                <section className="profile__wrapper">
                    <h1 className="profile__title">Привет, {user.name}!</h1>
                    <form className="profile__form"
                        onSubmit={handleSubmit}>
                        <label className="profile__label">
                            Имя
                            <input className="profile__input" pattern={user.name} required disabled={isEditing ? false : true}></input>
                        </label>
                        <label className="profile__label">
                            E-mail
                            <input className="profile__input" pattern={user.email} required disabled={isEditing ? false : true}></input>
                        </label>
                    </form>
                    <>
                        {isEditing ? (
                            <div className={`profile__button-wrapper profile__button_submit`}>
                                <button type="submit" className="profile__button hover-button"
                                    onClick={handleEditClick}>Сохранить</button>
                            </div>
                        ) : (
                            <div className="profile__button-wrapper">
                                <button className="profile__button hover-button"
                                    onClick={handleEditClick}>Редактировать</button>
                                <button className="profile__button hover-button profile__button_red">Выйти из аккаунта</button>
                            </div>
                        )}
                    </>
                </section>

            </main>
        </>
    );
}

export default Profile;



