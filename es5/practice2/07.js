const { log } = console;

// 1 什么是 cookie
// 2 cookie 特点

const setCookie = (key, val, expires) => { // expires 天数

    const d = new Date();
    d.setDate(d.getDate() + expires);

    document.cookie = `${key}=${encodeURIComponent(val)};expires=${d.toGMTString()}`;
    return true;
}

const getCookie = (key) => {
    const cookies = document.cookie.split('; ');
    for(let item of cookies){
        if(item.indexOf(key) > -1){
            return item.substring(`${key}`.length);
        }
    }
    return false;
}

const removeCookie = (key) => {
    setCookie(key, '', -1);
}

// 3 什么是session


// 4 webStorage    5M, sessionStorage, localStorage

localStorage.setItem('UID', 78043);
localStorage.getItem('UID');

localStorage.removeItem('UID');
localStorage.clear();





















