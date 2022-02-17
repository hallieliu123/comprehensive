{
  /**
   * let str = 'abc';
   * str.charAt(index) = str[index];
   * str.charCodeAt(index) 返回下标对应的unicode码
   * String.fromCharCode(65); 返回unicode码对应的字符
   * str.substring(startIndex, endIndex); 截取字符串(只到endIndex-1),原字符串不变
   * str.substr(startIndex, length); 
   * str.indexOf('a'); 
   * str.lastIndexOf('a');
   * str.search('a'); 返回第一个匹配的下标，找不到返回-1，正则 g 无效
   * str.match(//ig); 返回匹配到的数组
   * str.replace(//ig, 'newThings');
   * str.split(''); 返回以‘’标识符拆分的数组
   * str.toLowerCase();
   * str.toUpperCase();
   * str.trim(); 删除首尾空格
   * 
   * Boolean(),String(),Number()
   * Number() VS parseInt()/parseFloat
   * let str = '123abc'
   * let str1 = 'abc123'
   * Number(str) // NaN
   * parseInt(str) // 123
   * parseFloat(str) // 123
   * Number(str1) // NaN
   * parseInt(str1) // NaN
   * parseFloat(str1) // NaN
   * 1 + 2 + 'abc' // '3abc'
   * 'abc' + 1 + 2 // 'abc12'
   * 
   */
}
{
  // 模拟trim();
  class MyString extends String {
    myTrim(){
      let str = this.toString();
      // 找要截取的开始位置
      for(var i=0;i<str.length;i++) {
        if(str[i] != ' ') {
          break;
        }
      }
      // 找要截取的结束位置
      for(var j=str.length-1;j>=0;j--) {
        if(str[j]!=' '){
          break;
        }
      }
      // 截取,返回
      return str.substring(i, j+1);
    }
  }
  let str1 = new MyString('  abc  ');
  str1.myTrim();
}
{
  // el.offsetParent 返回有定位的父或祖元素，没有则返回body
}
{
  // 17任意给定的一串字符，统计字符串里面的大写字母和小写字母的个数
  function getCount(str) {
      let lowerCaseCount = 0;
      let upperCaseCount = 0;
      for(let i=0;i<str.length;i++) {
          if(str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122) {
              lowerCaseCount++;
          }
          if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90) {
              upperCaseCount++;
          }
      }
      return [lowerCaseCount, upperCaseCount];
  }
}
{
  // aaaabbbbbbbccdaaaaa 字符串的压缩
  function rar(str) {
    let count = 1;
    let rarStr = '';
    let c = str.charAt(0);
    for(let i=1;i<str.length;i++) {
      if(str.charAt(i) === c) {
        count++;
      } else {
        rarStr = rarStr + c + count;
        count = 1;
        c = str.charAt(i);
      }
    }
    rarStr = rarStr + c + count;
    return rarStr;
  }
  // a4b7c2d1a5f5t3 字符串的解压缩
  function unrar1(str) {
    let unrarStr = '';
    for(let i=0;i<str.length-1;i=i+2) {
      let count = str.charAt(i + 1);
      for(let j=1;j<=count;j++) {
        unrarStr += str.charAt(i);
      }
    }
    return unrarStr;
  }
  // a14b7c2d1a5f5t3 字符串的解压缩
  function unrar2(str) {
    let unrarStr = '';
    let c = '';
    let count = '';
    for(let i=0;i<str.length;i++) {
      if(!isNaN(str[i])) {
        count = count + str[i];
      } else {
        for(let j=1;j<=count;j++) {
          unrarStr = unrarStr + c;
        }
        c = str[i];
        count = '';
      }
    }
    return unrarStr;
  }
}
