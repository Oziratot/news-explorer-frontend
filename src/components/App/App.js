import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SavedNews from '../SavedNews/SavedNews';
import LoginPopup from '../LoginPopup/LoginPopup';
import RegisterPopup from '../RegisterPopup/RegisterPopup';
import Main from '../Main/Main';
import ConfirmPopup from '../ConfirmPopup/ConfirmPopup';
import  * as MainApi from '../../utils/MainApi';
import * as NewsApi from '../../utils/NewsApi';
import formatCard from '../../utils/formatCard';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {

  const [currentUser, setCurrentUser] = React.useState({}); 
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false); 
  const [isMobile, setIsMobile] = React.useState(false);
  const [isLoader, setIsLoader] = React.useState(false);
  const [isInputDisabled, setIsInputDisabled] = React.useState(false); 
  const [isSearched, setIsSearched] = React.useState(false);
  const [articles, setArticles] = React.useState([]);
  const [savedArticles, setSavedArticles] = React.useState([]);
  const [errMessage, setErrMessage] = React.useState('');
  const [newsServerErr, setNewsServerErr] = React.useState(false);
  const history = useHistory();

  // changing the header depending on the screen width
  React.useEffect(() => {
    const width = window.innerWidth;
    if (width < 768) {
      setIsMobile(true);
    }
  }, [])

  window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  })

  // close on esc
  document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  })
  
  // close on overlay
  document.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('popup')) {
      onClose();
    }
  })

  // new user register
  function handleRegister(password, email, name) {
    setIsInputDisabled(true);
    MainApi.register(password, email, name)
      .then((res) => {
        if (res) {
          setIsRegisterPopupOpen(false);
          setIsConfirmPopupOpen(true);
        }
      })
      .catch((err) => {
        if (err.status === 409) {
          setErrMessage('Такой пользователь уже есть')
        }
      })
      .finally(() => {
        setIsInputDisabled(false);
      })
  }

  //user login
  function handleLogin(email, password) {
    setIsInputDisabled(true);
    MainApi.authorize(email, password)
      .then((res) => {
        if (res) {
          localStorage.setItem('jwt', res.token);
          setLoggedIn(true);
          MainApi.checkToken(res.token)
            .then((res) => {
              setLoggedIn(true);
              setCurrentUser(res);
              onClose();
            })
            .catch((err) => {
              console.log(err);
            })
        }
      })
      .catch((err) => {
        if (err.status === 400 || 401 ) {
          setErrMessage('Неправильное имя пользователя или пароль');
        } else {
          setErrMessage('Что-то пошло не так. Повторите попытку позже');
        }
      })
      .finally(() => {
        setIsInputDisabled(false);
      })
  }

  // checking if authorized
  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      Promise.all([MainApi.checkToken(jwt), MainApi.getArticles(jwt)])
      .then(([user, articles]) => {
        setLoggedIn(true);
        setCurrentUser(user);
        setSavedArticles(articles);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }, [loggedIn]);

  // get articles from localstorage
  React.useEffect(() => {
    const storageArticles  = localStorage.getItem('articles');
    if (storageArticles) {
      setArticles(JSON.parse(storageArticles));
      setIsSearched(true);
    }
  }, []);

  //logout
  function handleLogout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('articles');
    setLoggedIn(false);
    history.push("/");
  }
  
  // search for news by keyword
  function handleSearch(keyword) {
    setIsLoader(true);
    setIsSearched(true);
    NewsApi.searchNews(keyword)
      .then((res) => {
        setNewsServerErr(false);
        const rawArticles = res.articles;
        const formattedArticles = [];
        rawArticles.forEach((item) => {
          formattedArticles.push(formatCard(item, keyword));
        })
        setArticles(formattedArticles);
        localStorage.setItem('articles', JSON.stringify(formattedArticles));
      })
      .catch((err) => {
        if (err.status === 500) {
          setNewsServerErr(true);
        }
      })
      .finally(() => {
        setIsLoader(false);
      })
  }

  // saving an article
  function handleSaveArticle(article) {
    const token = localStorage.getItem('jwt');
    MainApi.saveArticle(article, token)
      .then((res) => {
        setSavedArticles([...savedArticles, res]);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  //delete article
  function handleDeleteArticle(article) {
    const token = localStorage.getItem('jwt');
    MainApi.deleteArticle(article._id, token)
      .then(() => {
        const newSavedArticles = savedArticles.filter((a) => a._id !== article._id);
        setSavedArticles(newSavedArticles);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function openLoginPopup() {
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
    setErrMessage('');
  }

  function onConfirm() {
    setIsConfirmPopupOpen(false)
    setIsLoginPopupOpen(true);
  }

  return (

    <CurrentUserContext.Provider value={currentUser}>

      <div className="App">

        <LoginPopup isOpen={isLoginPopupOpen} onClose={onClose} switchTo={switchTo} onLogin={handleLogin} isInputDisabled={isInputDisabled} message={errMessage} />

        <RegisterPopup isOpen={isRegisterPopupOpen} onClose={onClose} onRegister={handleRegister} switchTo={switchTo} isInputDisabled={isInputDisabled} message={errMessage} />

        <ConfirmPopup name="confirm" isOpen={isConfirmPopupOpen} onClose={onClose} confirmed={onConfirm} title="Пользователь успешно зарегистрирован!" undertext="Войти" /> 

        <Header loggedIn={loggedIn} userName={currentUser.name} handleLogin={openLoginPopup} handleLogout={handleLogout} isMobile={isMobile}/>
        
        <Switch>
          <Route exact path="/">
            
            <Main articles={articles} 
            loggedIn={loggedIn} 
            onSearch={handleSearch} 
            isLoader={isLoader} 
            isSearched={isSearched} 
            onSaveArticle={handleSaveArticle} 
            onDeleteArticle={handleDeleteArticle}
            newsServerErr={newsServerErr}
            savedArticles={savedArticles} />

          </Route>

          <ProtectedRoute path="/saved-news" loggedIn={loggedIn} component={SavedNews} 
            savedArticles={savedArticles}
            onDeleteArticle={handleDeleteArticle}
            name={currentUser.name} />

        </Switch>

        <Footer />
          
      </div>

    </CurrentUserContext.Provider>

  );
}

export default App;
