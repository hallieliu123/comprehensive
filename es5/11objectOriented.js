const { log } = console;

// 面向对象编程（OOP object oriented programming）
// 定义：用对象的思想去写代码，就是面向对象编程

// 创建对象
// 1.工厂方式
{
    function createPerson(name,age){
        let p = new Object();
        p.name = name;
        p.age = age;
        p.say = function(){
            log( this.name + ' 是也！');
        }
        return p;
    }
    let p1 = createPerson('Wil','28');
    // p1.say();
    // log( p1 instanceof createPerson); // false，不能判断是不是createPerson的实例
}
// 2.构造函数的方式
{
    function Person(name,age){
        this.name = name;
        this.age = age;
        this.say = function(){
            log( this.name + ' 是也！');
        }
    }
    let p1 = new Person('Wil','28');
    // p1.say();
    // log( p1 instanceof Person); // true，可判断出是Person实例
}
// 3.原型的方式
{
    function Person(){
    }
    Person.prototype.name="Wil";
    Person.prototype.age="20";
    Person.prototype.work=function(str){
        log('doctor');
    };
    let p1 = new Person('Wil','28');
    // p1.work();
    // log( p1 instanceof Person); // true，可判断出是Person实例
}
// 4.组合方式(构造函数和原型的方式)
{
    function Person(name,age){
        this.name = name;
        this.age = age;
    }
    Person.prototype.work=function(str){
        log('doctor');
    };
    let p1 = new Person('Wil','28');
    // p1.work();
    // log( p1 instanceof Person); // true，可判断出是Person实例
}

// 5.class 类
{
    class Person{
        constructor(name,age){
            Object.assign(this,{name,age});
        }
        work(){
            log('doctor');  
        }
    }
}

// 面向对象思想写拖拽
{
    class Dragger{
        constructor(el){
            Object.assign(this,{el});
        }
        drag(){
            this.el.onmousedown = this.onmousedown.bind(this); // 这里说明对bind源码是清楚的
        }
        onmousedown(evt){   
            this.offsetX = evt.offsetX;  
            this.offsetY = evt.offsetY; 
            document.onmousemove = this.onmousemove.bind(this);
            document.onmouseup = this.onmouseup;
        }
        onmousemove(evt){
            let doc = document.documentElement || document.body;
            let top = doc.scrollTop + (evt.clientY-this.offsetY);
            let left = doc.scrollLeft + (evt.clientX-this.offsetX);
            this.el.style.top = top + 'px';
            this.el.style.left = left + 'px';
        }
        onmouseup(){
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }
    let el = document.getElementById('box');
    let d = new Dragger(el);
    d.drag();


    // 函数写法
    const drag = el => {
        el.onmousedown = (evt) => {
            let offsetX = evt.offsetX;
            let offsetY = evt.offsetY;
            document.onmousemove = (evt) =>{
                let doc = document.documentElement || document.body;
                let top = doc.scrollTop + (evt.clientY-offsetY);
                let left = doc.scrollLeft + (evt.clientX-offsetX);
                el.style.top = top + 'px';
                el.style.left = left + 'px';
            }
            document.onmouseup = (evt) => {
                document.onmousemove = null;
                document.onmouseup = null;
            }
        }
    }
    // drag(el);
}

// 6.函数的高级应用
//  1 funcName.caller 属性：返回调用funcName的函数
{
    function test(){
        log( test.caller ); // act函数
    }
    function act(){
        test();
    }
}
// 2 函数的原型属性 prototype

// 3 Object.getPrototypeOf()
// 4 Object.setPrototypeOf(,)
// 5 obj.hasOwnProperty('') obj是否拥有‘’这个实例属性
// 6 ‘name’ in obj obj是否拥有name属性(实例属性或者原型属性)
// 7 delete obj.name 删除实例属性，不能删除原型属性

// 7.函数的重载
// 本意：完成一件事情，由于已知条件不同，做法不同，重载是多态的一种体现。
// 实际是：多个函数函数名相同，参数不同；所以javascript中没有函数的重载
// javascript可以模拟重载：同一个函数中，参数可选；

// 8. 函数定义的方式
//  声明式
//  表达式式
//  构造函数式 
{
    // let fn = new Function("str","log(str+'显示参数')");
    // fn("abc");
}
// 箭头函数式 
// 特点：1.没有this,所以this指向它外部函数的this;并且指向的是函数定义时的this，不是执行时的this;
//      2.没有arguments对象
//      3.不能用作构造函数
//      4.不能用作generator函数

// 9. 基本类型 和 引用类型
//基本类型和引用类型：（程序员创建的对象都是引用类型的）
//基本类型：只在栈区（或叫栈堆）中申请空间，数据就存在那个地方；
//引用类型：同时在栈区（或叫栈堆）和堆区申请空间，在栈区中保存地址，数据存在堆区中；

//引用类型作为函数参数的特点：
//1).节约了内存（因为，实参给形参传递是地址，而不是大量的内容）；
//2).在被调函数里，可以改变主调函数引用类型变量的内容（改变了形参的内容，就是改变实参的内容）；
// function fun1(){ 
// 	var person={
// 		name:"张无忌",
// 		sex:"男",
// 		age:25
// 	}
// 	fun2(person);
// 	alert(person.name);
// }
// function fun2(p1){
// 	alert(p1.name);
// 	p1.name="赵敏";
// }

// 10. 继承
// a 什么是继承 ？
// 继承就是子类拥有父类的属性和方法。

// b 什么是原型链 ? 
// es5的说法：子类的原型对象等于父类的实例，父类的原型对象等于祖父类的实例，这样层层递进，就构成了子类实例的原型链。

// c 使用apply|call组合继承  
{
    function A(a,b){
        this.a = a;
        this.b = b;
    }
    function B(a,b,c,d){
        A.apply(this,[a,b]);
        this.c = c;
        this.d = d;
    }
    let b1 = new B('a','b','c','d');
    log(b1);
}

// d apply(),call() 与 bind()异同  
{
    // 异：原函数调用apply,call后，立即执行，原函数调用bind后，返回一个改变了this指向的新函数
    // 同：都是函数原型上的方法，都挂载在Function.prototype属性上；都是用来改变this指向的
}
// 手写bind源码
{
    // 1.改变this指向  2.返回新函数   3.整合两次入参  4.返回的函数用作构造函数实际调用的是原函数，此时this指向必须是实例
    function test(value){
        log('this.charactor--->',this.charactor)
        log('this--->',this)
    }
    let obj = {charactor:'Simon'};
    // test.bind(obj)();
    // let Fn1 = test.bind(obj);
    // let obj1 = new Fn1();
    // log(obj1);
    Function.prototype.myBind = function(newThis,...list1){
        let self = this;
        let fn = function(...list2){
            let _this = (new.target.name == 'fn') ? this : newThis;
            return self.apply(_this,[...list1,...list2]);
        }
        fn.prototype = Object.create(self.prototype);
        // log(fn.prototype.constructor == self);
        return fn;
    }
    // test.myBind(obj)();
    // let Fn2 = test.myBind(obj);
    // new Fn2();
}






