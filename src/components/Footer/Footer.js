import React from 'react';
import githubIcon from '../../images/github.svg';
import facebookIcon from '../../images/facebook.svg';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__copyright">&copy; 2021 Supersite, Powered by News API</p>
            <div className="footer__nav">
                <ul className="footer__links">
                    <li className="footer__link-item">
                        <Link to="/" className="footer__link footer__link_text">Главная</Link>
                    </li>
                    <li className="footer__link-item">
                    <a href="https://praktikum.yandex.ru/" className="footer__link footer__link_text" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
                    </li>
                </ul>
                <ul className="footer__links">
                    <li className="footer__link-item">
                        <a href="https://github.com/Oziratot" className="footer__link footer__link_icon" target="_blank" rel="noreferrer">
                            <img className="footer__icon" src={githubIcon} alt="" />
                        </a>
                    </li>
                    <li className="footer__link-item">
                        <a href="https://ru-ru.facebook.com/" className="footer__link footer__link_icon" target="_blank" rel="noreferrer">
                            <img className="footer__icon" src={facebookIcon} alt="" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;