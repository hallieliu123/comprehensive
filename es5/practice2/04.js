
console.log('new Date()--->', new Date());

console.log(new Date('2026-4-30'));

console.log(Date.parse('2026-3-20'));
console.log('Date.now()--->', Date.now());
console.log('new Date().getTime()--->', new Date().getTime());


const d = new Date();
const y = d.getFullYear();
const m = d.getMonth() + 1;
const date = d.getDate();
const h = d.getHours();
const mins = d.getMinutes();
const s = d.getSeconds();
console.log('d--->', `今天是${y}年${m}月${date}日，${h}时${mins}分${s}秒`);



const d1 = new Date('2027-4-29 10:20:30');
// console.log('setFullYear--->', d1.setFullYear(2027));
// d1.setMonth(3);
// d1.setDate(29);
// d1.setHours(10);
// d1.setMinutes(20);
// d1.setSeconds(30);
console.log('d1--->', d1);












