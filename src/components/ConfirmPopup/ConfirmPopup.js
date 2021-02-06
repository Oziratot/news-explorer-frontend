import React from 'react';

function ConfirmPopup({ name, isOpen, onClose, title, confirmed, undertext }) {
    return (
        <div className={`popup popup_modal_type_${name} ${isOpen && 'popup_opened'}`}>
            <form name={`${name}`}
                className={`popup__container popup__container_type_${name}`}
                noValidate>

                    <button type="button"
                            className="popup__close-btn"
                            onClick={onClose}></button>
                
                <p className={`popup__text popup__text_type_${name}`}>{title}</p>
                <button className="popup__underbutton popup__underbutton_type_confirm" type="button" onClick={confirmed}>{undertext}</button>
            </form>
        </div>
    )
}

export default ConfirmPopup;