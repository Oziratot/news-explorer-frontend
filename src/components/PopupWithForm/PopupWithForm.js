import React from 'react'

function PopupWithForm({ name, isOpen, onClose, title, children, submitButtonText, undertext, onSubmit, switchTo, isValid, message }) {
    return (
        <div className={`popup popup_modal_type_${name} ${isOpen && 'popup_opened'}`}>
            <form name={`${name}`}
                className={`popup__container popup__container_type_${name}`}
                onSubmit={onSubmit}
                noValidate>

                    <button type="button"
                            className="popup__close-btn"
                            onClick={onClose}></button>
                
                <p className={`popup__text popup__text_type_${name}`}>{title}</p>
                {children}
                
                <div className="popup__btn-container">
                    {message ? <p className="popup__error">{message}</p> : <></>}
                    <button type="submit" disabled={!isValid} className={`popup__save-btn ${isValid && "popup__save-btn_active"}`}>{submitButtonText}</button>
                </div>
                
                <p className="popup__undertext">Или
                    <button className="popup__underbutton" type="button" onClick={switchTo}>{undertext}</button>
                </p>
            </form>
        </div>
    )
}

export default PopupWithForm;