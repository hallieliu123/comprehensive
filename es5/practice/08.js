const {log} = console;

// const regExp1 = new RegExp('review', 'ig');
// const regExp2 = /review/;

// regExp.exec(str);

// const str = 'study good good study, day day up';
// const r1 = /study/ig;

{
  // * 
  // 前面有两个字符时
  // const regExp = /ga*gle/;
  // log(regExp.test('i am ggle')); // true
  // log(regExp.test('i am gagle')); // true
  // log(regExp.test('i am gaagle')); // true
  // log(regExp.test('i am gabcgle')); // false

  // 前面有1个字符时
  // const regExp = /g*gle/;
  // log(regExp.test('i am gle')); // true
	// log(regExp.test('i am abcgle')); // true
	// log(regExp.test('i am gagle')); // true
	// log(regExp.test('i am gggle')); // true
	// log(regExp.test('i am gabcgle'));// true
	// log(regExp.test('i am le'));// false
}
{
  // ? + {n} {n,} {n,m}
  // ^ $ [xyz] [^xyz] 
  // const regExp = /[xyz]/;
  // const regExp1 = /[^xyz]/;
  // log(regExp.test('bxayczb')); // true
  // log(regExp1.test('xz')); // false
  // log(regExp1.test('axz')); // true
  
  // \d: [0-9] \D: [^0-9]
  // \w
  // [\s\S]
  // .
  // const r = /a.h/;
  // log(r.test('abcdh')); // false
  // log(r.test('adh')); // true
  // log(r.exec('abcdh')); // null 
  // log(r.exec('abh')); // ['abh', index: 0, input: 'abh', groups: undefined]

  // + * ?
  // const r1 = /<.+>/;
  // const r2 = /<.+?>/;
  // const str1 = '<h1>hello world<h1>';
  // log(r1.exec(str1));
  // log(r2.exec(str1));
  // const r3 = /quick\s(brown).+?(jumps)/i;
  // const result = r3.exec('The Quick Brown Fox Jumps Over The Lazy Dog');
  // log(result); // ['Quick Brown Fox Jumps', 'Brown', 'Jumps', index: 4, input: 'The Quick Brown Fox Jumps Over The Lazy Dog', groups: undefined]
  // 数组第一项为匹配的字符串部分，第二项及之后都是捕获组至到index
  // x(?=y) x(!?=y)
  // \b
  const str = "ab reallyreally cd really really ef really";
  const str1 = str.replace(/\breally\b/gi,'very');//匹配单词为really
}

{
  //邮政编码规则：6位数字，第一位不能是0
  const r1 = /^[1-9]\d{5}$/;
  //手机号码: 首位是1，第二位是3-9；后面一共9位分别是0-9
  const r2 = /^1[3-9]\d{9}$/;
  //身份证号码规则：18位；首位：1-9；中间是16位的0-9， 末尾是0-9或者X
  const r3 = /^[1-9]\d{16}[0-9Xx]$/;
  //检查邮箱: 如：jzm@126.com;  jzm@126.com.cn
  const r4 = /\w+@(\w+\.)+(com|cn)$/;
  //6~16位字母和数字组合
  const r5 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
}




