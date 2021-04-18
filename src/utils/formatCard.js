function day(digit) {
    if (digit[0] === '0') {
        return digit[1];
    } else {
        return digit;
    }
}

function month(digit) {
    if (digit==='01') {
        return 'января';
    } else if (digit==='02') {
        return 'февраля';
    } else if (digit==='03') {
        return 'марта';
    } else if (digit==='04') {
        return 'апреля';
    } else if (digit==='05') {
        return 'мая';
    } else if (digit==='06') {
        return 'июня';
    } else if (digit==='07') {
        return 'июля';
    } else if (digit==='08') {
        return 'августа';
    } else if (digit==='09') {
        return 'сентября';
    } else if (digit==='10') {
        return 'октября';
    } else if (digit==='11') {
        return 'ноября';
    } else if (digit==='12') {
        return 'декабря';
    }
} 

function formatCard(card, keyword) {
    const rawDate = card.publishedAt.split('T')[0].split('-');
    const date = `${day(rawDate[2])} ${month(rawDate[1])}, ${rawDate[0]}`;
    const formattedCard = {
        keyword: keyword,
        image: card.urlToImage,
        date: date,
        title: card.title,
        text: card.description,
        link: card.url,
        source: card.source.name
    }

    return formattedCard;
};

export default formatCard;