import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';

function SavedNews({ savedArticles, onDeleteArticle, name }) {
    return (
        <>
            <SavedNewsHeader name={name} savedArticles={savedArticles} />
            <section className="saved-news">
                <ul className="saved-articles">
                    {savedArticles.map((article) => (
                        <NewsCard key={article._id} article={article} onDeleteArticle={onDeleteArticle} savedArticles={savedArticles} />
                    ))}
                </ul>
            </section>
        </>
    )
}

export default SavedNews;