import React from 'react';

function SavedNewsHeader({ name, savedArticles }) {

    const length = savedArticles.length;
    function saved(length) {
        if (length === 1) {
            return "сохраненная статья"
        } else if (length > 1 && length < 5) {
            return "сохраненные статьи"
        } else if (length === 0 || length > 4) {
            return "сохраненных статей"
        }
    };

    const keywords = savedArticles.map(article => article = article.keyword);
    const uniqueKeywords = [...new Set(keywords)];
    function span(unique) {
        if (unique.length === 1) {
            return `${unique[0]}`;
        } else if (unique.length >= 2) {
            return `${unique[0]}, ${unique[1]}`
        }
    } 

    function left(unique) {
        if (unique.length > 2) {
            return `и ${unique.length - 2}-м другим`
        }
    }

    return (
        <section className="saved-news-header">
            <p className="saved-news-header__pretitle">Сохраненные статьи</p>
            <h3 className="saved-news-header__title">{name}, у вас {length} {saved(length)}</h3>

            {(uniqueKeywords.length === 0) ? (<></>) : (
            <div className="saved-news-header__container">
                <p className="saved-news-header__keywords-text">По ключевым словам:
                    <span className="saved-news-header__keywords"> {span(uniqueKeywords)} {left(uniqueKeywords)} </span> 
                </p>
            </div>
            )}
            
        </section>
    )
}

export default SavedNewsHeader;