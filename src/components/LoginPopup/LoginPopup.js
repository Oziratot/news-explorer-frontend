import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import useFormWithValidation from '../../utils/useFormWithValidation';

function LoginPopup ({ isOpen, onClose, onLogin, switchTo, isInputDisabled, message }) {

    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

    function handleSubmit(e) {
        e.preventDefault();
        const { email, password } = values;
        onLogin(password, email);
    };

    React.useEffect(() => {
        resetForm();
    }, [onClose, resetForm]);

    return (
        <PopupWithForm 
            name="login"
            title="Вход"
            isOpen={isOpen}
            onClose={onClose}
            submitButtonText="Войти"
            undertext="Зарегистрироваться"
            switchTo={switchTo}
            isValid={isValid}
            onSubmit={handleSubmit}
            message={message}
            children={
                <fieldset className="popup__fieldset">
                    <label className="popup__label">Email
                        <input  type="email" 
                                className="popup__input" 
                                name="email"
                                disabled={isInputDisabled && "disabled"}
                                placeholder="Введите почту"
                                autoComplete="off"
                                value={values.email || ''}
                                onChange={handleChange}
                                required />
                        <span className="popup__input-error">{errors.email}</span>
                    </label>
                    <label className="popup__label">Пароль
                        <input  type="password" 
                                className="popup__input" 
                                name="password"
                                disabled={isInputDisabled && "disabled"}
                                minLength='8'
                                placeholder="Введите пароль"
                                value={values.password || ''}
                                onChange={handleChange}
                                required />
                        <span className="popup__input-error">{errors.password}</span>
                    </label>
                </fieldset>
            }
        />
    )
}

export default LoginPopup;