{
  /**
   * BOM
   * const test = window.confirm('...'); // test is Boolean
   * const w = window.open('url', 'name'); // w.location.href; w.close()
   * window.navigator.userAgent
   * window.location; (href, host, search, pathname)
   * window.scrollBy(x, y);
   * window.scrollTo(x, y);
   * el.scrollIntoView(); // true元素顶端与可视区顶端对齐, false元素底端与可视区底端对齐 
   * window.screen
   * setInterval();
   * setTimeout();
   */
}
{
  /**
   * DOM
   * oDiv.tagName/oDiv.nodeName
   * oDiv.getAttribute('');
   * oDiv.setAttribute('attr', 'value');
   * oDiv.parentNode
   * oDiv.previousElmentSibling;oDiv.nextElementSibling
   * oDiv.firstElementChild; oDiv.lastElementChild;
   * oDiv.firstChild; oDiv.lastChild
   * oDiv.nodeType 1,2,3
   * oDiv.nodeValue: null; attribute value; text value
   * oDiv.innerHTML
   * oDiv.innerText
   * oDiv.title;oDiv.id
   * oDiv.style
   * oDiv.style.csstext = "width:100";
   * window.getComputedStyle(dom节点);
   * oDiv.children
   * 
   * oDiv.appendChild(dom);
   * oDiv.insertBefore(new, old);
   * oDiv.replace(new, old);
   * document.createElement('div');
   * document.createTextNode('hello world text');
   * 
   */
}
{
  /**
   * Event
   * onclick
   * 
   * onfocus
   * onblur
   * onchange
   * 
   * onkeypress
   * onkeyup
   * onkeydown
   * 
   * onmouseover
   * onmousemove
   * onmouseup
   * onmousedown
   * onmouseout
   * 
   * onsubmit
   * 
   * onresize
   * onscroll
   * 
   * event.keyCode, enter == 13
   * event.ctlKey true|false
   * event.altKey true|false
   * event.shiftKey true|false
   * event.button 左中右 0，1，2
   * 
   * event.screenX;screenY
   * event.clientX;clientY
   * event.offsetX;offsetY
   * 
   * event.srcElemement == event.target
   * event.fromElement / event.toElement
   *
   * event.preventDefault();
   * event.stopPropagation();
   * 
   * const doc = document.documentElement | document.body;
   * doc.scrollTop;doc.scrollLeft;
   * doc.clientHeight;doc.clientWidth;
   * el.offsetTop; el.offsetLeft;
   * 
   * document.body.oncontextmune = () => {
   *  return false;
   * }
   * 
   */
}

function move(el) {
  el.onmousedown = (evt) => {
  // 记录鼠标相对事件源的位置
    const offsetX = evt.offsetX;
    const offsetY = evt.offsetY;
    el.onmousemove = (evt) => {
      // 计算事件源相对 body 的位置
      // 设置事件源随鼠标移动的位置
      const doc = document.documentElement || document.body; // DTD:用document.documentElement; 无DTD:document.body
      el.style.top = doc.scrollTop + (evt.clientY - offsetX) + 'px';
      el.style.left = doc.scrollLeft + (evt.clientX - offsetY) + 'px';
    }
  }
  // 放开鼠标，释放事件
  el.onmouseup = () => {
    el.onmousemove = null;
  }
}
const el = document.getElementsByClassName('box')[0];
// move(el);

// el.onmouseover = (evt) => {
//   // console.log('test ---> over - evt.fromElement',evt.fromElement);
//   // console.log('test ---> over - evt.toElement',evt.toElement);
// }

// el.onmouseout = (evt) => {
//   console.log('test ---> out');
//   console.log('test ---> out - evt.fromElement',evt.fromElement);
//   console.log('test ---> out - evt.toElement',evt.toElement);
// }

