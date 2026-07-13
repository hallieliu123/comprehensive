const { log } = console;

//1 正则表达式定义的两种方式

const regExp1 = new RegExp(/good/, 'ig');
const regExp2 = /good/ig;

//2 regExp.test('good weather today'); // true | false
// regExp.exec('good weather today'); // null | []

//3 str.replace(//ig, '');
// str.match(/good/ig); // null | []
// str.search(/good/i); // -1 | 下标
// str.split(/good/ig);






//1 *
//2 ?
//3 +
//4 {n}
//5 {n,}
//6 {n,m}
//7 [xyz] [x|y|z] [a-zA-Z0-0]
//8 [^xyz]
//9 \d
//10 \D
//11 \b
//12 \b
//13 \D
//14 \D
//15 .
//16 is(?=all)
//17 is(?!all)
//18 \w
//19 [\s\S]
//20 *,+
//21 ?













