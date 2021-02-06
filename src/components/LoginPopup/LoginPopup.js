import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function LoginPopup ({ isOpen, onClose, onLogin, switchTo, active }) {
    return (
        <PopupWithForm 
            name="login"
            title="Вход"
            isOpen={isOpen}
            onClose={onClose}
            submitButtonText="Войти"
            undertext="Зарегистрироваться"
            switchTo={switchTo}
            active={active}
            children={
                <fieldset className="popup__fieldset">
                    <label className="popup__label">Email
                        <input  type="email" 
                                className="popup__input" 
                                name="email"
                                placeholder="Введите почту"
                                required />
                        <span className="popup__input-error"></span>
                    </label>
                    <label className="popup__label">Пароль
                        <input  type="password" 
                                className="popup__input" 
                                name="password"
                                placeholder="Введите пароль"
                                required />
                        <span className="popup__input-error"></span>
                    </label>
                </fieldset>
            }
        />
    )
}

export default LoginPopup;