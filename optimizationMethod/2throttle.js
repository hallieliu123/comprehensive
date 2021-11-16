

// 节流函数：在 n 秒内只允许函数执行一次

const throttle = (fn, timeout) => {
    let myTimer = null;
    return (...args) => {
        if (myTimer) return;
        myTimer = setTimeout(()=>{ 
            fn(...args);
            clearTimeout(myTimer);
        },timeout);
    }
}

// 使用场景举例：
// 1.滚动加载
