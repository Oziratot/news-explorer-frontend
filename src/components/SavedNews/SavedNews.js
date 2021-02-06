import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

function SavedNews({ articles }) {
    return (
        <section className="saved-news">
            <ul className="saved-articles">
                {articles.map((article) => (
                    <NewsCard key={article._id} article={article} />
                ))}
            </ul>
        </section>
    )
}

export default SavedNews;