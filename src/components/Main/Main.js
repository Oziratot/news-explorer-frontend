import React from 'react';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import NoResults from '../NoResults/NoResults';
import SearchForm from '../SearchForm/SearchForm';

function Main({ articles, loggedIn }) {

    const [isSearched, setIsSearched] = React.useState(false);
    const isArticles = (articles.length > 0);

    function handleSeacrh(evt) {
        evt.preventDefault();
        setIsSearched(true);
    }


    return (
        <main className="content">
            <SearchForm onSearch={handleSeacrh}/>
            {isSearched ? 
                (isArticles ? <NewsCardList articles={articles} loggedIn={loggedIn} /> : <NoResults />)
            : (
                <>
                </>
            )}
            <About />
        </main>
    )
}

export default Main;