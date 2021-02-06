import React from 'react';
import Navigation from '../Navigation/Navigation';
import { useLocation } from 'react-router-dom';

function Header({ loggedIn, userName, handleLogin, handleLogout, isMobile}) {

    const location = useLocation();
    const path = location.pathname;
    const isDarkTheme = (path === "/saved-news");

    return (
        <header className={`header ${isDarkTheme ? "header_theme_dark" : ""}`}>
            <h2 className={`header__text-logo ${isDarkTheme ? "header__text-logo_theme_dark" : ""}`}>NewsExplorer</h2>
            <Navigation loggedIn={loggedIn}
                        isDarkTheme={isDarkTheme}
                        userName={userName}
                        handleLogin={handleLogin}
                        handleLogout={handleLogout}
                        isMobile={isMobile} />
        </header>
    )
}

export default Header;