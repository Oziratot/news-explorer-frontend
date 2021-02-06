import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import articles from '../../articles.json';
import SavedNews from '../SavedNews/SavedNews';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import LoginPopup from '../LoginPopup/LoginPopup';
import RegisterPopup from '../RegisterPopup/RegisterPopup';
import Main from '../Main/Main';
import ConfirmPopup from '../ConfirmPopup/ConfirmPopup';

function App() {

  const [loggedIn, setLoggedIn] = React.useState(true);
  const [userName, setUserName] = React.useState('Роман');
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false); 
  const [isMobile, setIsMobile] = React.useState(false);
  const history = useHistory();

  React.useEffect(() => {
    const width = window.innerWidth;
    if (width < 768) {
      setIsMobile(true);
    }
  }, [])

  // close on esc
  document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  })
  
  // close on overlay
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup')) {
      onClose();
    }
  })

  function handleLogout() {
    setLoggedIn(false);
    history.push("/");
  }

  function handleLogin() {
    setIsLoginPopupOpen(true)
  }

  function switchTo() {
    onClose();
    if (isLoginPopupOpen) {
      setIsLoginPopupOpen(false);
      setIsRegisterPopupOpen(true);
    }; 
    if (isRegisterPopupOpen) {
      setIsRegisterPopupOpen(false);
      setIsLoginPopupOpen(true);
    }
  }

  function onClose() {
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
    setIsConfirmPopupOpen(false);
  }

  function onConfirm() {
    setIsConfirmPopupOpen(false)
    setIsLoginPopupOpen(true);
  }

  function onRegister(evt) {
    evt.preventDefault();
    setIsRegisterPopupOpen(false);
    setIsConfirmPopupOpen(true);
  }

  return (
    <div className="App">

      <LoginPopup isOpen={isLoginPopupOpen} onClose={onClose} switchTo={switchTo} active={false} />

      <RegisterPopup isOpen={isRegisterPopupOpen} onClose={onClose} onRegister={onRegister} switchTo={switchTo} active={true} />

      <ConfirmPopup name="confirm" isOpen={isConfirmPopupOpen} onClose={onClose} confirmed={onConfirm} title="Пользователь успешно зарегистрирован!" undertext="Войти" /> 

      <Header loggedIn={loggedIn} userName={userName} handleLogin={handleLogin} handleLogout={handleLogout} onAuth={handleLogin} isMobile={isMobile}/>

      <Switch>
        <Route exact path="/">
          
          <Main articles={articles} loggedIn={loggedIn}/>

        </Route>

        <Route path="/saved-news">
          <SavedNewsHeader name={userName} articles={articles} />
          <SavedNews articles={articles} />
        </Route>

      </Switch>

      <Footer />
        
    </div>
  );
}

export default App;
