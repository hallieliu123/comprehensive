// 数据类型
// 运算符
// 循环
// 函数

// script标签的defer属性：渲染完再执行，多个则按顺序执行
// script标签的async属性：下载完就执行，多个无法保证执行顺序

// %, ++, --, 

// parseInt('string',10),将 字符串 转换为 n 进制的整数；
// parseFloat('参数'),将入参转为浮点数

// Math.round(),Math.floor(), Math.ceil()
// Math.pow(m,n), m的n次方
// Math.random() 返回0-1之间的小数
// Math.max(1,2,5,0);Math.min(10,7,9);
// Math.abc(); 绝对值  
// Math.sqrt(); 开平方根
// Number.tofixed( num ) 

// typeof   undefined | string  | number  |  Boolean  |  object  |   function


// 数据类型     
// 基本数据类型：string,number,undefined,null(空对象指针),boolean;
// 引用数据类型：Object (Date, Array, Math, set, map, regExp 等等);


const { log } = console;

// 取 1-3 之间的随机数

// log( '1-3之间的随机数----->',Math.floor( Math.random()*3 + 1) );

// 0 < x < 1
// 0 < x < 3
// 1 < x < 4

{
    /*
    * 
    **
    ***
    ****
    *****
    */
    // for(let i=1;i<6;i++){
    //     for(let j=1;j<=i;j++){
    //         document.write("<input type='radio' />");
    //     }
    //     document.write("<br />");
    // }

}
{
    /*
    *****
    ****
    ***
    **
    *
    */
    // for(let i=5;i>0;i--){
    //     for(let j=0;j<i;j++){
    //         document.write("<input type='radio' />");
    //     }
    //     document.write("<br />");
    // }
}
{
    /*
        *
       **
      ***
     ****
    *****  
    */
//    for(let i=1;i<6;i++){
//        for(let j=1;j<6;j++){
//             if(5-i<j){  
//                 document.write("<input type='radio' checked='true'/>");
//                 continue;
//             }
//             document.write("<input type='radio' />");
//        }
//        document.write("<br />");
//    }
}
{
    // 是否为合数（除了1和它本身外还有能把它整除的数）
    function isHe(num){
        let isHe = false;
        for(let i=2;i<num;i++){
            if( num % i == 0){
                isHe = true;
                break;
            }
        }
        return isHe;
    }
    // log('isHe---->',isHe(10));
    // log('isHe---->',isHe(11));

    // 是否是素数（质数）：只能被1和它本身整除的数
    // 在这里学习的 count 计数法 和 上面的方法
}

