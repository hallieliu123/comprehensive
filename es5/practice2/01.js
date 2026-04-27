
// script - defer, 渲染完再执行,多个按顺序加载。-- 1 document.getElementById()/document.querySelector() 2 多个脚本有依赖关系，必须按顺序执行
// script - async, 加载完立刻执行,不保证加载顺序。-- 埋点脚本, google analytics

// parseInt('string',10),是把其它类型转换为 n 进制的整数;
// parseFloat('参数'),是把其它类型转换为浮点型

// Math.round(),Math.floor(), Math.ceil()
// Math.pow(m,n), m的n次方
// Math.random() 返回0-1之间的小数
// Math.max(1,2,5,0);Math.min(10,7,9);
// Math.abc(); 绝对值  
// Math.sqrt(); 开平方根
// Number.tofixed(num) 变量必须是number类型,并且返回为字符串,自动四舍五入


// 数据类型
// 基本数据类型: string,number,undefined,null(空对象指针),boolean;symbol是原始值,symbol实例是唯一的,不可变的,它主要用来确保对象属性使用唯一的标识符,不会发生属性冲突的风险
// 引用数据类型: Object (Date, Array, Math, set, map, regExp 等等);

// typeof 返回类型 undefined | string  | number  |  Boolean  |  object  |   function  | symbol


// 取 1-3 之间的随机数

// 0 < x < 1
// 0 < x < 3
// 1 < x < 4

console.log('取 1-3 之间的随机数-->', Math.floor(Math.random()*3 + 1));

{
    /**
     * 
     * *
     * **
     * ***
     * ****
     * *****
     */
    /*
    for(let i = 1; i < 6; i++){
        for(let j = 1; j <= i; j++){
            document.write("<input type='radio' />");
        }
        document.write("<br />");
    }
    */
}

{
    /**
     * *****
     * ****
     * ***
     * **
     * *
     */
    /*
   for(let i = 5; i > 0; i--){
        for(let j = 1; j <= i; j++) {
            document.write("<input type='radio' />");
        }
        document.write("<br />");
   }*/
}

{
    /*
        *
       **
      ***
     ****
    *****  
    */
   /*
   for(let i = 1; i < 6; i++) {
        for(let j = 1; j < 6; j++) {
            if(6 - j > i){
                document.write("<input type='radio' checked='true' />");
            } else {
                document.write("<input type='radio' />");
            }
        }
        document.write("<br />");
   }*/
  /*
    for(let i = 1; i < 6; i++){
        for(let j = 1; j < 6; j++) {
            if(6 - j <= i) {
                document.write("<input type='radio' />");
            } else {
                document.write("<input type='radio' checked='true' />");
            }
        }
        document.write("<br />");
    }
        */
}

{
    /*
    // 是否为合数（除了1和它本身外还有能把它整除的数）
    const isHeShu = (num) => {
        let isHe = false;
        for(let i = 2; i < num; i++) {
            if(num % i === 0) {
                isHe = true;
                break;
            }
        }
        return isHe;
    }
    console.log('是否为合数-->', isHeShu(6));
    */
}

{
    // 是否是素数（质数）：只能被1和它本身整除的数
    // 在这里学习的 count 计数法 和 上面的方法
    /*
    const isZhiShu = (num) => {
        let isZhi = true;
        for(let i = 2;i < num;i ++) {
            if(num % i ===0) {
                isZhi = false;
                break;
            }
        }
        return isZhi;
    }
    console.log('是否为质数-->', isZhiShu(5));*/
}

{
    // 阶乘之和 1! + 2! + 3! + ... + n!
    function cal1(num) {
        let sum = 0;
        for(let i=1; i<=num; i++) {
            let add = 1;
            for(let j=1; j<=i; j++) {
                add *= j;
            }
            sum += add;
        }
        return sum;
    }

    function cal2(num) {
        let sum = 0;
        let add = 1;
        for(let i=1; i<=num; i++){
            add *= i;
            sum += add;
        }
        return sum;
    }
    // console.log('阶乘之和-->', cal1(4));
    // console.log('阶乘之和-->', cal2(4));
   
}

{
    // 求 n 的阶乘  5! = 1*2*3*4*5;
    function cal3(num){
        let add = 1;
        for(let i=1;i<=num;i++) {
            add *= i;
        }
        return add;
    }
    function factorial(num){
        if(num<=1) return 1;
        return num*factorial(num-1); // 5*4*3*2*1
    }
    // console.log('阶乘-->', cal3(5));
    // console.log('阶乘-->', factorial(5));
}

