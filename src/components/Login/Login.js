import Sign from "../Sign/Sign"

function Register() {
    return (
        <main className="login">
            <Sign
                title="Рады видеть!"
                button="Войти"
                text="Ещё не зарегистрированы?"
                link="/signup"
                linkText="Регистрация"
                children={
                    <>
                        <label className="sign__label">
                            <span className="sign__label-span">E-mail</span>
                            <input className="sign__input" required type="email"></input>
                            <span className="sign__error"></span>
                        </label>
                        <label className="sign__label">
                            <span className="sign__label-span">Пароль</span>
                            <input className="sign__input" required type="password" minLength="6" maxLength="30"></input>
                            <span className="sign__error"></span>
                        </label>
                    </>
                }
            />
        </main>
    );
}

export default Register;