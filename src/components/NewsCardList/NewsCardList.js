import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({ articles, loggedIn }) {
    const [shownArticles, setShownArticles] = React.useState([]);
    const [isButtonVisble, setIsButtonVisible] = React.useState(true);

    function handleClick() {
        setShownArticles(articles.slice(0, shownArticles.length + 3))
        if (shownArticles.length >= articles.length - 3) {
            setIsButtonVisible(false);
        }
    };

    React.useEffect(() => {
        setShownArticles(articles.slice(0, 3))
        if (articles.length <= 3) {
            setIsButtonVisible(false);
        }
    }, [articles]);

    return (
        <section className="news">
            <h3 className="news__results">Результаты поиска</h3>
            <ul className="articles">
                {shownArticles.map((article) => (
                    <NewsCard key={article._id}
                            article={article}
                            loggedIn={loggedIn} />
                ))}
            </ul>
            <button className={`news-list__button ${isButtonVisble && "news-list__button_visible"}`} onClick={handleClick}>Показать еще</button>
        </section>
    )
}

export default NewsCardList;