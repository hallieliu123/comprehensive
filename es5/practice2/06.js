const { log } = console;

// 事件流处理方式 先事件捕获 -> 后事件冒泡

const o1 = document.querySelector('.container');
const o2 = o1.firstElementChild;
const o3 = o2.firstElementChild;

o1.addEventListener('click', ()=>{
    log('capture o1');
}, true);

o2.addEventListener('click', ()=>{
    log('capture o2');
}, true);

o3.addEventListener('click', ()=>{
    log('capture o3');
}, true);

o1.addEventListener('click', ()=>{
    log('bubble o1');
}, false);
o2.addEventListener('click', ()=>{
    log('bubble o2');
}, false);
o3.addEventListener('click', ()=>{
    log('bubble o3');
}, false);










