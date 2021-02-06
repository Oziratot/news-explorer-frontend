import React from 'react';

function SearchForm({ onSearch }) {

    return (
        <section className="searchform">
            <div className="searchform__container">
                <h1 className="searchform__title">Что творится в мире?</h1>
                <p className="searchform__subtitle">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
                <form name="search-form" className="search-form" onSubmit={onSearch}>
                    <div className="searchform__field">
                        <input  className="searchform__input"
                                type="text"
                                placeholder="Введите тему новости" />
                        <button className="searchform__search-btn"
                                type="submit">Искать</button>
                    </div>
                </form>
            </div>
            
        </section>
    )
}

export default SearchForm;