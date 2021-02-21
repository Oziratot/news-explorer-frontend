const BASE_URL = 'https://nomoreparties.co/news/v2/everything'; 
const API_KEY = '60ab30a989d24191b6ffb4300ddea6e9';

export const searchNews = (keyword) => {

    // creating dates parameters
    const toDate = (new Date().toISOString());
    const rawFromDate = (Date.now() - (1000 * 3600 * 24 * 7))
    const fromDate = new Date(rawFromDate).toISOString();

    return fetch(`${BASE_URL}?q=${keyword}&from=${fromDate}&to=${toDate}&pageSize=100&language=ru&apiKey=${API_KEY}`, {
        method: "GET",
        headers: {
        },
    })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(res);
        })
};