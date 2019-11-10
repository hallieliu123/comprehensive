const { log } = console;

// 字符串

// unicode码：unicode码：把世界上使用计算机的国家和地区的文字全部收录在一起，统一进行编码；叫作万国码，统一编码。把ASCII中的字符，还是采用原来编码值；
// A : 65   a : 97   
// 1kb = 1024B
// 1B(byte) = 8bit (8bit就是8个二进制位)
// 1B就是一个字节，所以一个字节用8个二进制位表示就可以表示2的8次方即256个数。

{
    let str = 'abc';
    //1. str.length;      // 返回字符串的长度  
    //2. str.charAt( index );  // 返回 index 上的字符  
    //3. str.charCodeAt( index );  // 返回  index 上的unicode码   
    //4. String.fromCharCode(65);  // 字符串静态属性，返回编码对应的字符
    //5. str.indexOf();  // 找到返回下标,找不到返回 -1
    //6. str.lastIndexOf(); // 找到返回下标,找不到返回 -1
    //7. str.search(); // 返回找到的第一个值的下标，可用正则表达式 //i忽略大小写查找，g无效。找不到返回-1 
    //8. str.match(//ig); // 返回匹配到的数组,元素为所有匹配的值
    //9. str.replace(//ig,'')  // 返回替换后的新数组,原数组不变
    //10. str.replace('to replace','replacement')  // 返回替换后的新数组,原数组不变  
    //11. '+'号运算符：1. 'abc'+1+2   2.  1+2+'abc'
    //12. str.substring(start,end) 第二个参数【截止到下标-1的地方,可选】,返回截取的新字符串，原字符串不变
    //13. str.split(''); // 返回根据参数拆分的数组
    //14. str.toLowerCase(); // 返回新字符串，原字符串不变
    //15. str.toUpperCase(); // 返回新字符串，原字符串不变
    //16. str.trim(); // 返回去除首尾所有空格的新字符串，原字符串不变

    // 扩展：17.offsetParent 
}
{   // 18 
    //数字类型的英文标识：number;对应强制类型转换函数：Number();
    //字符串类型的英文标识：string；对应强制类型转换函数：String();
    //布尔类型的英文标识：boolean；对应强制类型转换函数：Boolean();


    //parseInt():强制类型转换；
    //转换成功：从开始读取，如果开始有数字，读到非数字后，就不再读取，把数字部分（第一个非数字之前的内容），进行转换。
    //转换失败：如果第一个就不是数字，则转换失败。

    //Number():强制类型转换；
    //转换成功：从头到尾全部需要检查，如果都是数字，则可以成功转换。
    //转换失败：从头到尾全部需要检查，一旦有一个是非数字，就会转换失败。

    // 19 包装对象
    // 什么是包装对象 ？ 
    //  --> String Number Boolean 都有自己的包装对象。
    //  -->像 str.substring(),charAt()等方法全是在String包装对象上的。使用的时候，包装对象是继承的String.prototype上的这些方法。
    // 包装对象的使用 ？
    {
        let str = 'abc';
        str.charAt(0); // 这里会自动创建一个包装对象，使用完之后包装对象即刻消失。

        let str1 = 'efg';
        str1.number = 10;  // 这里会自动创建一个包装对象，使用完之后包装对象即刻消失。
        log(st1.number) // undefined   因为上一步用到的包装对象已经消失了，这里是重新创建的新包装对象，新包装对象上没有number属性
        // 所以要给包装对象添加方法是这样添加,添加的String构造函数的原型上
        String.prototype.getLastVal = function(){
            // ...
        }
    }



	// var str = "123ab";
	// var num1 = parseInt(str);
	// console.log(typeof(num1));  // number
	// console.log(num1);  // 123
	
	// var num2 = Number(str);
	// console.log(typeof(num2)); // number
	// console.log(num2);  // NaN
    
    // var str = "123.45.67.ab";
	// var num1 = parseFloat(str);
	// console.log(typeof(num1)); // number
	// console.log(num1);  // 123.45
	
	// var num2 = Number(str);
	// console.log(typeof(num2)); // number
	// console.log(num2);  // NaN  
}
{
    let str = '  aAbca  ';
    // log(str.charAt(0)); // a
    // log(str.charAt(1)); // A
    // log(str.charCodeAt(0)); // 97
    // log(str.charCodeAt(1)); // 65
    // log(String.fromCharCode(65))
    // log(str.lastIndexOf('a'));
    // log(str.search(/a/i)); 
    // log(str.match(/a/ig));
    // log(str.replace(/a/ig,'M'));
    // log(str.replace('a','M'));
    // log('abc'+1+2);
    // log(1+2+'abc');
    // log(str.substring(1,3));
    // log(str.split(''));
    // log(str.toLowerCase());
    // log(str.toUpperCase());
    // log(str);
    // log('('+str.trim()+')');
    // log('('+str+')');
}
{
    
/*
	var str ;//在栈中申请空间
	
	new String("hello");
	//定义了一个字符串变量，这是引用类型。对象类型。申请了空间（两块空间）。//
	//new运算符的意思就是，在堆区中申请内存空间
	*/
	// var str = new String("hello");  
	//在栈区中申请了内存空间，命名为str。
	//在堆区中申请内存空间（放入hello）。并且把堆区内存空间的首地址，赋给了。str；
	
	// var num = 123;
    // var str = String(num);//强制类型转换；只会申请栈区内存空间；
    
    // var str;
	// str = String(123)+23;
	// console.log(str); 
}
{  
    // == 会进行类型转换   === 不会进行类型转换
    let str1 = '123';
    let str2 = new String('123');
    let str3 = String('123');
    // log(str1 == str2 ); // true
    // log(str1 === str2 ); // false
    // log(str1 == str3 ); // true
    // log(str2 == str3 ); // true
    // log(str2 === str3 ); // false
}
{
    // 模拟trim();
    class MyString extends String{
        myTrim(){
            let str = this.toString(); // this 是对象； 对于原生怎样实现自动调用转换的就不知道了
            // 找开始位置
            for(var i=0;i<str.length;i++){
                if(str[i]!=' '){
                    break;
                }
            }
            // 找结束位置
            for(var j=str.length-1;j>=0;j--){
                if(str[j]!=' '){
                    break;
                }
            }
            // 截取 并 返回
            return str.substring(i,j+1);
        }
    }
    let str1 = new MyString(' abc efg  ');
    // log('('+str1.myTrim()+')');
    // log('('+str+')');
    // log(str.toUpperCase());
}
{
    let el = document.getElementById('me');
    // log(el.offsetParent.id); // 返回最近的有定位的父/祖 元素，没有定位，返回 body
}
{
    // 图片验证码原型  
    let arr=['1','2','3','4','5','7','8','9','0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o'];
    function selectNum(){
        let arrRan = [];
        for(let i=0;i<4;i++){
            let ran = parseInt(Math.random()*(arr.length),10);
            arrRan.push(arr[ran]);
        }
        return arrRan;
    }
    // log(selectNum());
}


