{
    // 阶乘之和 1! + 2! + 3! + ... + n!
    function cal1(n){
        let sum = 0;
        for(let i=1;i<=n;i++){
            let temp = 1;
            for(let j=1;j<=i;j++){
                temp = temp * j;
            }
            sum += temp;
        }
        return sum;
    }

    function cal2(n){
        let sum = 0;
        let add = 1;
        for(let i=1;i<=n;i++){
            add = add*i;
            sum += add; 
        }
        return sum;
    }
    // log( cal2(2) ); // 1 + 2 = 3
    // log( cal2(3) ); // 1 + 2 + 6 = 9
    // log( cal2(4) ); // 1 + 2 + 6 + 24 = 33

    // 求 n 的阶乘  5! = 1*2*3*4*5;
    function factorial1( n ){
        let num = 1;
        for(var i=1;i<=n;i++){
            num = num*i;
        }
        return num
    }
    function factorial2(n){
        if( n <=1 ) return 1;
        return n*factorial1(n-1);
    }
    // log('factorial1--->',factorial1(5));
    // log('factorial2--->',factorial2(5));
}
{   
    // 斐波那契数列: 1,1,2,3,5,8 ...  
    // 求前40个斐波那契数列
    function Fibonacci1(num){
        let str = '1,';
        let [prev,cur] = [0,1];
        for(let i=1;i<=num;i++){
            [prev,cur] = [cur,cur+prev];
            str += `${ cur },`;
        }
        return str;
    }
    // log(Fibonacci1(10)); 

    // 第n个数是几
    function Fibonacci2(n){
        if( n<=1 ) return 1
        return Fibonacci2(n-1) + Fibonacci2(n-2)
    }
    // log(Fibonacci2(10));
    // 求89是斐波那契数列的第几个
    function* Fibonacci3(){ // 数列中所有的值
        let [prev,cur] = [1,1];
        for(;;){
            [prev,cur] = [cur,prev+cur];
            yield cur;
        }
    }
    function searchVal(num){
        let n = 1;
        for(let item of Fibonacci3()){
            n++;
            if( item >= num){
                return n;
            }
        }
    }
    // log(searchVal(89)); 
    // log(searchVal(10946));  

    function Fibonacci5(num){
        let [ prev,cur ]=[1,1];
        let count=1;
        for(;;){
            count++;
            [ prev,cur ] = [cur,prev+cur];
            if( cur == num ) break;
        }
        return count;
    }
    log('Fibonacci5--->',Fibonacci5(89))

    // 计算斐波那契数列的第 10 个数  1,1,2,3,5,8 ...  
    let n = 1;
    function Fibonacci4(num1,num2){
        n++;
        [num1,num2] = [num2,num1+num2];  // 第一次进去的时候 num2 = 1，是第1个数
        if(n == 10){
            return num2;
        }
        Fibonacci4(num1,num2);
    }
    // Fibonacci4(1,1);
}
{
    // 一球从100米高度自由落下，每次落地后反跳回原高度的一半；再落下，求它在第10次落地时，共经过多少米？第10次反弹多高？
    // 100 50 25 12.5 ...
    function count1(height){
        let sum = 100;
        for(let i=0; i<10;i++){
            height = parseFloat(height)/2;
            sum += height*2;
        }
        return [height,sum];
    }
    // log( count1(100) );
    /**
     * 找数字: 求所有满足条件的四位数abcd:
        (1)这四位数是11的倍数;    
        (2)a, b, c, d均是小于10的互不相同的自然数; 
        (3)b + c = a; 
        (4)bc是完全平方数。
    */
    function searchVal(){  // 1112/1000  
        let arr = [];  
        for(let i = 1000;i<=9999;i++){   // [1012, 4048, 5148, 5412, 9097]
            let a = parseInt(i/1000); // 千位数 a 
            let b = parseInt(i%1000/100);  // 百位数 
            let c = parseInt(i%100/10); // 十位数  
            let d = parseInt(i%10); // 个位数 ** 
            if(i%11==0 && a!=b && a!=c && a!=d && b!=c && b!=d && c!=d && b+c == a && Math.sqrt(b)*Math.sqrt(b) == b && Math.sqrt(c)*Math.sqrt(c) == c){
                arr.push(i);
            }
        }
        return arr;
    }
    // log('searchVal--->',searchVal());
    /**
     * 求Sn=a+aa+aaa+……+aa……a之值,其中a是一个数字,n是文本框输入的。
     */
    function sum1(n,a){  
        let sum = 0; 
        // 加到最后一个值时 x 2  
        let str = '';  
        for(let i=1;i<=n;i++){  
            str += a;
            sum += parseInt(str,10);
            if( i == n-1 ){
                sum = sum*2;
            }
        }
        return sum;
    }
    // log('sum1--->',sum1(3,3)); // 405
    function sum2(n,a){  // 这个方法没有倒着加
        var sum = a;
        var term= a;
        for(var i=2;i<=n;i++){
            term = term*10+a;
            sum = sum+term;
        }
        return sum;
    }
    // log('sum2--->',sum2(3,3)); // 369
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
                document.write(`${j}x${i}&nbsp`);
            }
            document.write('<br />');
        }
    }
    // printMultiplicationTable();
}
{
    // 求100-999之间的水仙花数。(水仙花数:三位数中，每位数字 立方和等于自身，如:153 == 1*1*1+5*5*5+3*3*3 )
    function getShuiXianFlowers(){ //  
        let flowers = [];
        for(let i=100;i<=999;i++){
            let ge = parseInt(i%10);  // 个位数
            let shi = parseInt(i%100/10); // 十位数
            let bai = parseInt(i/100);   // 百位数
            if( bai*bai*bai + shi*shi*shi + ge*ge*ge == i){
                flowers.push(i);
            }
        }
        return flowers;
    }
    // log("getShuiXianFlowers-->",getShuiXianFlowers());
}

{
    // 打印100以内的数，逢7的倍数，含7的数，打印“过”;
    function skipSeven(){
        for(let i=1;i<100;i++){ // 99
            let shi = parseInt(i/10);
            let ge = parseInt(i%10);
            if( i%7 == 0 || shi == 7 || ge == 7){
                document.write('pass,<br />');
                continue;
            }
            document.write(`${i},`);
        }
    }
    // skipSeven();
}

{   
    // 简单的轮播
    function move( el,order ){
        log(order);
        el.style.backgroundImage = `url(./img/${order}.jpg)`;
    }
    function start(){
        let el = document.getElementById('carousel');
        let order = 0;
        setInterval(()=>{   
            order++; 
            if(order>5) order = 1;
            move(el,order);
        },2000);
    }
    start();
}






