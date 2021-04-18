import React from 'react';
import notFoundImage from '../../images/not-found.svg'

function NoResults({ isArticle, newsServerErr }) {
    return (
        <section className={`no-results ${isArticle ? "" : "no-results_visible"}`}>
            <img src={notFoundImage} className="no-results__image" alt="Не найдено" />
            <p className="no-results__title">{newsServerErr ? "Во время запроса произошла ошибка." : "Ничего не найдено"}</p>
            <p className="no-results__text">{newsServerErr 
            ? "Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз" 
            : "К сожалению по вашему запросу ничего не найдено"}</p>
        </section>
    )
}

export default NoResults;