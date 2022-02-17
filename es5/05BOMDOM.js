const { log } = console;
{
    // BOM 
    //1. let con = window.confirm("亲，您确认要放弃操作吗？");
    // log(con); // true| false

    //2. window.open("sub.html","win1");//window.可以省略, 返回打开的window对象，可操作, let test = window.open("sub.html","win1"); => test.close(); test.location.href = '';
    //3. setInterval();setTimeout();
    //4. clearInterval();
    //5. window.close();
    //6.window.scrollBy(0,10);
    //7.window.scrollTo(0,100);
    //8.window.screen 该属性保存着笔记本的屏幕信息，及当前窗口与屏幕的关系信息
    //9.window.location (href,host,hash,pathname,search)
    //10.window.navigator.userAgent 返回浏览器名称字符串
    //11.el.scrollIntoView(); // true元素顶端与可视区顶端对齐, false元素底端与可视区底端对齐 
}
{
    // DOM: document object model 文档对象模型
    // dom节点: 描述html标签的javascript对象

    //1. document.getElementById();
    //2. document.getElementsByClassName();
    //3. document.getElementsByTagName();
    //4. document.getElementsByName();

    //5. oInput.getAttribute('value') = oInput.value; 获取dom节点参数属性的值;getAttribute('style') 只能获取内联样式; getAttribute('myCustom')还可以获取自定义属性的值，oInput.myCustomAttr不可以
    //6. oInput.setAttribute('value','val') == oInput.value = val;获取dom节点参数属性的值
    //7. oInput.removeAttribute('value');
    let oDiv = document.getElementById('box');
    // oDiv.setAttribute('name','blabla'); ( 多余的方法 )
    // log(oDiv.getAttribute('name')); ( 多余的方法 )

    // oDiv.name = 'hi'
    // log(oDiv.name);

    // 元素节点属性
    //5. oDiv.tageName/nodeName;
    //6. oDiv.innerHTML; // 获取节点内所有东西
    //7. oDiv.title;
    //8. oDiv.id 
    //9. oDiv.className; 
    //10.oDiv.innerText; // 获取节点内所有文字
    //11.oDiv.style   只能获取内联样式属性
    //12.oDiv.style.cssText='width:100px;height:100px;border:1px solid #000' 
    //13.window.getComputedStyle(dom节点) 获取所有该节点的style属性(内联样式，外联样式属性都可获取)
    //14.oDiv.children,返回所有子节点 类数组
    //15.oDiv.nodeType 1标签节点，2属性oDiv.attributes['id'].nodeType，3文本节点
    //16.oDiv.children[1].nodeValue 只能是文本节点才可以使用，用来修改或者获取
    // nodeValue 标签节点返回 null; oDiv.attributes['id']属性节点返回 属性值 文本节点返回 文本值
    //17.oDiv.parenNode 获取父节点
    //18.oDiv.firstElementChild | oDiv.lastElementChild  获取第一个或者最后一个标签子节点
    // firstChild; lastChild 不分是标签节点 还是文本节点
    //19.oDiv.previousElementSibling | oDiv.nextElementSibling 
    
    // 
    //20.oDiv.appendChild(dom节点);
    //21.oDiv.insertBefore(new,reference);
    //22.oDiv.replaceChild(new,old)
    //23.oDiv.removeChild(dom节点);
    //24.document.createElement("div");
    //25.document.createTextNode('hello world');

    // log(oDiv.innerText)   
    // log(oDiv.innerHTML)  
    // oDiv.style.cssText='width:100px;height:100px;border:1px solid #000';
    // log(oDiv.style.width);
    // log(oDiv.style.height);
    // log(getComputedStyle(oDiv).width);
    // log(getComputedStyle(oDiv).height);
    // log(oDiv.nodeName);
    // log(oDiv.children);
    // log(oDiv.attributes['id'].nodeValue); 
    // log(oDiv.tagName + '--->' + oDiv.nodeType);
    // log(oDiv.children[0].tagName + '--->' + oDiv.childNodes[0].nodeType);
    // log(oDiv.children[1].nodeValue + '--->' + oDiv.childNodes[1].nodeType);
}
{
    // event: 先事件捕获 | 后事件冒泡 (事件流的处理方式) addEventListener('click',()=>{},useCapture);第3个参数表示，使用捕获还是冒泡，true捕获，false是冒泡

    //1 onclick   

    //2 onfocus
    //3 onchange
    //4 onblur

    //5 onmouseover
    //6 omousemove
    //7 onmouseout
    //8 onmousedown
    //9 onmouseup
    
    //10 onkeypress: 只有按下会有输入的键才能触发(即有unicode编码的键);回车键是换行符所以event.keycode也返回13
    //11 onkeydown: 任何键  
    //12 onkeyup: 任何键

    //13 onsubmit

    //14 onresize
    // window.addEventListener('resize',()=>{
    //     log('resize');
    // },false);
    //16 onscroll(任何元素都可以添加)
    // window.addEventListener('scroll',()=>{
    //     log('scroll');
    // },false);

    // event 对象的属性
    //17 event.keyCode;  回车键 = 13
    //18 event.button
    //19 event.shiftKey  
    //20 event.altKey
    //21 event.ctrlKey

    //22 **event.clientX;event.clientY  以可视区左上角为原点,鼠标的位置
    //23 **event.offsetX;event.offsetY  以事件源左上角为原点，鼠标的位置 
    //24 event.screenX;event.screenY    以屏幕左上角为原点，鼠标的位置

    //25 event.srcElement = event.target 事件源dom节点
    //26 event.fromElement / event.toElement 返回dom节点
    
    //28 event.preventDefalut(); 阻止默认行为; (可行)
    // let oA = document.getElementById('my-link');
    // 当我们点击超链接会做两件事 
    // 1.触发onclick  
    // 2.默认跳转页面   
    // oA.onclick = function(evt){
        // log('click');
        // evt.returnValue = false;
        // evt.preventDefault();
    // }
    //29 event.stopPropagation() 阻止冒泡

    //30 let doc = document.documentElement || document.body; 
    // doc.scrollTop  卷去的高度 （任何dom节点都可用）
    // doc.scrollLeft  卷去的left值 （任何dom节点都可用）
    // doc.clientHeight 可视区的高度
    // doc.clientWidth  可视区的高度
    // dom.offsetTop | offsetLeft  有定位的父级/祖级的左上角为原点，没有就是body
    // let el = document.getElementById('fix-position');
    // log(el.offsetTop);
    // log(el.offsetLeft);

    //31 阻止右键菜单
    // document.body.oncontextmenu = function(){
    //     return false;
    // }

    //32 拖拽功能   
    let el = document.getElementById('fix-position');
    const move = (el) => {
        // 1.按下记住鼠标相对el的位置
        el.onmousedown = (evt) => {
            let offsetX = evt.offsetX;
            let offsetY = evt.offsetY;
            // 2.鼠标移动位置计算，移动
            el.onmousemove = (evt) => { 
                let doc = document.documentElement || document.body;
                let top = doc.scrollTop + (evt.clientY - offsetY) + 'px';
                let left = doc.scrollLeft + (evt.clientX - offsetX) + 'px';
                el.style.top = top;
                el.style.left = left;
            }
        }
        // 3.鼠标放开，事件释放
        document.body.onmouseup = () => {
            el.onmousemove = null;
        }
    }
    // move(el);




    // let oDiv = document.getElementById('box');
    // let oDiv1 = document.getElementById('box1');
    // let oInput = oDiv.nextElementSibling;
    // oDiv.style.cssText = 'width:100px;height:100px;border:1px #000 solid;margin:100px;';
    // oDiv.onmouseover = (evt) => {
        // log(evt.shiftKey); // true | false
        // log(evt.altKey); // true | false
        // log(evt.ctrlKey); // true | false
    // }
    // oInput.onkeydown = (evt) => {
    //     log(evt.keyCode);
    // }
    // oInput.onkeypress = (evt) => {  
    //     log(evt.keyCode)
    // } 
    // oDiv.onclick = (evt) => {
        // log('evt.clientX-->',evt.clientX);
        // log('evt.clientY-->',evt.clientY);
        // log('offsetX-->',evt.offsetX);
        // log('offsetY-->',evt.offsetY);
        // log('screenX--->',evt.screenX);  
        // log('screenY--->',evt.screenY);  

        // log(evt);
        // log(evt.srcElement.innerHTML);

        // log('evt.button--->',event.button);
    // }
    // oDiv.onmouseover = ( evt ) => {
    //     log('oDiv--->',evt.fromElement.id);
    //     log('oDiv--->',evt.toElement.id);
    // }

    // oDiv1.onmouseover = ( evt ) => {
    //     log('oDiv1--->',evt.fromElement.id);
    //     log('oDiv1--->',evt.toElement.id);
    // }

    // log(typeof oDiv);
    

    // let el = document.getElementById('fix-position');
    // const fixedPosition = (el) => {
    //     let doc = document.documentElement || document.body;
    //     let scrollTop = doc.scrollTop;
    //     let scrollLeft = doc.scrollLeft;
    //     el.style.top = (scrollTop + 100) + 'px';
    //     el.style.left = (scrollLeft + 0) + 'px';
    // }
    // window.addEventListener('scroll',()=>{
    //     fixedPosition(el);
    // },false);
}
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
















