
// 防抖函数: 触发一个事件,在一定时间内该函数只能被调用一次, 如果在该时间段内再次被调用则重新计时
// 使用场景: 搜索框联想搜索; 窗口resize时调用的函数
const debounce = (fn, timeout) => {
    let myTimer = null;
    return (...args) => {
        myTimer && clearTimeout(myTimer);
        myTimer = setTimeout(()=>{
            fn(...args);
        }, timeout);
    };
};

// 节流函数: 在一定时间内函数只能被调用一次
// 使用场景: 下拉加载
const throttle = (fn, timeout) => {
    let myTimer = null;
    return (...args) => {
        if (myTimer) return;
        myTimer = setTimeout(() =>{
            fn(...args);
            clearTimeout(myTimer);
        }, timeout);
    };
};
// once 函数
const once = (fn) => {
    let isFirst = true;
    return (...args) => {
        if (isFirst) {
            fn(...args);
            isFirst = false;
        }
    };
};

