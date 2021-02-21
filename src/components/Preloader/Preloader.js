import React from 'react';

function Preloader() {
    return (
        <section className="preloader">
            <i className="circle-preloader"></i>
            <p className="preloader__text">Идет поиск новостей...</p>
        </section>
    )
}

export default Preloader;