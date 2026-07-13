
// 1/防抖函数

const debounce = (fn, timeout) => {
    const myTimer = null;
    return (...args) => {
        myTimer && clearTimeout(myTimer);
        myTimer = setTimeout(()=>{ fn(...args); }, timeout); 
    }
}

// 2/节流函数

const throttle = (fn, timeout) => {
    const myTimer = null;
    return (...args)=>{
        if(myTimer) return;
        myTimer = setTimeout(()=>{ 
            fn(...args);
            clearTimeout(myTimer);
        }, timeout);
    }
}

// 3/只执行1次函数

const once = (fn) => {
    const isFirst = true;
    return (...args) => {
        if(!isFirst) return;
        fn(...args);
        isFirst = false;
    }
}


















