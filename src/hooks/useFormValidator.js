import { useState, useCallback } from 'react'
import isEmail from 'validator/es/lib/isEmail';

export default function useFormValidator() {

    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isFormValid, setFormValid] = useState(false);
    const NAME_VALIDATION = 'Имя может содержать только символы кириллического и латинского алфавита, а так же пробел или дефис.';
    const EMAIL_VALIDATION = 'Неправильный формат email';


    function handleChange(event) {
        const target = event.target;
        const { name, value } = target;

        const setCustomValidity = (message) => {
            target.setCustomValidity(message);
        };

        if (name === 'name' && target.validity.patternMismatch) {
            setCustomValidity(NAME_VALIDATION);
        } else if (name === 'email' && !isEmail(value)) {
            setCustomValidity(EMAIL_VALIDATION);
        } else {
            setCustomValidity('');
        }

        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: target.validationMessage });
        setFormValid(target.closest("form").checkValidity());
    }

    const resetForm = useCallback(
        (isFormValid = false, values = {}, errors = {}) => {
            setFormValid(isFormValid);
            setValues(values);
            setErrors(errors);
        },
        [setFormValid, setValues, setErrors]
    );

    return { values, errors, isFormValid, handleChange, resetForm };
}