/**
 * Cookie
 * 
 */
function setCookie(key, value, expires) { // expires: 天数
 const d = new Date();
 d.setDate(d.getDate() + expires); 
 document.cookie = `${key}=${encodeURIComponent(value)};expires=${d.toGMTString()}`;
}
function getCookie(key) {
  const cookieList = document.cookie.split(';');
  for(let cookie of cookieList) {
    if(cookie.indexOf(key) > -1) {
      return cookie.substring(` ${key}=`.length);
    }
  }
  return false;
}
function removeCookie(key) {
  setCookie(key, '', -1);
}

/**
 * webstorage
 */
{
  localStorage.setItem('key', 'value');
  localStorage.getItem('key');
  localStorage.removeItem('key');
  localStorage.clear();

  sessionStorage.setItem('key', 'value');
  sessionStorage.getItem('key');
  sessionStorage.removeItem('key');
  sessionStorage.clear()
}

