import Sign from "../Sign/Sign"
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useFormValidator from "../../hooks/useFormValidator";

function Register({ onSubmit, isLoggedIn }) {
    const { values, errors, isFormValid, handleChange } = useFormValidator({})

    const navigate = useNavigate();

    useEffect(() => {
        isLoggedIn && navigate('/');
    }, [isLoggedIn, navigate]);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ email: values.email, password: values.password });
    };

    return (
        <main className="login">
            <Sign
                title="Рады видеть!"
                button="Войти"
                text="Ещё не зарегистрированы?"
                link="/signup"
                linkText="Регистрация"
                isFormValid={isFormValid}
                onSubmit={handleSubmit}
                children={
                    <>
                        <label className="sign__label">
                            <span className="sign__label-span">E-mail</span>
                            <input className="sign__input" required type="email" name="email" value={values.email} onChange={handleChange} autoComplete="off"></input>
                            <span className="sign__error">{errors.email}</span>
                        </label>
                        <label className="sign__label">
                            <span className="sign__label-span">Пароль</span>
                            <input className="sign__input" required type="password" name="password" minLength="6" maxLength="30" value={values.password} onChange={handleChange} autoComplete="off"></input>
                            <span className="sign__error">{errors.password}</span>
                        </label>
                    </>
                }
            />
        </main>
    );
}

export default Register;