import React from 'react';

function About() {
    return (
        <section className="about">
            <img className="about__photo" src="https://images.unsplash.com/photo-1611420730272-40bc66677fdc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Аватар автора"/>
            <div className="about__container">
                <h2 className="about__title">Об авторе</h2>
                <p className="about__text">Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы занимаетесь, какими технологиями разработки владеете.</p>
                <p className="about__text">Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились, и чем можете помочь потенциальным заказчикам.</p>
            </div>
        </section>
    )
}

export default About;