import Sign from "../Sign/Sign"

function Register() {
    return (
        <main className="register">
            <Sign
                title="Добро пожаловать!"
                button="Зарегистрироваться"
                text="Уже зарегистрированы?"
                link="/sigin"
                linkText="Войти"
                children={
                    <>
                        <label className="sign__label">
                            <span className="sign__label-span">Имя</span>
                            <input className="sign__input" required></input>
                            <span className="sign__error"></span>
                        </label>
                        <label className="sign__label">
                            <span className="sign__label-span">E-mail</span>
                            <input className="sign__input" required></input>
                            <span className="sign__error"></span>
                        </label>
                        <label className="sign__label">
                            <span className="sign__label-span">Пароль</span>
                            <input className="sign__input" required></input>
                            <span className="sign__error"></span>
                        </label>
                    </>
                }
            />
        </main>
    );
}

export default Register;