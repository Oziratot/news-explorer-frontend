import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import useFormWithValidation from '../../utils/useFormWithValidation';

function RegisterPopup ({ isOpen, onClose, onRegister, switchTo, isInputDisabled, message }) {

    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

    function handleSubmit(e) { 
        e.preventDefault();
        const { email, password, name } = values;
        onRegister(password, email, name);
    }

    React.useEffect(() => {
        resetForm();
    }, [onClose, resetForm]);

    return (
        <PopupWithForm
            name="register"
            title="Регистрация"
            isOpen={isOpen}
            onClose={onClose}
            submitButtonText="Зарегистрироваться"
            undertext="Войти"
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
                                value={values.email || ''}
                                onChange={handleChange}
                                autoComplete="off"
                                required />
                        <span className="popup__input-error">{errors.email}</span>
                    </label>
                    <label className="popup__label">Пароль
                        <input  type="password" 
                                className="popup__input" 
                                name="password"
                                disabled={isInputDisabled && "disabled"}
                                placeholder="Введите пароль"
                                value={values.password || ''}
                                onChange={handleChange}
                                minLength='8'
                                required />
                        <span className="popup__input-error">{errors.password}</span>
                    </label>
                    <label className="popup__label">Имя
                        <input  type="text" 
                                className="popup__input" 
                                name="name"
                                disabled={isInputDisabled && "disabled"}
                                placeholder="Введите свое имя"
                                value={values.name || ''}
                                onChange={handleChange}
                                minLength='2'
                                maxLength='30'
                                required />
                        <span className="popup__input-error">{errors.name}</span>
                    </label>
                </fieldset>
            }
        />
    )
}

export default RegisterPopup;