const { log } = console;

// 正则表达式
// 1.定义的两种方式
let regExp1 = new RegExp('study','ig');
let regExp2 = /study/ig;

// 2.检测的两种方法
// regExp.test(str); 找到返回true;找不到则返回false;
// regExp.exec(str); 找到返回一个数组,找不到返回null; 如果regExp有g参数,则多次调用每次会返回下一个匹配项数组

{
    let str = 'study good good study';
    let arr = regExp1.exec(str);
    // log(arr);
    // log(typeof arr);
    // log(Array.isArray(arr));
}

// 3.字符串可用正则的函数
// match();
// replace();
// search();
// split(//ig);


// 4.正则表达式中的特殊字符

//1 * 匹配前面表达式0次或多次
{
  // var regExp = /ga*gle/; //限定的规则是：在g和gle中间可以出现任意多个a字符
	// var str="i am ggle";
	// log(regExp.test(str));//true
	// str="i am gagle";
	// log(regExp.test(str));//true
	// str="i am gaagle";
	// log(regExp.test(str));//true
	//  str="i am gabcgle";
  // log(regExp.test(str));//false
    
    // var regExp = /g*gle/; //
	// //自己标注*：*前只有一个字符时，涵盖两个意思:1).可出现0个---多个g,2).可以出现0个---多个其他字符；
	// var str="i am gle";     //true
    // log(regExp.test(str));//true;
	// var str="i am abcgle";
	// log(regExp.test(str));//true;
	// var str="i am gagle";
	// log(regExp.test(str));//true;
	// var str="i am gggle";
	// log(regExp.test(str));//true;
	// var str="i am gabcgle";
	// log(regExp.test(str));//true;
}
//2 ? 匹配前面表达式0次或1次
//3 + 匹配前面表达式1次或多次
//4 {n}匹配前面表达式n次
//5 {n,}匹配前面表达式n次或更多次
//6 {n,m}匹配前面表达式n-m次

//7 ^ 匹配输入开始
//8 $ 匹配输入结束

//9 [xyz]一个字符集，匹配x或y或z,同 x|y|z, []中可以写范围，如[a-z0-9]
//10 [^xyz]反向字符集，匹配任何没有包含在括号中的字符

//11 \d 匹配数字0-9,同[0-9]
//12 \D 匹配非数字字符,同[^0-9]

//13 \b 匹配一个单词的边界 (单词是以空格分割的)
{
    let regExp = /\bh/;//只要字符串有某个单词的开始字符是h就匹配。
	// log(regExp.test("how are you"));//true;
	// log(regExp.test("what are you弄啥里"));//false;
	// log(regExp.test("i am hjon"));//true;
    // log(regExp.test("i am jonh"));//false;
    
   
	var regObj = /h\b/;//只要字符串有某个单词的结束字符是h就匹配。
	// log(regObj.test("how are you"));//false;
	// log(regObj.test("what are you弄啥里"));//false;
	// log(regObj.test("i am hjon"));//false;
	// log(regObj.test("i am jonh"));//true;
	
}
//14 \B 匹配一个单词的非边界 (单词是以空格分割的)
{
    var regObj = /\Bh/;//只要字符串有某个单词的非开始字符中有h就匹配。
	// log(regObj.test("how are you"));//false; 
	// log(regObj.test("what are you弄啥里"));//true;
	// log(regObj.test("i am hjon"));//false;
	// log(regObj.test("i am jonh a"));//true;
}
//15 . 匹配除换行符之外的任何单个字符。
{
    // let regExp = /.a/ig;
    // let str = 'hat cat';
    // log(regExp.test(str));
}
//16 x(?=y) 仅仅当x后面跟着y时匹配x
{
    let str = 'Is thisall there is';
    let regExp = /is(?=all)/;
    log(regExp.test(str)); // thisall
    log(regExp.exec(str));
}
//17 x(?!y) 仅仅当x后面不跟着y时匹配x
{
    let str = 'Is thisall there is';
    let regExp = /is(?!all)/;
    log(regExp.test(str)); // is
    log(regExp.exec(str));
}
//18 \w 匹配字母数字或下滑线,同[0-9a-zA-Z_]


//19 [\s\S]匹配所有。\s 是匹配所有空白符，包括换行，\S 非空白符，不包括换行。
//20 贪婪匹配 *, + 限定符 都是贪婪的，都会尽可能多的匹配文字
//21 非贪婪匹配  *, + 限定符 都是贪婪的，都会尽可能多的匹配文字，在其后面加上 ? 就可以实现非贪婪匹配










