import Sign from "../Sign/Sign"
import useFormValidator from "../../hooks/useFormValidator";
import { USER_NAME_REG_EXP } from '../../utils/constants.js'

function Register({ onSubmit }) {
    const { values, errors, isFormValid, handleChange, } = useFormValidator()

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ email: values.email, password: values.password, name: values.name });
    };

    return (
        <main className="register">
            <Sign
                title="Добро пожаловать!"
                button="Зарегистрироваться"
                text="Уже зарегистрированы?"
                link="/signin"
                linkText="Войти"
                onSubmit={handleSubmit}
                isFormValid={isFormValid}
                children={
                    <>
                        <label className="sign__label">
                            <span className="sign__label-span">Имя</span>
                            <input className="sign__input" required type="text" name="name" value={values.name} onChange={handleChange} minLength="2" maxLength="30" pattern={USER_NAME_REG_EXP}></input>
                            <span className="sign__error">{errors.name}</span>
                        </label>
                        <label className="sign__label">
                            <span className="sign__label-span">E-mail</span>
                            <input className="sign__input" required type="email" name="email" value={values.email} onChange={handleChange}></input>
                            <span className="sign__error">{errors.email}</span>
                        </label>
                        <label className="sign__label">
                            <span className="sign__label-span">Пароль</span>
                            <input className="sign__input" required type="password" name="password" value={values.password} onChange={handleChange} minLength="6" maxLength="30"></input>
                            <span className="sign__error">{errors.password}</span>
                        </label>
                    </>
                }
            />
        </main>
    );
}

export default Register;