import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function RegisterPopup ({ isOpen, onClose, onRegister, switchTo, active }) {
    return (
        <PopupWithForm
            name="register"
            title="Регистрация"
            isOpen={isOpen}
            onClose={onClose}
            submitButtonText="Зарегистрироваться"
            undertext="Войти"
            switchTo={switchTo}
            active={active}
            onSubmit={onRegister}
            children={
                <fieldset className="popup__fieldset">
                    <label className="popup__label">Email
                        <input  type="email" 
                                className="popup__input" 
                                name="email"
                                placeholder="Введите почту"
                                required />
                        <span className="popup__input-error">Неправльный email</span>
                    </label>
                    <label className="popup__label">Пароль
                        <input  type="password" 
                                className="popup__input" 
                                name="password"
                                placeholder="Введите пароль"
                                required />
                        <span className="popup__input-error">Неправильный пароль</span>
                    </label>
                    <label className="popup__label">Имя
                        <input  type="text" 
                                className="popup__input" 
                                name="name"
                                placeholder="Введите свое имя"
                                required />
                        <span className="popup__input-error">Неправльный формат имени</span>
                    </label>
                </fieldset>
            }
        />
    )
}

export default RegisterPopup;