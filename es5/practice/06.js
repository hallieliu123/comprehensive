// addEventListener('event type', handler, useCapture);
// removeEventListener('event type', handler, useCapture);

const outer = document.querySelector('.outter');
const inner = document.querySelector('.inner');
const item = document.querySelector('.item');
// outer.addEventListener('click', () => {
//   console.log('outer---> 1');
// }, true);
// inner.addEventListener('click', () => {
//   console.log('outer---> 2');
// }, true);
// item.addEventListener('click', () => {
//   console.log('outer---> 3');
// }, true);
// outer.addEventListener('click', () => {
//   console.log('outer---> 6');
// }, false);
// inner.addEventListener('click', () => {
//   console.log('outer---> 5');
// }, false);
// item.addEventListener('click', () => {
//   console.log('outer---> 4');
// }, false);


// const o1 = document.querySelector('.outter');
// const o2 = document.querySelector('.inner');
// const o3 = document.querySelector('.item');
// o1.addEventListener('click',function(evt){
//   console.log(evt.target);
//   console.log('bubble grandpa 6');  // 6
// },false);
// o2.addEventListener('click',function(evt){
//   console.log('bubble father 5' ); // 5
// },false);
// o3.addEventListener('click',function(evt){
//   console.log('bubble me 4');  // 4
// },false);
// o1.addEventListener('click',function(evt){
//   console.log(evt.target);
//   console.log('capture grandpa 1');  // 1
// },true);
// o2.addEventListener('click',function(evt){
//   console.log('capture father 2');  // 2
// },true);
// o3.addEventListener('click',function(evt){
//   console.log('capture me 3');   // 3
// },true);

// 利用冒泡或者说捕获实现事件代理
const oUl = document.querySelector('.container');
oUl.addEventListener('click',(evt)=>{
  console.log(evt.target.innerHTML);
}, false);






