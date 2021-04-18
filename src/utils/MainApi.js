const BASE_URL = 'https://api.oziratot.students.nomoreparties.space';

export const register = (password, email, name) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST', 
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({password, email, name})
    })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(res);
        })
};

export const authorize = (password, email) => {
    return fetch(`${BASE_URL}/signin`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ password, email })
    })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(res);
        })

};

export const checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка ${res.status}`)
        })
        .catch((err) => {
            console.log(err);
        })
}

export const getArticles = (token) => {
    return fetch(`${BASE_URL}/articles`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка ${res.status}`);
        })
        .catch((err) => {
            console.log(err);
        })
};

export const saveArticle = (article, token) => {
    return fetch(`${BASE_URL}/articles`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(article),
    })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка ${res.status}`);
        })
        .catch((err) => {
            console.log(err);
        })
}

export const deleteArticle = (articleId, token) => {
    return fetch(`${BASE_URL}/articles/${articleId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка ${res.status}`);
        })
        .catch((err) => {
            console.log(err);
        })
}