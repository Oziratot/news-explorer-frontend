import React from 'react';
import { useLocation } from 'react-router-dom';

function NewsCard({ article, loggedIn, onSaveArticle, onDeleteArticle, savedArticles }) {

const location = useLocation();
const path = location.pathname;
const isSaved = (path === '/saved-news');

const [isArticleSaved, setIsArticleSaved] = React.useState(false);
const articleMarkClassname = (isArticleSaved ? "articles__button_mark-saved" : "articles__button_mark-logged")

React.useEffect(() => {
    if (savedArticles) {
        setIsArticleSaved(savedArticles.find((a) => a.link === article.link));
    }
}, [article.link, savedArticles])

function handleMarkClick() {
    if (isArticleSaved) {
        setIsArticleSaved(false);
        savedArticles.forEach((a) => {
            if (a.link === article.link) {
                onDeleteArticle(a);
            }
        })
    } else {
        onSaveArticle(article);
        setIsArticleSaved(true);
    };
};

function handleDelete() {
    onDeleteArticle(article);
};

    return (
        <li className="articles__element">
            {isSaved && (<p className="articles__keyword">{article.keyword}</p>)}
            <div className="articles__icons">
                {isSaved ? (
                    <>
                        <button type="button" onClick={handleDelete} className="articles__button articles__button_delete"></button>
                        <p className="articles__tooltip">Убрать из сохраненных</p>
                        
                    </>
                ) : (
                    <>
                        <button type="button" onClick={handleMarkClick} className={`articles__button ${loggedIn ? (articleMarkClassname) : "articles__button_mark"}`}></button>
                        <p className="articles__tooltip">Войдите, чтобы сохранять статьи</p>
                    </>
                )}            
            </div>
            <img className="articles__image" src={article.image} alt={article.keyword} />
            <div className="articles__description">
                <p className="articles__date">{article.date}</p>
                <h3 className="articles__title">{article.title}</h3>
                <p className="articles__text">{article.text}</p>
                <a href={article.link} className="articles__source" target="_blank" rel="noreferrer">{article.source}</a>
            </div>
        </li>
    )
}

export default NewsCard;