
const { log } = console;

// 面向对象 OOP  object oriented programming
// 什么是面向对象编程 ？

//1 工厂方式
function createPerson(name, age){
    const p = new Object();
    p.name = name;
    p.age = age;
    p.say = function(){
        log('Life is too short to be little');
    }
}

const p1 = createPerson('Leaf', 18);

// log('p1----->', p1 instanceof createPerson); // false

// 2 原型方式
// function Person() {}
// Person.prototype.name = 'Leaf';
// Person.prototype.age = 18;

// const p2 = new Person();
// log('p2----->', p2 instanceof Person); // true

// 3 构造函数的方式
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.say = function(){
//         log('Life is too short to be little');
//     }
// }
// const p3 = new Person('Leaf', 18);
// log('p3----->', p3 instanceof Person);  // true 

// 4 构造函数与原型结合的方式
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.say = function(){
    log('Life is too short to be little');
}
const p4 = new Person('Leaf', 18);
log('p4----->', p4, p4 instanceof Person);  // true 

// 5 类的方式
// class Person {
//     constructor(name, age){
//         Object.assign(this, {name, age});
//     }
//     say(){
//         log('Life is too short to be little');
//     }
// }
// const p5 = new Person('Leaf', 18);
// log('p5----->', p5, p5 instanceof Person);  // true 



    // 函数方法写拖拽
    const drag = (el) => {

        el.onmousedown = (evt) => {

            const offsetY = evt.offsetY;
            const offsetX = evt.offsetX;

            document.onmousemove = (evt) => {
                const doc = document.documentElement || document.body;

                const top = doc.scrollTop + (evt.clientY - offsetY);
                const left = doc.scrollLeft + (evt.clientX - offsetX);

                el.style.top = top + 'px';
                el.style.left = left + 'px';
            }
            document.onmouseup = () => {
                document.onmousemove = null;
            }

        }
    }
    // const el = document.querySelector('.movable-block');
    // drag(el);

    // 面向对象思想写拖拽
    class Dragger {
        constructor(el){
            Object.assign(this, {el});
            this.offsetY = 0;
            this.offsetX = 0;
        }
        drag(){
            this.el.onmousedown = this.onmousedown.bind(this);
        }
        onmousedown(evt){
            this.offsetY = evt.offsetY;
            this.offsetX = evt.offsetX;
            document.onmousemove = this.onmousemove.bind(this);
            document.onmouseup = this.onmouseup.bind(this);
        }
        onmousemove(evt){
            const doc = document.documentElement || document.body;
            const top = doc.scrollTop + (evt.clientY - this.offsetY);
            const left = doc.scrollLeft + (evt.clientX - this.offsetX);

            this.el.style.top = top + 'px';
            this.el.style.left = left + 'px';
        }
        onmouseup(){
            document.onmousemove = null;
        }  
    }
    const el = document.querySelector('.movable-block');
    const oBlock = new Dragger(el);
    oBlock.drag(el);

// 6 高级应用

// fn.caller

// log('Object.getPrototypeOf()------>', Object.getPrototypeOf(oBlock));
// log('Object.getPrototypeOf()------>', Object.getPrototypeOf(p4));

// log('isPrototypeOf()--->', Person.prototype.isPrototypeOf(p4)); // true
// log('isPrototypeOf()--->', Dragger.prototype.isPrototypeOf(oBlock)); // true

// Object.setPrototypeOf(p4,{exercise:()=>{log('running...')}});
// log('Object.setPrototypeOf()---->', Object.getPrototypeOf(p4));

// log('hasOwnProperty----->', p4.hasOwnProperty('say')); // false

// delete p4.name;
// log('hasOwnProperty----->', p4.hasOwnProperty('name'));

// log('in----->', 'age' in p4); // true
// log('in----->', 'say' in p4); // true

// 7 函数的重载

// 8 函数的定义 及 箭头函数的特点

// 9 基本类型 和 引用类型

// 10 原型链 与 继承

// function A(a) {
//     this.a = a;
//     this.b = 'share';
// }
// A.prototype.say = function(){}
// function B(a, c, d) {
//     A.call(this, a);
//     this.c = c;
//     this.d = d;
// }
// B.prototype = new A();

// const b = new B('a','c','d');
// log('b----->', b);

// apply,call 与 bind

//1改变this  2返回新函数   3整合两次入参   4如果返回的新函数被用作构造函数，this不可改变
Function.prototype.myBind = function(newThis, ...args1) {
    let self = this;

    let fn = function(...args2){
        let _this = new.target.name === 'fn' ? this : newThis;
        
        return self.apply(_this, [...args1,...args2]);
    }
    fn.prototype = Object.create(self.prototype);
    return fn;
}


// 为什么要面向对象编程？
// JS 本身就是面向对象语言,JS 一切皆对象：数字、字符串、数组、函数、正则都是对象，内置 Object、Array、Date 全是面向对象设计
// 批量复用、继承减少冗余、分层解耦















