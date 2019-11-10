const { log } = console;

// cookie
//1.什么是cookie
//  cookie是客户端用来存储用户信息的。因为http协议是无状态协议，网页一旦关闭，客户端与服务端链接就断开了，再打开就
//  不知道是否登陆过，所以登陆过后可以将对应用户的token存入cookie，以便以后使用。

//2.cookie的的特点
{
    // 每次同源的http请求会自动携带，因此会占用带宽
    // 每个cookie大小4kb,同域名最多储存50个
    // 可设置过期时间，或者手动删除      
}

//3.cookie的使用
{
    const setCookie = (key,value,expires) => {
        let d = new Date();
        d.setDate(d.getDate()+expires);
        document.cookie = `${key}=${encodeURIComponent(value)};expires=${d.toGMTString()}`; // 中文处理encodeURIComponent()
        return true;
    }
    const getCookie = (key) => {
        let cookies = document.cookie.split('; ');
        for(let item of cookies){
            if(item.indexOf(key)>-1){
                return item.substring(`${key}=`.length);
            }
        }
        return false;
    }
    const removeCookie = (key) => {
        setCookie(key,'',-1);
    }
}

// session 
//1.什么是session  
// session是服务端用来存储用户信息的，服务端会生成一个session_id给客户端，客户端也是用cookie进行保存的。

// webStorage     
//1.什么是webStorage  
// 也是客户端用来存储数据的，存储大小5M;分为sessionStorage和localStorage  
// webStorage只在客户端存在，不参与服务端通信。
// sessionStorage有效期仅为一次session会话，页面关闭就没了。存储数据页面间也不共享。  
// localStorage数据存储页面间共享，有效期永久，只能手动删除。  

//2.storage的使用  
{  
    // localStorage.setItem('UID','98993');  
    // localStorage.getItem('UID');  
    // localStorage.removeItem('UID');  
    // localStorage.clear();   
}

// 鉴权的两种方式，token鉴权 || jwt鉴权



