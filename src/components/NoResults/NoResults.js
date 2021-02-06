import React from 'react';
import notFoundImage from '../../images/not-found.svg'

function NoResults({ isArticle }) {
    return (
        <section className={`no-results ${isArticle ? "" : "no-results_visible"}`}>
            <img src={notFoundImage} className="no-results__image" alt="Не найдено" />
            <p className="no-results__title">Ничего не найдено</p>
            <p className="no-results__text">К сожалению по вашему запросу ничего не найдено</p>
        </section>
    )
}

export default NoResults;