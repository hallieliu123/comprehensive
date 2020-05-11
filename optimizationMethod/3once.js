

// 只允许函数执行一次

const once = (fn) => {
    let isFirst = true;
    return (...args) => {
        if (!isFirst) return;
        fn(...args);
        isFirst = false;
    }
}
