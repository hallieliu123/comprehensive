
{
    // let str = '  aAbca  ';
    // console.log('length-->', str.length);
    // console.log('charAt-->', str.charAt(3));
    // console.log('charCodeAt-->', str.charCodeAt(3));
    // console.log('String.fromCharCode-->', String.fromCharCode(97));

    // console.log('String.search-->', str.search('A')); // 65
    // console.log('String.search-->', str.search('B')); // -1
    // console.log('String.search-->', str.search(/B/i));

    // console.log('match-->', str.match('a'));
    // console.log('match-->', str.match(/a/ig));
    // console.log('match-->', str.match('z')); // null

    // console.log('indexOf-->', str.indexOf('a'));

    // console.log('lastIndexOf-->', str.lastIndexOf('a'));

    // console.log('replace-->', str.replace('a', '$'), str);
    // console.log('replace-->', str.replace(/a/ig, '$'), str);


    // console.log('substring-->', str.substring(5,6), str);

    // console.log('split-->', str.split(''), str);

    // console.log('toLowerCase-->', str.toLowerCase(), str);
    // console.log('toUpperCase-->', str.toUpperCase(), str);

    // console.log('trim-->', `(${str.trim()})`, `(${str})`);

}
{
    // string -> String()
    // number -> Number()
    // boolean -> Boolean()

    // parseIn();
    // Number();
    // typeof NaN ---> number类型

    //包装对象
    // str.substring(),str.split(),str.charAt();

    let str1 = 'def';
    str1.charAt(0);

    let str = 'abc';
    str.number = 123;
    // console.log('str.number-->', str.number); // undefined


    String.prototype.getValue = ()=>{
        return '123';
    }
    // console.log('str.getValue()',str.getValue());

}

{
    // let str;
    // new String('hello world!'); 

    let str = new String('hello world');
    //1.
    //2.

    // let num = 123;
    // let str = string(num);


    // ==, ===

    let str1 = '123';
    let str2 = new String(123);
    let str3 = String(123);
    // console.log('str1==str2-->', str1==str2); // true
    // console.log('str1===str2-->', str1===str2);//false
    // console.log('str3==str2-->', str3==str2); // true
    // console.log('str3===str2-->', str3===str2); //false
    // console.log('str1==str3-->', str1==str3); // true
    // console.log('str1===str3-->', str1===str3);// true
}
{
    // 模拟trim();
    class MyString extends String {
        myTrim(){
            let str = this.toString(); // 不明白为什么要有这一步 ？？？
            // 首 - 下标查找
            for(var i=0;i<str.length;i++){
                if(str[i]!=' '){
                    break;
                }
            }
            // 尾 - 下标查找
            for(var j=str.length-1;j>=0;j--){
                if(str[j]!=' '){
                    break;
                }
            }
            return str.substring(i, j+1);
        }
    }
}

{
    // offsetParent
    const el = document.getElementById('me');
    // console.log('el.offsetParent.id---->', el.offsetParent.id);
}
{
    // 图片验证码原型  
    let arr=['1','2','3','4','5','7','8','9','0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o'];
    // 0 < x < 1
    // 0 < x < 10
    function selectNum(len, arr){
        let ranCodes = [];
        for(let i=1;i<=len;i++){
            // define the range that can be selected
            let code = parseInt(Math.random()*arr.length)
            // loop in required times to get the code
            ranCodes.push(arr[code]);
        }
        // return the code
        return ranCodes;
    }
    // console.log('selectNum---->', selectNum(4, arr));
}

{
  // 17任意给定的一串字符，统计字符串里面的大写字母和小写字母的个数
  function getCount(str) {
      let lowerCaseCount = 0;
      let upperCaseCount = 0;
      for(let i=0;i<str.length;i++){
        if(str[i].charCodeAt(0)>=65 && str[i].charCodeAt(0)<=90){
            upperCaseCount++;
        }
        if(str[i].charCodeAt(0)>=97 && str[i].charCodeAt(0)<=122){
            lowerCaseCount++;
        }
      }
      return [lowerCaseCount, upperCaseCount];
  }
}

{
  // aaaabbbbbbbccdaaaaa 字符串的压缩
  function rar(str) {
    let count = 1;
    let strNew = '';
    let temp = str[0];
    for(let i=1;i<str.length;i++){
        if(temp === str[i]){
            count++;
        } else {
            strNew = strNew + temp + count;
            count = 1;
            temp = str[i];
        }
    }
    strNew = strNew + temp + count;
    return strNew;
  }

  // a4b7c2d1a5f5t3 字符串的解压缩
  function unrar1(str) {
    let strNew = '';
    for(let i=0;i<str.length;i=i+2){
        let temp = str.charAt(i);
        let count = str.charAt(i+1);
        for(let j=1;j<=parseInt(count);j++){
            strNew += temp;
        }
    }
    return strNew;
  }

  // a14b7c2d1a5f5t3 字符串的解压缩
  function unrar2(str) {
    let temp = '';
    let count = 0;
    let strNew = '';
    for(let i=0;i<=str.length;i++){
        if(isNaN(str[i])){
            for(let j=1;j<=parseInt(count);j++){
                strNew += temp;
            }
            temp = str[i];
            count = 0;
        } else {
            count = count + str[i]; 
        }
    }
    return strNew;
  }
}












