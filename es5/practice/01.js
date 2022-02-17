const {log} = console;
// parseInt('string', 进制);
// parseFloat('string');
// Math.round();Math.floor();Math.ceil();Math.random();
// Math.abc();Math.sqrt();Math.max();Math.min();Math.pow();number.toFixed();
// typeof undefined,number,string,boolean,object,function
{
  // 取 1-3 之间的随机整数
  // 0 < x < 1
  // 0 < x < 3
  // 1 < x < 4
  const ran = Math.random()*3 + 1;
}

{
  // 是否为合数（除了1和它本身外还有能把它整除的数)
  function isHe(num) {
    let isHe = false;
    for(let i=2;i<num;i++) {
      if(num%i === 0) {
        isHe = true;
        break;
      }
    }
    return isHe;
  }
}

{
   // 是否是素数（质数）：只能被1和它本身整除的数
   function isZhi(num) {
     let isZhi = true;
    for(let i=2;i<num;i++) {
      if(num%i === 0) {
        isZhi = false;
        break;
      }
    }
    return isZhi;
   }
}

{
  // 阶乘之和 1! + 2! + 3! + ... + n!
  function sum2(n) {
    let total = 0;
    for(let i=1;i<=n;i++) {
      let jieCheng = 1;
      for(let j=1;j<=i;j++) {
        jieCheng *= j;
      }
      total += jieCheng;
    }
    return total;
  }
  function sum2(n) {
    let total = 0;
    let add = 1;
    for(let i=1;i<=n;i++) {
      add = add*i;
      total = total + add;
    }
    return total;
  }
}

{
  // 计算n的阶乘
  // 10! = 1*2*3*...*9*10
  function factorial1(n){
    let jiecheng = 1;
    for(let i=1;i<=n;i++){
      jiecheng = jiecheng*i;
    }
    return jiecheng;
  }
  function factorial2(n) {
    if(n<=1) return 1;
    return n*factorial2(n-1);
  }
}

