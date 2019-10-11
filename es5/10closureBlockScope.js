const { log } = console;

// 闭包
// 1.什么是闭包
//  闭包就是函数嵌套函数，内部函数可以访问外部函数的变量或方法，并且使该变量或方法始终驻扎在内存中,不会被垃圾回收机制回收。
// 2.闭包的使用
// 例子：函数柯里化: 传递给函数一些参数调用它，让它返回的函数再去处理剩下的参数。
{
    const fn = x => y => x+y;
}
//      管道部署机制：第一个函数的返回值，是第二个函数的参数,依次类推
{
    let multi = k => k*10;
    let plus = ([m,n]=[]) => m+n;
    let pipeline = (...values) => (...fns) => {
        return fns.reduce((prev,cur)=>{
            return cur(prev)
        },values)
    }
    // log(pipeline(1,2)(plus,multi));
}
//      thunk函数: 定义 
{
    const thunk = (callback) => (...values) => (fn) => {
        return callback.apply(null,[...values,fn])
    }
    const fn1 = (val1,val2,fn) => {
        fn(val1,val2);
    }
    let th = thunk(fn1);
    // th(1,2)(log);
}
// 3.闭包的缺点
// 闭包会使得函数的变量始终保存子内存中，使用多了内存消耗很大，所以不能滥用闭包。

// 块级作用域: 一个代码块，在它的外部不能访问它内部的变量。
// let声明的函数会有块级作用域
// 闭包模拟块级作用域


// 作用域链   ----> to be completed;







