
//1 什么是闭包

//2 函数柯里化

// 管道部署机制

{
    const plus = ([m,n]=[]) => m+n;
    const multi = (k) => k*30;

    const pipeline = (...values) => (...fns) => {
        return fns.reduce((prev, cur)=>{
            return cur(prev);
        }, values);
    }
}

// thunk 函数

{
    const plus = (m,n) => (m+n);
    const fCallback = (v1, v2, fn) => fn(v1, v2);

    const thunk = (callback) => (...values) => (f) => callback.apply(null, [...values, f]);
    
    const t = thunk(fCallback);
    
    t(1, 2)(plus);
}



// 闭包缺点 v 


// 块级作用域 v














