
/**
 * 闭包: 闭包是函数中的函数，内部函数可以访问外部函数的变量或方法，并且这些方法或变量会被保存在内存中，不会被垃圾回收机制回收；
 */
// 管道部署机制
const plus = ([m, n]) => (m+n);
const multiply = (v) => 10*v;

const pipepline = (...args) => (...fns) => {
  return fns.reduce((prev, cur)=>{
    return cur(prev);
  },args);
};

pipepline(1, 2)(plus, multiply); // 30

// thunk 函数
const plus1 = (m,n) => (m+n); 
const thunk = (callback) => (...values) => (fn) => {
  return callback.apply(null, [...values, fn]);
}

const c = (v1, v2, f) => {
  return f(v1, v2);
};

const t = thunk(c);
t(1, 2)(plus1); // 3


