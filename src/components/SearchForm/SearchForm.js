import React from 'react';

function SearchForm({ onSearch }) {

    const [keyword, setKeyword] = React.useState('');
    
    function handleChange(e) {
        setKeyword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSearch(keyword);
    }

    return (
        <section className="searchform">
            <div className="searchform__container">
                <h1 className="searchform__title">Что творится в мире?</h1>
                <p className="searchform__subtitle">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
                <form name="search-form" className="search-form" onSubmit={handleSubmit}>
                    <div className="searchform__field">
                        <input  className="searchform__input"
                                type="text"
                                placeholder="Введите тему новости"
                                onChange={handleChange}
                                required />
                        <button className="searchform__search-btn"
                                type="submit">Искать</button>
                    </div>
                </form>
            </div>
            
        </section>
    )
}

export default SearchForm;