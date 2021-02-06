import React from 'react';
import { NavLink } from 'react-router-dom'
import logoutIcon from '../../images/logout-icon.svg'
import logoutIconDark from '../../images/logout-icon-dark.svg'

function Navigation({ loggedIn, isDarkTheme, userName, handleLogin, handleLogout, isMobile}) {

    const [isMenu, setIsMenu] = React.useState(false);

    function handleMenu() {
        setIsMenu(!isMenu);
    }

    return (
        (isMobile ? (
            <>
                <button className={`navigation__menu-btn ${isDarkTheme && "navigation__menu-btn_theme_dark"}`} type="button" onClick={handleMenu}></button>
                <div className={`navigation__menu ${isMenu && "navigation__menu_opened"}`}>
                    <div className="navigation__container">
                        <div className="navigation__title">
                            <h2 className="navigation__text-logo">NewsExplorer</h2>
                            <button className="navigation__close-btn" type="button" onClick={handleMenu}></button>
                        </div>
                        <div className="navigation__links">
                            <NavLink onClick={handleMenu} exact to="/" className="navigation__link" activeClassName="navigation__link_active_light">Главная</NavLink>

                            {loggedIn ? (
                                <NavLink onClick={handleMenu} to="/saved-news" className="navigation__link" activeClassName={"navigation__link_active_light"}>Сохраненные статьи</NavLink>
                            ) : ""}

                            {loggedIn ? (
                                <button className="navigation__sign-btn" onClick={handleLogout}>{loggedIn ? <> {userName} <img src={logoutIcon} alt="" /> </> : "" }</button>
                            ) : (
                                <button className="navigation__sign-btn" onClick={() => {handleLogin(); handleMenu()} }>Авторизоваться</button>
                            )}
                        </div>
                    </div>
                </div>
            </>
        ): (
            <>
                <nav className="navigation">
                    <NavLink exact to="/" className={`navigation__link ${isDarkTheme && "navigation__link_theme_dark"}`} activeClassName={isDarkTheme ? "navigation__link_active_dark" : "navigation__link_active_light"}>Главная</NavLink>
                    {loggedIn ? (
                        <NavLink to="/saved-news" className={`navigation__link ${isDarkTheme && "navigation__link_theme_dark"}`} activeClassName={isDarkTheme ? "navigation__link_active_dark" : "navigation__link_active_light"}>Сохраненные статьи</NavLink>
                    ) : ""}
                    {loggedIn ? (
                        <button className={`navigation__sign-btn ${isDarkTheme && "navigation__sign-btn_theme_dark"}`} onClick={handleLogout}>{loggedIn ? <> {userName} <img src={isDarkTheme ? logoutIconDark : logoutIcon} alt="" /> </> : "" }</button>
                    ) : (
                        <button className={`navigation__sign-btn ${isDarkTheme && "navigation__sign-btn_theme_dark"}`} onClick={handleLogin}>Авторизоваться</button>
                    )}
                </nav>
            </>
        ))
    )
}

export default Navigation;
