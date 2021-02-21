import React from 'react';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import NoResults from '../NoResults/NoResults';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';

function Main({ articles, loggedIn, onSearch, isLoader, isSearched, onSaveArticle, onDeleteArticle, newsServerErr, savedArticles, links }) {

    const isArticles = (articles.length > 0);

    return (
        <main className="content">
            <SearchForm onSearch={onSearch}/>
            {isLoader && <Preloader />}
            {(isSearched && !isLoader) ? 
                (isArticles ? <NewsCardList articles={articles} 
                    loggedIn={loggedIn} 
                    onSaveArticle={onSaveArticle} 
                    onDeleteArticle={onDeleteArticle}
                    savedArticles={savedArticles} /> : <NoResults newsServerErr={newsServerErr} />)
            : (
                <>
                </>
            )}
            <About />
        </main>
    )
}

export default Main;