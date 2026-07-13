
const { log } = console;
{
/**
 *1/
    const t1 = window.confirm('Are U sure to approve this ?');
    log('t1----->', t1); // true / false
 */
/**
 * 2/
 * 3/
 * 4/
 
   let t1 = null;

   setTimeout(()=>{
        t1 = window.open('sub.html', 'win1');
   }, 2000);

   setTimeout(()=>{
        t1.location.href = 'spercool.html';
   }, 4000);

   setTimeout(()=>{
        t1.close();
   }, 8000);
*/
/**
 * 5/
 * 6/
const myTimer = setInterval(()=>{
    log('test setInterval...');
}, 2000);

setTimeout(()=>{
    clearInterval(myTimer);
}, 5000);
 * 
 * 
 */

/**
 * 7/
    const myTimer = setInterval(()=>{
        window.scrollBy(0, 300)
    }, 2000);

    setTimeout(()=>{
        clearInterval(myTimer);
    }, 6000);
 */

/**
 * 
 * 8/
 *  setTimeout(()=>{
        window.scrollTo(0, 600);
    }, 2000);
* 
*/

// 9/ log(window.screen);

// 10/ log(window.location); // pathname, hash, search, href

// 11/ const el = document.querySelector('.view')

    // setTimeout(()=>{
    //     el.scrollIntoView(true);
    // }, 2000);
}



{
    //1,2,3,4,5,6,7
    // document.getElementById();
    // document.getElementsByClassName();
    // document.getElementsByTagName();
    // document.getElementsByName();
    // document.querySelector();
    // document.querySelectorAll();

    // const oView = document.querySelector('.view');
    // oView.id;
    // oView.getAttribute('id');
    // oView.attributes['id'];
    // oView.getAttribute('style');
    // window.getComputedStyle(oView).width;
    // window.getComputedStyle(oView).height;

    // oView.setAttribute('name', 'blabla');
    // oView.removeAttribute('name');

    //1~22
    // const oView = document.querySelector('.view');
    // oView.tagName/oView.nodeName
    // oView.id;
    // oView.title;
    // oView.innerText;
    // oView.innerHTML;
    // oView.className;
    // oView.style.cssText = '';
    // window.getComputedStyle(oView);
    // oView.children; // 所有标签节点
    // oView.children[1].nodeType; // 1tag,2attribue,3text
    // oView.children[1].nodeValue; // 文本节点，属性节点 可用, 元素节点返回 null
    // oView.children[1].parentNode;
    // oView.childNodes // 所有节点包括文本节点
    // oView.firstElementChild/oView.lastElementChild;
    // oView.firstChild/oView.lastChild;
    // oView.previousElementSibling/oView.nextElementSibling;

    // const newText = document.createTextNode('abc');
    // const newNode = document.createElement('span');
    // const oSpan = oView.children[0];
    // newNode.innerText = newText;
    // oView.appendChild(newNode);
    // oView.insertBefore(newNode, oSpan);
    // oView.replaceChild(newNode, oSpan);
    // oView.removeChild(oSpan);
}