{
  // 斐波那契数列: 1,1,2,3,5,8 ...
  // 求前40个斐波那契数列
  function Fibonacci1(n) {
    let str = '1,';
    let [prev, cur] = [0, 1];
    for(let i=1;i<n;i++) {
      [prev, cur] = [cur, prev + cur];
      str = `${str}${cur},`;
    }
    return str;
  }
  // 第n个数是几
  function Fibonacci2(n) {
    if(n<=1) return 1;
    return Fibonacci2(n-1) + Fibonacci2(n-2);
  }
  // 求89是斐波那契数列的第几个
  function* Fibbonacci3() {
    let [prev, cur] = [0,1];
    for(;;){
      [prev, cur] = [cur, prev + cur];
      yield cur;
    }
  }
  function getIndex(num){
    let n = 1;
    for(let item of Fibbonacci3()){
      n++
      if(item >= num){
        return n;
      }
    }
  }
  function Fibbonacci4(num){ // [1,1,2,3,5,8];
    let index = 1;
    let [prev, cur] = [0, 1];
    for(;;){
      [prev, cur] = [cur, prev + cur];
      index++;
      if(cur >= num){
        return index;
      }
    }
  }
  // 计算斐波那契数列的第 10 个数  1,1,2,3,5,8 ...  
  function Fibbonacci5(index){
    let [prev, cur] = [0, 1];
    for(let i=1;i<index;i++){
      [prev, cur] = [cur, prev + cur]; // [1,3,5]
    }
    return cur;
  }
  let index = 2;
  function Fibonacci6(prev, cur) {
    index++;
    [prev, cur] = [cur, prev + cur];
    if(index >= 10) {
      return cur;
    }
    return Fibonacci6(prev, cur);
  }
  Fibonacci6(1, 1);
}
{
  // 一球从100米高度自由落下,每次落地后反跳回原高度的一半；再落下，求它在第10次落地时，共经过多少米？第10次反弹多高？
  // 100 50 25 12.5 ... 100*0.5*0.5
  function getValue(count) {
    let total = 100;
    let height = 100;
    for(let i=1;i<=count;i++) {
      height = height*0.5;
      total = total + height*2;
    }
    height = height.toFixed(2);
    total = total.toFixed(2);
    return [total, height];
  }
}
{
  /**
     * 找数字: 求所有满足条件的四位数abcd:
        (1)这四位数是11的倍数;    
        (2)a, b, c, d均是小于10的互不相同的自然数; 
        (3)b + c = a; 
        (4)bc是完全平方数。
    */
  function getValues() { // [5148, 5412]
    const arr = [];
    for(let i=1000;i<=9999;i++) {
      const a = parseInt(i/1000);
      const b = parseInt(i%1000/100);
      const c = parseInt(i%100/10);
      const d = i%10;
      if(i%11===0 && a!=b && a!=c && a!=d && b!=c && b!=d && c!=d && (b+c)===a && parseInt(Math.sqrt(b))*parseInt(Math.sqrt(b))===b && parseInt(Math.sqrt(c))*parseInt(Math.sqrt(c))===c){
        arr.push(i);
      }
    }
    return arr;
  }
}
{
  /**
   * 求Sn=a+aa+aaa+……+aa……a之值,其中a是一个数字,n是文本框输入的。
   */
  function getValue1(n, a){
    let sum = 0;
    let str = '';
    for(let i=1;i<=n;i++) {
      str += a;
      sum = sum + parseInt(str, 10);
      if(i === n-1) {
        sum = sum*2;
      }
    }
    return sum;
  }
  function getValue2(n, a) {
    let sum = a;
    let add = a;
    for(let i=2;i<=n;i++) {
      add = add*10 + a; // add = 20 + 2;
      sum = sum + add;  // 2 + 22 + 222
      if(i === n-1) {
        sum = sum*2;
      }
    }
    return sum;
  }
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
  function showMultiplicationTable() {
    for(let i=1;i<=9;i++){
      for(let j=1;j<=i;j++){
        document.write(`${j}x${i}=${i*j}&nbsp;`);
      }
      document.write('<br/>');
    }
  }
}
{
  // 求100-999之间的水仙花数。(水仙花数:三位数中，每位数字 立方和等于自身，如:153 == 1*1*1+5*5*5+3*3*3 )
  function getShuiXianFlowers() {
    let list = [];
    for(let i=100;i<=999;i++) {
      const a = parseInt(i/100);
      const b = parseInt(i%100/10);
      const c = i%10;
      if(Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3) === i) {
        list.push(i);
      }
    }
    return list;
  }
}
{
  // 打印100以内的数，逢7的倍数，含7的数，打印“过”;
  function getList() {
    let list = [];
    for(let i = 1;i<100;i++) {
      if(i%7===0 || i.toString().includes('7')){
        list.push('pass');
        continue;
      }
      list.push(i);
    }
    return list;
  }
}
{
  // 简单的轮播
  const oContainer = document.getElementById('carousel');
  function move(el){
    el.style.backgroundImage = `url(../es5/img/${order}.jpg)`;
  }
  function start() {
    let order = 0;
    setInterval(()=>{
      order++;
      move(oContainer);
      if(order >= 5) {
        order = 0;
      }
    }, 2000);
  }
  start();
}

//1.数据类型, 运算符, 表达式
// 入职薪水10K，每年涨幅5%，50年后工资多少？
const SecondYearSallary = 10 * (1 + 0.05);
Math.pow(SecondYearSallary, 49);

// 为抵抗洪水，战士连续作战89小时，编程计算共多少天零多少小时？
const days = parseInt(89/24);
const hours = 89%24;

// 给定一个数，把它保留3位小数
const num = 10;
num.toFixed(3); //

// 给定一个三位数，分别把这个数字的百位、十位、个位算出来并显示
const num1 = 285;
const bai = parseInt(num1/100);
const shi = parseInt((285 - bai*100)/10);
const ge = 285%10;
log(bai, shi, ge);
//2.流程控制 - 条件判断
// 判断一个整数是偶数还是奇数，并输出判断结果
function isEven(num) {
  if(num%2 === 0) {
    return true;
  }
  return false;
}
// 输入年份，判断是否是闰年 (能被4整除但是不能被100整除；或能被400整除)
function isRun(year) {
  if((year%4 === 0 && year%100 !== 0) || year%400 === 0) {
    return true;
  }
  return false;
}

