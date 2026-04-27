const { log } = console;

// 数组

{
    // 求 n 的阶乘  5! = 1 x 2 x 3 x 4 x 5; 
    function factorial1( n ){
        let result = 1;
        for(let i=1;i<=n;i++){
            result *= i;
        }
        return result;
    }
    function factorial2(n){
        if(n===1) return 1;
        return n*factorial2(n-1); 
    }
    // log('求 n 的阶乘-->',factorial1(5));
    // log('求 n 的阶乘-->',factorial2(5));
}
{
    // 求一组数的和，平均值
    let arr = [1,2,3,4,5];  // 15
    function sum(arr){
        return arr.reduce((prev,cur,index,arr)=>{
            prev += cur;
            return prev;
        }, 0);
    }
    // log('求一组数的和-->', sum(arr));
    // 平均值
    function average(arr){
        let sum = 0;
        for(let item of arr){
            sum += parseInt(item);
        }
        let ave = sum/(arr.length)
        return ave;
    }
    // log('求一组数的平均值-->', average(arr) );
}   
{
    // 求一组数的最大数和最小数
    let scores = [89,100,99,77,59,85,88];
    // console.log('最大数-->',Math.max(...scores));    
    // console.log('最小数-->',Math.min(...scores));    
    function getMin(arr){
        let min = arr[0];
        for(let i=1;i<arr.length;i++){
            if(min>arr[i]){
                min = arr[i];
            }
        }
        return min;
    }
    // log('getMax--->',getMax(scores));
    function getMax(arr){
       let max = arr[0];
       for(let i=1;i<arr.length;i++){
            if(max<arr[i]){
                max = arr[i];
            }
       }
       return max;
    }
    // log('getMin--->',getMin(scores));
}
{
    // 验证是不是回文数组 arr = [89,100,120,150,120,100,89];  arr[1] == arr[arr.length-1-1];
    function isHui(arr){
        let len = parseInt(arr.length/2)-1; // length to be looped
        let Hui = true;
        for(let i=0;i<=len;i++){
            if(arr[i] !== arr[arr.length-1-i]){
                Hui = false;
                break;
            }
        }
        return Hui;
    }
    let arr = [89,100,120,150,120,100,89]
    let arr1 = [89,100,120,150,1201,100,89]
    // log('isHui--->',isHui(arr));
    // log('isHui--->',isHui(arr1));
}
{
    // 循环右移 k 位 arr = [12,23,34,45,56,67,78,89,100];  // 8 -> 1   7 -> 8   6 -> 7  5 -> 6... 1 -> 2
    // 两种方法： 1.放入新数组   2.在原数组上改: 先移动一位，想移动几位就循环几次
    // 天作孽，犹可违；自作孽，不可活.
    function moveItem( arr,k ){  
        for(let i=1;i<=k;i++){
            let temp = arr[arr.length-1];
            for(let j=arr.length-1;j>0;j--){
                arr[j] = arr[j-1];
            }
            arr[0] = temp;
        }
        return arr;
    }
    let arr = [1,2,3,4,5];
    // log('循环右移 k 位--->',moveItem(arr,3));
}
{
    // 冒泡排序:输入6个无序的数字，从头到尾依次比较相邻两个数字大小，若大数在前、小数在后，则交换两数位置，依次比较，使全部数据按从小到大排列
    // let arr = [ 8,1,6,3,2,5,9 ];  8,1,6,3,2,5,9
    function mySort(arr){
       for(let i=0;i<arr.length;i++){
            for(let j=0;j<arr.length-i-1;j++){
                if(arr[j]>arr[j+1]){
                    [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                }
            }
       }
       return arr;
    }
    // log('mySort---->',mySort([8,1,6,3,2,5,9]));

}

{
    // 插入排序  var arr = [2,4,5,23,67,112,250,290, ];  num = 25;
    // 1.找位置
    // 2.移位置
    // 3.赋值插数
    // let arr = [2,4,5,23,67,112,250,290];
    let arr = [1,2,4,5,6];
    function insert(num, arrNew){ // 必须是有序递增或者递减数列
        const arr = JSON.parse(JSON.stringify(arrNew));
       //找位置
        let temp;
        for(let i=0;i<arr.length;i++) {
            if(num<arr[i]){
                temp = i;
                break;
            }
        }
        if(temp === undefined) {
            temp = arr.length;
        }
       //移位置
        for(let j=arr.length;j>temp;j--){
            arr[j] = arr[j-1];
        }
       //赋值插数
        arr[temp] = num;
        //返回数组
        return arr;
    }
    // log('插入排序--->',insert(25));
    // log('插入排序--->',insert(3));
}

{
    // 选择排序法:通过比较首先选出最小的数放在第一个位置上，然后在其余的数中选出次小数放在第二个位置上,依此类推,直到所有的数成为有序序列。
    // 外层循环遍历所有元素
    // 内层循环做比较
    let arr = [112,23,4,5,2,67];
    function select(arr){
        for(let i=0;i<arr.length;i++){
            let temp = i;
            for(let j=i;j<arr.length;j++){
                if(arr[temp]>arr[j]){
                    temp = j;
                }
            }
            [arr[i], arr[temp]] = [arr[temp], arr[i]];
        }
        return arr;
    }
    // log('select--->',select(arr));
}
{
    // 折半查找法
    // let  arr=[5,13,19,21,37,56,64,75,80,88,92]; // [1,2,3,4]
    function search(num){
        let low = 0;
        let high = arr.length - 1;
        let mid = parseInt((low + high)/2);
        let isIncluded = false;
        while(high>=low){
            if(num === arr[mid]){
                isIncluded = true;
                break;
            }else if(num>arr[mid]){
                low = mid + 1;
                mid = parseInt((low + high)/2);
            }else{
                high = mid - 1;
                mid = parseInt((low + high)/2);
            }
        }
        return isIncluded;
    }
}
{
    // 反转数字
   let arr2 = [1,2,3,4,5,6,11,12,13,14,15,16];  // [1,2,3,4]  [1,2,3,4,5] 2.5
   function reverse(arr){
        for(let i=0;i<parseInt(arr.length/2);i++){
            [arr[i], arr[arr.length-1-i]] = [arr[arr.length-1-i], arr[i]];
        }
        return arr;
   }
}
{
    // 随机生成1个 n 位以内的数  12345, 并将每位数放入数组
    // 0 < x < 1
    function getRanNum(n){
        let ran = parseInt(Math.random()*Math.pow(10, n)); // 123424
        let temp = [];
        do{
            let item = parseInt(ran%10);
            temp.push(item);
            ran = parseInt(ran/10);
        }while(ran!==0);
        return temp;
    }
}
{
    // 随机取名字
    let arr = ["张三","李四","王二麻子","王英俊","小郭"];
    // 0 <= x < 5
    function getName(arr){
        let ranIndex = parseInt(Math.random()*arr.length);
        return arr[ranIndex]
    }
    // log('getName-->',getName(arr));
}
{
    /*
    let arr = [0,1,2];
    
    console.log('push-->', arr.push(-3));
    console.log('arr-->', arr);

    let arr1 = [0,1,2];
    console.log('unshift-->',arr1.unshift(-3));
    console.log('arr1-->', arr1);

    let arr2 = [0,1,2];
    console.log('pop-->',arr2.pop());
    console.log('arr2-->', arr2);

    let arr3 = [0,1,2];
    console.log('shift-->',arr3.shift());
    console.log('arr3-->', arr3);

    let arr4 = [0,1,2];
    console.log('splice-->',arr4.splice(1,2,6,7,8));
    console.log('arr4-->', arr4);

    let arr5 = [0,9,2,3,4,6,1];
    console.log('slice-->',arr5.slice(1, 6));
    console.log('arr5-->', arr5);

    let arr6 = [0,9,2,3,4,6,1];
    console.log('sort-->',arr6.sort((a,b)=>a-b));
    console.log('arr6-->', arr6);

    let arr7 = [0,9,2,3,4,6,1];
    console.log('reverse-->',arr7.reverse());
    console.log('arr7-->', arr7);

    let arr8 = [0,9,2,3,4,6,1];
    console.log('concat-->',arr8.concat([10,11,12,13]));
    console.log('arr8-->', arr8);

    let arr9 = [0,9,2,3,4,6,1];
    console.log('join-->',arr9.join('$'));
    console.log('arr9-->', arr9);
    */
}

{
    // sort(compare);返回排序后的数组,原数组改变
    let arr1=[123,23,33,4,8,51];
    // log(arr1.sort((a,b)=>a-b));
    // 模拟sort函数;
    function mySort(arr,compare){
        for(let i=0;i<arr.length;i++){
            for(let j=0;j<arr.length-1-i;j++){
                if(compare(arr[j], arr[j+1])>0){
                    [arr[j], arr[j+1]] = [arr[j+1],arr[j]];
                }
            }
        }
        return arr;
    }
    // console.log('mySort-->',mySort(arr1,(a,b)=>a-b));
}
{
    // 数组去重 [1,1,9,4,6,2,9,3]
    let arr = [2,4,5,23,4,4,4,112,5,290,4,5,23,2,2,2]; // 16
    // log([...new Set(arr)]);
    // log(arr);
    function removeRepeated(arr){
        for(let i=0;i<arr.length;i++){
            for(let j=i+1;j<arr.length;j++){
                if(arr[i]===arr[j]){
                    arr.splice(j,1);
                    j--;
                }
            }
        }
        return arr;
    }
    console.log('removeRepeated--->',removeRepeated(arr));
}
{
    // for, for...in,for...of --> break,continue
    // reduce,map,foreEach,filter,some,every
    let obj = {'a': 1, 'b': 2, 'c': 3};
    let arr = ['a','b','c','d','e'];
    // for(let key in obj){
    //     console.log('obj key,value-->', key,obj[key]);
    // }
    // for(let key in arr){
    //     console.log('arr key,value-->', key,arr[key]);
    // }
    // for(let item of arr){
    //     console.log('arr item-->', item);
    // }
    // for(let key of arr.keys()){
    //     console.log('arr.keys()-->', key);
    // }
    // for(let key of Object.keys(obj)){
    //     console.log('obj.keys()-->', key);
    // }

    function testReduce(arr){
        return arr.reduce((prev, cur, index, arr)=>{
            prev.push(cur + index);
            return prev;
        },[]);
    }
    // console.log('testReduce---->', testReduce(arr));
    function testMap(arr){
        return arr.map((item, index)=>{
            return item+index;
        });
    }
    // console.log('testMap---->', testMap(arr));
    function testFilter(arr){
        return arr.filter((item, index)=>item==='b');
    }
    // console.log('testFilter---->', testFilter(arr));

    function testEvery(arr){
        return arr.every((item, index)=>item==='b');
    }
    console.log('testEvery---->', testEvery(arr));
    function testSome(arr){
        return arr.some((item, index)=>item==='b');
    }
    console.log('testSome---->', testSome(arr));
}











