
// 防抖函数: 触发一个事件,在一定时间内函数只能执行一次,若再次触发事件,则重新计时

const debounce = (fn, timeout) => {
    let myTimer = null;
    return (...args) => {
        myTimer && clearTimeout(myTimer);
        myTimer = setTimeout(() => {
            fn(...args);
        }, timeout);
    };
};


// 节流函数: 在一定时间内函数只允许执行一次

const throttle = (fn, timeout) => {
    let myTimer = null;
    return (...args) => {
        if (myTimer) return;
        myTimer = setTimeout(()=>{
            fn(...args);
            clearTimeout(myTimer);
        }, timeout);
    };
};

// once 函数: 只能调用一次该函数

const once = (fn) => {
    let isFirst = true;
    return (...args) => {
        if (isFirst) {
            fn(...args);
            isFirst = false;
        }
    }
};
