const { log } = console;

// 数组

{
    // 求 n 的阶乘  5! = 1 x 2 x 3 x 4 x 5; 
    function factorial1( n ){
        let temp = 1;
        for(let i=1;i<=n;i++){
            temp = temp*i;
        }
        return temp;
    }
    function factorial2(n){
        if( n <=1 ) return 1;
        return n*factorial2(n-1); // 5*4*3*2*1
    }
    // log(factorial1(5));
    // log(factorial2(5));
}
{
    // 求一组数的和，平均值
    let arr = [1,2,3,4,5];  // 15
    function sum(arr){
        return arr.reduce((prev,cur,index,arr)=>{
            log('prev,cur,index,arr--->',prev,cur,index,arr);
            return prev + cur;
        },0);
    }
    // log(sum(arr));
    // 平均值
    function average(arr){
        let sum = 0;
        arr.forEach((item,index)=>{
            sum += item;
        })
        let ave = sum/(arr.length);
        return [sum,ave];
    }
    // log( average(arr) );
    
}   
{
    // 求一组数的最大数和最小数
    let scores = [89,100,99,77,59,85,88];
    const { max,min } = Math;
    // log('max----->',max(...scores));
    // log('min----->',min(...scores));
    function getMax(arr){
        let temp = arr[0];
        for(let i=1;i<arr.length;i++){
            if(temp<arr[i]) temp = arr[i];
        }
        return temp;
    }
    // log('getMax--->',getMax(scores));
    function getMin(arr){
        let temp = arr[0];
        for(let i=1;i<arr.length;i++){
            if(temp>arr[i]) temp = arr[i];
        }
        return temp;
    }
    // log('getMin--->',getMin(scores));
}
{
    // 验证是不是回文数组 arr = [89,100,120,150,120,100,89];  arr[1] == arr[arr.length-1-1];
    function isHui(arr){
        let hui = true;
        for(let i=0;i<parseInt(arr.length/2);i++){  
            if(arr[i]!=arr[arr.length-1-i]){ 
                hui = false;
                break;
            }
        }
        return hui;
    }
    let arr = [89,100,120,150,120,100,89]
    let arr1 = [89,100,120,150,1201,100,89]
    // log('isHui--->',isHui(arr));
    // log('isHui--->',isHui(arr1));
}
{
    // 循环右移 k 位 arr = [12,23,34,45,56,67,78,89,100];  // 8 -> 1   7 -> 8   6 -> 7  5 -> 6... 1 -> 2
    // 两种方法： 1.放入新数组   2.在原数组上改: 先移动一位，想移动几位就循环几次
    // 天作孽，犹可违；自作孽，不可活。
    function moveItem( arr,k ){  
        for(let i=0;i<k;i++){   
            let last = arr[arr.length-1];  
            for(let j=arr.length-2;j>=0;j--){
                arr[j+1] = arr[j];
            }
            arr[0] = last;
        }
        return arr;
    }
    let arr = [1,2,3,4,5];
    // log('moveItem--->',moveItem(arr,3)); 
}
{
    // 冒泡排序:输入6个无序的数字，从头到尾依次比较相邻两个数字大小，若大数在前、小数在后，则交换两数位置，依次比较，使全部数据按从小到大排列
    // let arr = [ 8,1,6,3,2,5,9 ];  8,1,6,3,2,5,9
    function mySort(arr){
        // 外层循环用来遍历所有元素  
        // 内层循环用来取值比较
        for(let i=0;i<arr.length;i++){  
            for(let j=0;j<arr.length-i;j++){ 
                if(arr[j]>arr[j+1]){
                    [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                }
            }
        }
        return arr
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
    function insert(num){
        // 找位置
        for(var i=0;i<arr.length;i++){
            if(num <= arr[i]){
                break;
            }
        }
        // 移位置
        for(let j=arr.length;j>=i;j--){  // [1,2,i,4,5,6]  3
            arr[j] = arr[j-1];
        }
        // 赋值
        arr[i] = num;
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
        for(let i=0;i<arr.length;i++){  // 2,4,5,23,112,67
            let temp = i;
            for(let j=i+1;j<arr.length;j++){ // length: 6;  i = 4 -> j = 5
                if(arr[temp]>arr[j]){
                    temp = j;
                }
            }
            [arr[i],arr[temp]] = [arr[temp],arr[i]]; 
        }
        return arr;
    }
    // log('select--->',select(arr));
}
{
    // 折半查找法
    /**用折半查找法在一组排好序(递增有序或递减有序)的值中查找 某个数据。
       折半查找的基本思想: 
            1.首先将待查数据k与排好序(递增有序)的一组数据的 中间位置上的数据进行比较，若相等，则查找成功; 
            2.若k>a[mid]，则待查数据k只可能出现在右半部 a[mid+1...n]中,则应在这个右半部中再进行折半查找; 
            3.若k<a[mid]，则待查数据k只可能出现在左半部 a[1...mid-1]中,则应在这个左半部中再进行折半查找; 
            4.这样通过逐步缩小查找范围，直到找到或找不到该数据k为止
     */
    let  arr=[5,13,19,21,37,56,64,75,80,88,92];  // 80  [1,2,3,4,5]    [1,2,3,4] 
    // 就是一个找下标的过程
    /**
     *   low         mid           high
     *    0           5            10
     *                  low        high
     *                   6          10
     *                        mid
     *                         8
     *                           low  high
     *                             9   10
     *                               mid
     *                                9
     *                                  low
     *                                   10
     */
    function bisearch(num){
        let hasNum = false;
        let low = 0;
        let high = arr.length-1;
        let mid = parseInt((high+low)/2)
        while(high>=low){
            if(num == arr[mid]){
                hasNum = true;
                break;
            }else if(num>arr[mid]){
                low = mid + 1;
                mid = parseInt((low+high)/2);
            }else{
                high = mid - 1;
                mid = parseInt((low+high)/2);
            }
        }
        return hasNum;
    }
    // log('bisearch--->',bisearch(80));
    // log('bisearch--->',bisearch(81));
}
{
   // 反转数字
   var arr2 = [1,2,3,4,5,6,11,12,13,14,15,16];  // [1,2,3,4]  [1,2,3,4,5] 2.5
   function myReverse(arr){
        for(let i=0;i<parseInt(arr.length/2);i++){
            [arr[i],arr[arr.length-i-1]] = [arr[arr.length-i-1],arr[i]]
        }
        return arr;
   }
//    log('myReverse--->',myReverse(arr2));
}
{
    // 随机生成1个 n 位以内的数  12345
    function getRandom(n){
        let ran = parseInt(Math.random()*n);
        log('ran--->',ran);
        let arr = [];
        do{
            let temp = ran%10;  // 5 4 3 2 1
            arr.unshift(temp);
            ran = parseInt(ran/10);// 12345   1234   123   12  1
        }while(ran!=0);

        return arr;
    }
    // log('getRandom-->',getRandom(100000));
}
{
    // 随机取名字
    let arr = ["张三","李四","王二麻子","王英俊","小郭"]; 
    // 0 <= x < 5
    function getName(arr){
        let ran = parseInt(Math.random()*(arr.length));
        return [ran,arr[ran]];
    }
    // log('getName-->',getName(arr));
}

{
    // 数组的常用函数 push(),unshift();pop(),shift();splice(),slice();concat();join();sort();reverse();
    let arr = [0,1,2];
    // push(); 返回数组push后的数组长度;原数组改变 

    // log(arr.push(1,2,3));
    // log('arr--->',arr);

    // unshift();返回数组push后的数组长度;原数组改变 

    // log(arr.unshift(1,2,3));
    // log('arr--->',arr);

    // pop(); 删除最后一项，返回被删除项,原数组改变

    // log(arr.pop());
    // log('arr--->',arr);

    // shift();删除第一项，返回被删除项,原数组改变

    // log(arr.shift());
    // log('arr--->',arr);

    // splice();返回被删除项，原数组改变；

    // log(arr.splice(1,1,10,11));// 参数1: 从第几项开始，入参2:删除几项，  入参3.4.5.:插入的元素
    // log(arr);
   
    // slice(begin,end);第二个参数可选，提取原数组元素返回新数组，原数组不变

    // log(arr.slice(1));
    // log(arr);

    // concat();返回组合后的新数组，原数组不变；[...arr,...arr1,...arr2]

    // let arr1 = [4,5,6];
    // let arr2 = [7,8,9];
    // log(arr.concat(arr1,arr2));
    // log(arr);
    // log(arr1);
    // log(arr2);

    // join('');返回字符串

    // log(arr.join('*'));
    // log(arr);

    // sort(compare);返回排序后的数组,原数组改变
    let arr1=[123,23,33,4,8,51];
    // log(arr1.sort((a,b)=>a-b));
    // log(arr1);
    // 模拟sort函数; 
    function mySort(arr,compare){
        for(let i=0;i<arr.length-1;i++){ // 实际只剩一个数的时候就不用比了
             for(let j=0;j<arr.length-i-1;j++){  
                if(compare(arr[j],arr[j+1])>0){
                    [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                }
             }
        }
        return arr;
    }
    const compare = (a,b)=>a-b;
    // log(mySort(arr1,compare));
    // log(mySort([8,1,6,3,2,5,9],compare));

    // reverse();原数组改变，返回原数组；
}
{
    // 数组去重 [1,1,9,4,6,2,9,3]
    let arr = [2,4,5,23,4,4,4,112,5,290,4,5,23,2,2,2]; // 16
    // log([...new Set(arr)]);
    // log(arr);
    function removeRepeat1(arr){
        for(let i=0;i<arr.length;i++){
            for(let j=i+1;j<arr.length;j++){ // [2,4,5,23,4,4,4,112,5,290,4,5,23,2,2,2]  // 4 4
                if(arr[i]==arr[j]){
                    arr.splice(j,1);
                    j--; // 删除一个值要这样做，才能保证能与每个值做对比
                }
            }
        }
        return arr;
    }
    // log('removeRepeat1--->',removeRepeat1(arr));
}

{
    // for, for..in,for..of --> break,continue
    // reduce,map,forEach,some,every,filter(返回符合条件的一个新数组);
    let arr = ['a','b','c','d','e'];
    // for(let key in arr){
    //     if(key=='1'){
    //         continue;
    //     }
    //     log(arr[key]);
    // }
    // for(let key of arr.keys()){
    //     if(key=='1'){
    //         continue;
    //     }
    //     log(arr[key]);
    // }
    // for(let item of arr){
    //     if(item=='b'){
    //         continue;
    //     }
    //     log(item);
    // }
    // arr.reduce((prev,cur,index,arr)=>{
    //     return {};
    // },{});
    let a1 = arr.some(item=>item=='b');
    // log(a1);
    let a2 = arr.every(item=>item=='b');
    // log(a2);
    let a3 = arr.filter(item=>item=='c');
    // log(a3);
}








































