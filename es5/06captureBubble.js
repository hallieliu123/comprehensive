// const { log } = console;
// event: 先事件捕获 | 后事件冒泡 (事件流的处理方式) 
// addEventListener('click',()=>{},useCapture);第3个参数表示，使用捕获还是冒泡，true捕获，false是冒泡
// removeEventListener('click',那个函数,useCapture);

// 事件捕获 | 事件冒泡
// 1.对于非事件源,先捕获，后冒泡
// 2.对于事件源,先注册冒泡就先执行冒泡，先注册捕获就先执行捕获
// (2022/2/16 chrome浏览器测试现在都是先捕获后冒泡，不区分1，2)
// let o1 = document.getElementById('grandpa');
// let o2 = o1.firstElementChild; 
// let o3 = o2.firstElementChild; 
// o1.addEventListener('click',function(evt){
//     log('bubble grandpa 6');  // 6
// },false);
// o2.addEventListener('click',function(evt){
//     log('bubble father 5' ); // 5
// },false);
// o3.addEventListener('click',function(evt){
//     log('bubble me 3');  // 3
// },false);
// o1.addEventListener('click',function(evt){
//     log('capture grandpa 1');  // 1
// },true);
// o2.addEventListener('click',function(evt){
//     log('capture father 2');  // 2
// },true);
// o3.addEventListener('click',function(evt){
//     log('capture me 4');   // 4
// },true);

// 事件捕获|事件冒泡的使用: 事件代理
// let oUl = document.getElementById('container');
// oUl.addEventListener('click',(evt)=>{
//     log(evt.target.innerHTML);
// },false);

// dom.attachEvent('onclick',()=>{});兼容IE9及以下,默认是冒泡
// dom.detachEvent('onclick',()=>{});兼容IE9及以下,默认是冒泡





