

// 防抖函数： 触发一个事件，在 n 秒内函数只能执行一次, 如果 n 秒内再次触发，则重新计时

const debounce = (fn, timeout) => {
    let myTimer = null;
    return (...args) => {
        myTimer && clearTimeout(myTimer);
        myTimer = setTimeout(()=>{ fn(...args); }, timeout);
    }
}

// 使用场景举例：
// 1.输入框搜索联想
// 2.窗口 resize， 窗口resize完再计算窗口大小