//3.循环while(){}; do{}while(); for(){}
// while打印100以内7的倍数
{
  let num = 1;
  while(num < 100) {
    if(num%7 === 0){
      log(num);
    }
    num++;
  }
}
// while打印100以内的奇数
{
  let num = 2;
  while(num < 100){
    if(num%2 !== 0) {
    log(num);
    }
    num ++;
  }
}
// while打印100以内所有偶数的和
{
  let num = 1;
  let total = 0;
  while(num < 100) {
    if(num%2 === 0) {
      total += num; 
    }
    num ++;
  }
}
// while打印图形
// **********
// **********
// **********
// **********
{
  let num1 = 0;
  while(num1 < 4) {
    let num2 = 0;
    while(num2 < 10) {
      document.write('*');
      num2 ++;
    }
    document.write('<br />');
    num1 ++;
  }
}
// 用while循环打印一个年份的下拉框(结合HTML代码的)
{
  const oSelect = document.createElement('select');
  let num = 1990;
  while(num < 2022) {
    const oOption = document.createElement('option');
    oOption.value = num;
    oOption.innerText = num;
    oSelect.appendChild(oOption);
    num ++;
  }
  document.getElementsByTagName('body')[0].appendChild(oSelect);
}
//打三角
//*
//** 
//***
//****
//*****
{
  function createTriangle() {
    for(let i=1;i<=5;i++) {
      for(let j=1;j<=i;j++) {
        document.write('*');
      }
      document.write('<br/>');
    }
  }
}
//打三角
//    *
//   ** 
//  ***
// ****
//*****
{
  // 1 - 4个空格 1个*
  // 2 - 3个空格 2个*
  // 3 - 2个空格 3个*
  // 4 - 1个空格 4个*
  // 5 - 0个空格 5个*
  function createTriangle() {
    for(let i=1;i<=5;i++) {
      //打印空格
      for(let x=1;x<=5-i;x++) {
        document.write('&nbsp;&nbsp;');
      }
      //打印*
      for(let y=1;y<=i;y++) {
        document.write('*');
      }
      document.write('<br/>');
    }
  }
}

//打钻石
/*
                   外层循环次第      内层循环次数(空格)           内层循环次数(*)  
    *               第一次 i=1         共3次=4-i  3                   共1次=2*i-1  1
   ***              第二次 i=2         共2次=4-i  2                   共3次=2*i-1  3
  *****             第三次 i=3         共1次=4-i  1                   共5次=2*i-1  5
 *******            第三次 i=4         共0次=4-i  0                   共7次=2*i-1  7
 
  *****             第一次 i=1         共1次=i                       共5次=7-2*i   5
   ***              第二次 i=2         共2次=i                       共3次=7-2*i   3
    *               第三次 i=3         共3次=i                       共1次=7-2*i   1
*/
{
  function createDiamond() {
    //打上半部分
    for(let i=1;i<=4;i++) {
      // 打空格
      for(let x=1;x<=4-i;x++) {
        document.write('<input type="radio" />');
      }
      //打钻石
      for(let y=1;y<=2*i-1;y++) {
        document.write('<input type="radio" checked=true />');
      }
      document.write('<br/>');
    }
    //打下半部分
    for(let i=1;i<=3;i++) {
      // 打空格
      for(let x=1;x<=i;x++) {
        document.write('<input type="radio" />');
      }
      //打钻石
      for(let y=1;y<=7-2*i;y++) {
        document.write('<input type="radio" checked=true />');
      }
      document.write('<br />');
    }
  }
}
//山上有一口缸可以装50升水，现在有15升水。老和尚叫小和尚下山挑水，每次可以挑5升。问:小和尚要挑几次水才可以把水 缸挑满?通过编程解决这个问题。
{// 35
 // 35 - 5*x = 0;
  function getTimes(total) {
    let count = -1;
    for(let i=15;i<=total;i+=5) {
      count += 1;
    }
    return count;
  }
}





