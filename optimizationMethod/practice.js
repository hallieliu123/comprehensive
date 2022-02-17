
// 防抖函数
const debounce = (fn, timeout) => {
    let myTimer = null;
    return (...args) => {
        if (myTimer) clearTimeout(myTimer);
        myTimer = setTimeout(()=>{
            fn(...args);
        },timeout);
    }
}

// 节流函数
const throttle = (fn, timeout) => {
    let myTimer = null;
    return (...args) => {
        if(myTimer) return;
        myTimer = setTimeout(()=>{
            fn(...args);
            clearTimeout(myTimer);
        },timeout);
    }
}

// once 函数
const once = (fn) => {
    let isFirst = true;
    return (...args) => {
        if(!isFirst) return;
        fn(...args);
        isFirst = false;
    }
}