function moveInBox(container, el) {
  el.onmousedown = (evt) => {
    // 记录鼠标相对事件源的位置
    const offsetX = evt.offsetX;
    const offsetY = evt.offsetY;
    el.onmousemove = (evt) => {
      // 计算事件源随鼠标移动的top, left
      const doc = document.documentElement || document.body;
      const top = (doc.scrollTop + evt.clientY - offsetY);
      const left = (doc.scrollLeft + evt.clientX - offsetX);
      // 设置事件源的left和top: 条件 top 必须 >= container的offsetTop && top 必须 <= container的offsetTop + (container的高度 - box的高度); left值同理
      const minTop = container.offsetTop;
      const minLeft = container.offsetLeft;
      const maxTop = minTop + (parseInt(getComputedStyle(container).height) - parseInt(getComputedStyle(el).height));
      const maxLeft = minLeft + (parseInt(getComputedStyle(container).width) - parseInt(getComputedStyle(el).width));
      if(top <= minTop) {
        el.style.top = minTop + 'px';
      } else if(top >= maxTop) {
        el.style.top = maxTop + 'px';
      } else {
        el.style.top = top + 'px';
      }
      if(left <= minLeft) {
        el.style.left = minLeft + 'px';
      } else if(left >= maxLeft) {
        el.style.left = maxLeft + 'px';
      } else {
        el.style.left = left + 'px';
      }
    }
  };
  // onmouseup时, 释放onmousemove事件
  el.onmouseup = () => {
    el.onmousemove = null;
  }
}
// const container = document.querySelector('.container');
// const item = container.querySelector('.box');
// moveInBox(container, item);

function createCarousel() {
  init();
  play();
  showCurPic();
  toggle();
}
//1. 初始化 UI,这一步实际应该用html和css实现,这里为了练习才这样做
function init() {
  const oDiv = document.getElementsByClassName('carousel')[0];
  oDiv.style.cssText = 'width:400px;height:300px;border:1px #000 solid;margin:100px auto;background-size: cover;background-position:center center;background-repeat:no-repeat;background-image:url(../img/1.jpg);';
  const oUl = document.createElement('ul');
  oUl.className = 'btn-container';
  for(let i=1;i<=5;i++) {
    const oLi = document.createElement('li');
    const oText = document.createTextNode(`${i}`);
    oLi.appendChild(oText);
    oLi.style.cssText = 'list-style:none;flex-basis:25px;line-height:20px;text-align:center;background-color:#ccc;';
    oUl.appendChild(oLi);
  }
  oDiv.appendChild(oUl);
  oUl.style.cssText = 'margin-top:250px;width:100%;height:20px;display:flex;justify-content:space-around;'
}
//2. 轮播逻辑，button顺序变化
let order = 1;
let myTimer = null;
function play() {
  const oDiv = document.getElementsByClassName('carousel')[0];
  myTimer = setInterval(()=>{
    oDiv.style.backgroundImage = `url(../img/${order}.jpg)`;
    const oLi = document.getElementsByTagName('li');
    for(let i=1;i<=5;i++) {
      oLi[i-1].style.backgroundColor = '#ccc';
    }
    oLi[order-1].style.backgroundColor = 'red';
    order++;
    if(order>=6){
      order = 1;
    }
  },2000);
}
//3. 点击button显示当前picture
function showCurPic() {
  const oLi = document.getElementsByTagName('li');
  for(let i=0;i<oLi.length;i++) {
    oLi[i].onclick = (evt) => {
      order = parseInt(evt.target.innerHTML);
      if(myTimer) {
        clearInterval(myTimer);
      }
      const oDiv = document.getElementsByClassName('carousel')[0];
      oDiv.style.backgroundImage = `url(../img/${order}.jpg)`;
      for(let i=1;i<=5;i++) {
        oLi[i-1].style.backgroundColor = '#ccc';
      }
      oLi[order-1].style.backgroundColor = 'red';
    }
  }
}
//4. 鼠标放入停止轮播，鼠标移开继续轮播
function toggle() {
  const oDiv = document.getElementsByClassName('carousel')[0];
  oDiv.onmouseover = () => {
    if(myTimer) {
      clearInterval(myTimer);
    }
  }
  oDiv.onmouseout = () => {
    play();
  };
}

createCarousel();