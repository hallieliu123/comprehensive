
// 作用域, 函数 this, 垃圾回收机制, 对象属性类型

{
  // 工厂的方式
  function createPerson(name, age) {
    const obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.say = function() {
      console.log('say-->');
    }
    return obj;
  }
  const obj = createPerson('Sheldon', 12);
  // console.log(obj instanceof createPerson); // false
}
{
  // 构造函数的方式
  function Person(name, age) {
    this.name = name;
    this.age = age;
    this.say = function() {
      console.log('say-->');
    }
  }
  const obj = new Person('Sheldon', 12);
  // console.log(obj instanceof Person);// true
}
{
  // 原型的方式
  function Person() {

  }
  Person.prototype.name = 'Sheldon';
  Person.prototype.age = 12;
  Person.prototype.say = function() {
    console.log('say--->');
  }
  const obj = new Person();
  // console.log(obj instanceof Person); // true
  for(let key in obj) {
    // console.log('key-->',key); // name age say
  }
}
{
  // 构造函数和原型结合的方式
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  Person.prototype.say = function() {
    console.log('say--->');
  }
  const obj = new Person('amy','12');
  // console.log(obj instanceof Person); // true
  for(let key in obj) {
    // console.log('key-->',key); // name age say
  }
}
{
  // 类
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    say() {
      console.log('say--->');
    }
  }
  const p = new Person('amy', '12');
  // console.log(p instanceof Person); // true
  for(let key in p) {
    // console.log('key-->',key); // name age
  }
}
{
  function drag(el) {
    el.onmousedown = (evt) => {
      // 记录鼠标相对事件源的位置
      const offsetX = evt.offsetX;
      const offsetY = evt.offsetY;
      document.onmousemove = (evt) => {
        // 计算事件源跟随鼠标的位置，并设置
        const doc = document.documentElement || document.body;
        const top = doc.scrollTop + evt.clientY - offsetY;
        const left = doc.scrollLeft + evt.clientX - offsetX;
        el.style.top = top + 'px';
        el.style.left = left + 'px';
      }
      // 鼠标抬起，清空mousemove事件
      el.onmouseup = () => {
        document.onmousemove = null;
      }
    }
  }
  const el = document.querySelector('.box');
  // drag(el);
  class Dragger {
    constructor(el) {
      Object.assign(this, {el});
    }
    drag() {
      this.el.onmousedown = this.onmousedown.bind(this);
    }
    onmousedown(evt) {
      // 记录鼠标相对事件源的位置
      this.offsetX = evt.offsetX;
      this.offsetY = evt.offsetY;
      document.onmousemove = this.onmousemove.bind(this);
      this.el.onmouseup = this.onmouseup;
    }
    onmousemove(evt) {
      // 计算事件源跟随鼠标的位置，并设置
      const doc = document.documentElement || document.body;
      const top = doc.scrollTop + evt.clientY - this.offsetY;
      const left = doc.scrollLeft + evt.clientX - this.offsetX;
      this.el.style.top = top + 'px';
      this.el.style.left = left + 'px';
    }
    onmouseup() {
      document.onmousemove = null;
    }
  }
  const d = new Dragger(el);
  // d.drag();
}
{
  // 构造函数和原型结合的方式
  function Person1(name, age) {
    this.name = name;
    this.age = age;
  }
  Person1.prototype.say = function() {
    console.log('say--->');
  }
  // 类
  class Person2 {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    say() {
      console.log('say--->');
    }
  }
  const obj1 = new Person1('sheldon','12');
  const obj2 = new Person2('amy', '12');
  // console.log(Person1.prototype.isPrototypeOf(obj1)); // true
  // console.log(Person2.prototype.isPrototypeOf(obj2)); // true
  // console.log(Object.getPrototypeOf(obj1)); // 返回原型对象
  // console.log(Object.getPrototypeOf(obj2)); // 返回原型对象
  // console.log(obj1.hasOwnProperty('name')); // true
  // console.log(obj1.hasOwnProperty('say')); // false

  // console.log('name' in obj1); // true
  // console.log('say' in obj1); // true

  // delete obj1.name

  function test1() {
    console.log(test1.caller); // 调用这个函数的函数
    console.log(typeof test1.caller); // Funciton
  }
  function test() {
    test1();
  }
  // test();
}
{
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  function Teacher(name, age, subject) {
    Person.call(this, name, age);
    this.subject = subject;
  }
  Teacher.prototype.say = function(){
    console.log('say--->');
  }
  const o = new Teacher('amy', 12, 'science');
  console.log(o);
}