{
    // 斐波那契数列: 1,1,2,3,5,8 ...
    // 求前40个斐波那契数列
    function Fibonacci1(n) {
        let str = `1,`;
        let [prev, cur] = [0,1];
        for(let i=1;i<=n;i++) {
            [prev, cur] = [cur, prev+cur];
            str += `${cur},`; 
        }
        return str;
    }
    // console.log(Fibonacci1(5));

    // 第n个数是几
    function Fibonacci2(n){
        if(n<=1) return 1;
        return Fibonacci2(n-1) + Fibonacci2(n-2); // 1,1,2,3,5,8,13
        // Fibonacci2(1) = 1;
        // Fibonacci2(2) = Fibonacci2(1) + Fibonacci2(0) = 1 + 1 = 2;
        // Fibonacci2(3) = Fibonacci2(2) + Fibonacci2(1) = 2 + 1 = 3;
        // Fibonacci2(4) = Fibonacci2(3) + Fibonacci2(2) = 2 + 1 = 5;
        // Fibonacci2(5) = Fibonacci2(4) + Fibonacci2(3) = 5 + 3 = 8;
    }

    // 求89是斐波那契数列的第几个
    function* Fibonacci3(){
        let [prev, cur] = [0,1];
        for(;;){
            [prev, cur] = [cur, prev+cur];
            yield cur;
        }
    }
    function searchVal(num){
        let count = 1;
        for(let item of Fibonacci3()){
            count++;
            // if(item === num) return count;
        }
    }
    // console.log('求89是斐波那契数列的第几个-->', searchVal(89));
    function searchVal2(num){
        let count = 1;
        let [prev,cur] = [0,1];
        for(;;){
            count++;
            [prev, cur] = [cur, prev+cur]; 
            if(cur===num) return count; // 1,2,
        }
    }
    // console.log('求89是斐波那契数列的第几个-->', searchVal2(89));
    // 计算斐波那契数列的第 10 个数  1,1,2,3,5,8 ...
    function Fibonacci4(n){
        let [prev, cur] = [0, 1];
        let count = 1;
        for(;;){
            count++;
            [prev, cur] = [cur, prev+cur];
            console.log(cur);
            if(count===n) return cur;
        }
    }
    // console.log('计算斐波那契数列的第 6 个数-->', Fibonacci4(6));
}
{
    // 一球从100米高度自由落下，每次落地后反跳回原高度的一半；再落下，求它在第10次落地时，共经过多少米？第10次反弹多高？
    // 100 50 25 12.5 ...
    function count(n,h){
        let sum = 0;
        for(let i=1;i<=n;i++) {
            sum += h;
            h = h/2;
        }
        return [sum, h];
    }
    // console.log('共经过多少米 第10次反弹多高-->', count(10, 100));

    /**
     * 找数字: 求所有满足条件的四位数abcd:
        (1)这四位数是11的倍数;    
        (2)a, b, c, d均是小于10的互不相同的自然数; 
        (3)b + c = a; 
        (4)b, c是完全平方数
    */
   function getNum(){
    let arr = [];
    for(let i=1000;i<=9999;i++){ // 3456
        let a = parseInt(i/1000); // 千位数
        let b = parseInt((i%1000)/100); // 百位数
        let c = parseInt((i%100)/10); // 十位数
        let d = parseInt(i%10); // 个位数
        if(i%11==0 && a!=b && a!=c && a!=d && b!=c && b!=d && c!=d && b+c == a && Math.sqrt(b)*Math.sqrt(b) == b && Math.sqrt(c)*Math.sqrt(c) == c){
            arr.push(i);
        }
    }
    return arr;
   }
//    console.log('找数字: 求所有满足条件的四位数abcd:-->', getNum());
}

{
    /**
     * 求Sn=a+aa+aaa+……+aa……a之值,其中a是一个数字,n是文本框输入的
     */
    function sum1(a, n){
        let Sn = 0;
        let str = '';
        for(let i=1;i<=n;i++){
            str += a;
            Sn += parseInt(str, 10);
            if(i===n) {
                Sn = Sn*2;
                return Sn;
            }
        }
    }
    function sum2(a, n){
        let Sn = a;
        let term = a;
        for(let i=2;i<=n;i++) {
            term = term*10+a;
            Sn += term;
            if(i===n) {
                Sn = 2*Sn;
                return Sn;
            }
        }
    }
    // console.log('求Sn=a+aa+aaa+……+aa……a之值-->', sum1(1,4));
    // console.log('求Sn=a+aa+aaa+……+aa……a之值-->', sum2(1,4));
}

{
    // 打印 99 乘法表
    /**
     * 1x1
     * 1x2 2x2
     * 1x3 2x3 3x3
     * 1x4 2x4 3x4 4x4
     * ...
     */
    function printMultiplicationTable(){
        for(let i=1;i<=9;i++){
            for(let j=1;j<=i;j++){
                document.write(`${j}X${i}=${j*i} `);
            }
            document.write('<br/>')
        }
    }
    // printMultiplicationTable();
}

{
    // 求100-999之间的水仙花数。(水仙花数:三位数中，每位数字 立方和等于自身，如:153 == 1*1*1+5*5*5+3*3*3 )
    
    function getSpecialNum(){
        let arr = [];
        for(let i=100;i<=999;i++){ // 123
            let a = parseInt(i/100);
            let b = parseInt((i%100)/10);
            let c = parseInt((i%10));
            if(a*a*a+b*b*b+c*c*c===i){
                arr.push(i);
            }
        }
        return arr;
    }
    // console.log('求100-999之间的水仙花数-->', getSpecialNum());
}
{
    // 打印100以内的数，逢7的倍数，含7的数，打印“过”;
    function skipSeven(){
        for(let i=1;i<100;i++){
            if(i%7===0 || `${i}`.includes('7')){
                document.write(' pass ');
                continue;
            }
            document.write(` ${i} `);
        }
    }
    // skipSeven();
}

{
    
    // 简单的轮播
    function start(num){ // 
        let order = 0;
        const container = document.getElementById('carousel');
        setInterval(()=>{
            order++;
            container.style.backgroundImage = `url(../img/${order}.jpg)`;
            if(order>=num) {
                order = 0;
            }
        },2000);
    }
    start(5);
}