{
    // 事件流的处理方式 事件捕获 后 事件冒泡 
    // const el = document.querySelector('.view');
    // let useCapture = false;
    // el.addEventListener('click',(evt)=>{
    //     log(evt.button);
    // }, useCapture);

    //1
    // onclick
    // onfocus
    // onchange
    // onblur

    // onmouseover
    // onmousemove
    // onmousedown
    // onmouseup
    // onmouseout

    // onkeypress
    // onkeydown
    // onkeyup

    // onresize
    // onscroll

    // evt.keyCode  // 回车键是13
    // evt.button // 0,1,2
    // evt.ctrlKey
    // evt.altKey
    // evt.shiftKey

    // const doc = document.documentElement || document.body;
    // doc.oncontextmenu = evt => { // 阻止右键菜单
    //     // evt.preventDefault();
    //     // return false;
    // }

    // evt.screenX / evt.screenY
    // evt.clientX / evt.clientY
    // evt.offsetX / evt.offsetY

    // evt.clientWidth / evt.clientHeight
    // const doc = document.documentElement || document.body;
    // doc.scrollTop / doc.scrollLeft

    // dom.offsetTop / dom.offsetLeft

    // evt.srcElement === evt.target
    // evt.fromElement / evt.toElement

    // evt.stopPropagation();


    // 拖拽功能
    // const move = () => {
    //     const oBlock = document.querySelector('.movable-block');
    //     oBlock.onmousedown = (evt) => {
    //         let offsetX = evt.offsetX;
    //         let offsetY = evt.offsetY;

    //         document.body.onmousemove = (evt) => {
    //             const doc = document.documentElement || document.body;
    //             let top = doc.scrollTop + (evt.clientY - offsetY) + 'px';
    //             let left = doc.scrollLeft + (evt.clientX - offsetX) + 'px';

    //             oBlock.style.top = top;
    //             oBlock.style.left = left;
    //         }

    //         document.body.onmouseup = (evt) => {
    //             document.body.onmousemove = null;
    //         }
    //     }
    // }
    // move();

    // 固定位置
    // const fixBlock = (el) => {
    //     let offsetTop = el.offsetTop;
    //     let offsetLeft = el.offsetLeft;
    //     document.addEventListener('scroll',(evt)=>{
    //         const doc = document.documentElement || document.body;
    //         const top = doc.scrollTop + offsetTop + 'px';
    //         const left = doc.scrollLeft + offsetLeft + 'px';
    //         el.style.top = top;
    //         el.style.left = left;
    //     }, false);
    // }
    // const oBlock = document.querySelector('.movable-block');
    // fixBlock(oBlock);  // position: static; absolute; relative; fixed;

    // 在指定区域移动
    const moveInBox = (container, block) => {
        // 首先计算 可移动 区域 top, left 值
        const offsetTop = container.offsetTop;
        const offsetLeft = container.offsetLeft;

        // 添加事件onmousemove
        block.onmousedown = (evt) => {
            // 记录鼠标相对事件源的位置
            const offsetY = evt.offsetY;
            const offsetX = evt.offsetX;
            document.body.onmousemove = (evt)=>{
                // 设置block随鼠标的位置 1<=container的offsetTop  2>=container的offsetTop+container的高度-block的高度  3 之间
                const doc = document.documentElement || document.body;
                let top = doc.scrollTop + (evt.clientY - offsetY);
                let left = doc.scrollLeft + (evt.clientX - offsetX);
                let maxTop = offsetTop + (parseInt(container.style.height) - parseInt(block.style.height));
                let maxLeft = offsetLeft + (parseInt(container.style.width) - parseInt(block.style.width));
                log('offsetTop, offsetY, top, maxTop ----->', offsetTop, offsetY, top, maxTop, doc.scrollTop, evt.clientY);
                if(top <= offsetTop) {
                    block.style.top = offsetTop + 'px';
                } else if(top >= maxTop) {
                    block.style.top = maxTop + 'px';
                } else {
                    block.style.top = top + 'px';
                }
                if(left <= offsetLeft) {
                    block.style.left = offsetLeft + 'px';
                } else if(left >= maxLeft) {
                    block.style.left = maxLeft + 'px';
                } else {
                    block.style.left = left + 'px';
                }
            };
            // 鼠标抬起 清除onmousemove事件
            block.onmouseup = () => {
                document.body.omousemove = null;
            }
        }
    }
    const container = document.querySelector('.container');
    const oBlock = document.querySelector('.inner-block');

    // moveInBox(container, oBlock);
    // document.querySelector('.test-input').addEventListener('keydown',(evt)=>{
    //     log('evt.ctrlKey---->', evt.ctrlKey);
    //     log('evt.shiftKey---->', evt.shiftKey);
    //     log('evt.altKey---->', evt.altKey);
    //     log('evt.keyCode---->', evt.keyCode);
    // },false);
    
}














