{
  //push,unshift,pop,shift,splice,slice,sort,reverse,concat,join
  let arr = [1,2,3];
  // arr.push(4,5,6);
  // arr.unshift(0);
  // arr.pop();
  // arr.shift();
  // arr.splice(1,0,9,9,9); // []
  // arr.sort((a,b)=>(a-b));
  // arr.reverse();

  // arr.slice('startIndex', 'endIndexNotInclude');
  // arr.concat([]);
  // arr.join(';');
  function compare(a, b) {
    return a - b;
  }
  function mySort(arr, compare) {//[78,12,49,28,11]
    for(let i=0;i<arr.length;i++) {
      for(let j=0;j<arr.length-1-i;j++) {//[12,28,11,49,78]
        if(compare(arr[j], arr[j+1]) > 0){
          [arr[j+1], arr[j]] = [arr[j], arr[j+1]]; 
        }
      }
    }
    return arr;
  }
}
{
  // for,for...in,for...of
  // map,forEach,reduce,find,findIndex,filter,some,every,includes
  let arr = ['a','b','c','d','e'];
  let obj = {'a': 1, 'b': 2, 'c': 3};
  for(let key in obj){
    console.log(obj[key]);
  }
  for(let index in arr) {
    console.log(arr[index]);
  }
  for(let item of [{a: 1, b:2}, {a:3, b:4}]) {
    console.log(item);
  }
  let objNew = arr.reduce((prev, cur, index, arr)=>{
    prev[cur] = index;
    return prev;
  }, {}); // {a: 0, b: 1, c: 2, d: 3, e: 4}
  arr.find((item, index)=>item==='c'); // 找到返回该项，找不到返回undefined
  arr.findIndex((item, index)=>item==='c'); // 找到返回下标，找不到返回-1
  [{a: 1, b:2}, {a:3, b:4}].filter((item,index)=>item.b>1); // 返回满足条件的各项数组 [{a: 1, b:2}, {a:3, b:4}]
  [{a: 1, b:2}, {a:3, b:4}].some((item,index)=>item.b>1); //有一项满足即返回true
  [{a: 1, b:2}, {a:3, b:4}].every((item, index)=>item.a>1); //每一项满足才返回true
  arr.includes('c');
}
{
  // 数组去重 [1,1,9,4,6,2,9,3]
  function removeDuplicate1(arr) {
    for(let i=0;i<arr.length;i++) {
      for(let j=i+1;j<arr.length;j++) {
        if(arr[i] === arr[j]) {
          arr.splice(j, 1);
          j--;
        }
      }
    }
    return arr;
  }
  function removeDuplicate2(arr) {
    return [...new Set(arr)];
  }
}
{
  // 求 n 的阶乘  5! = 1 x 2 x 3 x 4 x 5; 
  function factorial1(n) {
    if(n<=1) return 1;
    return n*factorial1(n-1);
  }
  function factorial2(n) {
    let total = 1;
    for(let i=2;i<=n;i++) {
      total = total*i;
    }
    return total;
  }
}
{
  // 求一组数的和，平均值
  let arr = [1,2,3,4,5];  // 15
  function sum(arr) {
    return arr.reduce((prev,cur,index,arr)=>{
      prev = prev + cur;
      return prev;
    },0);
  }
  function getValue(arr) {
    // return sum(arr)/arr.length;
    let sum = 0;
    arr.forEach((item, index)=>{
      sum += item;
    });
    const av = parseInt(sum/arr.length);
    return [sum, av]
  }
}
{
  // 求一组数的最大数和最小数
  let scores = [89,100,99,77,59,85,88];
  Math.max(...scores);
  Math.min(...scores);
  function getMax(arr) {
    let temp = arr[0];
    for(let i=1;i<arr.length;i++) {
      if(arr[i] > temp) {
        temp = arr[i];
      }
    }
    return temp;
  }
  function getMin(arr) {
    let temp = arr[0];
    for(let i=1;i<arr.length;i++) {
      if(arr[i]<temp) {
        temp = arr[i];
      }
    }
    return temp;
  }
}

{
  // 验证是不是回文数组 arr = [89,100,120,150,120,100,89];  arr[1] == arr[arr.length-1-1]; // 0,6 | 1,5
  function isHui(arr) {
    let isHui = true;
    for(let i=0;i<parseInt(arr.length/2);i++) {
      if(arr[i] != arr[arr.length-1-i]) {
        isHui = false;
        break;
      }
    }
    return isHui;
  }
}
{
  // 循环右移 k 位 arr = [12,23,34,45,56,67,78,89,100];  // 8 -> 1   7 -> 8   6 -> 7  5 -> 6... 1 -> 2
  // 两种方法： 1.放入新数组   2.在原数组上改: 先移动一位，想移动几位就循环几次
  // 天作孽，犹可违；自作孽，不可活。
  function moveItem1(arr, k) { // 长度9  // 右移3   // 右移10
    return arr.reduce((prev, cur, index) => {
      let indexNew = index + k;
      if(indexNew >= arr.length) {
        indexNew = indexNew%arr.length;
      }
      prev[indexNew] = cur;
      return prev;
    },[]);
  }
  function moveItem2(arr, k) {
    //1. 移动K次
    for(let i=0;i<k;i++) {
      //2. 保存最后一位
      let temp = arr[arr.length-1];
      //3. 移动1位
      for(let j=arr.length-1;j>0;j--) {
        arr[j] = arr[j-1];
      }
      //4. 最后一位赋值给第一位
      arr[0] = temp;
    }
    return arr;
  }
}
{
  // 冒泡排序:输入6个无序的数字，从头到尾依次比较相邻两个数字大小，若大数在前、小数在后，则交换两数位置，依次比较，使全部数据按从小到大排列
  // let arr = [ 8,1,6,3,2,5,9 ];  8,1,6,3,2,5,9
  function mySort(arr) {
    for(let i=0;i<arr.length;i++) {
      for(let j=0;j<arr.length-1-i;j++) {
        if(arr[j] > arr[j+1]) {
          [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        }
      }
    }
    return arr;
  }
}
{
  // 插入排序  var arr = [2,4,5,23,67,112,250,290, ];  num = 25;
  //1. 从小到大排列数组
  //2. 找位置下标
  //3. 移位置
  //4. 插数
  function mySort(arr) {
    for(let i=0;i<arr.length;i++) {
      for(let j=0;j<arr.length-1-i;j++) {
        if(arr[j] > arr[j+1]) {
          [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        }
      }
    }
    return arr;
  }
  function insert(arr, num) {
    let arrNew = mySort(arr); // sort
    for(var i=0;i<arrNew.length;i++) { // findIndex
      if(arr[i] >= num) {
        break;
      }
    }
    for(let j=arrNew.length-1;j>=i;j--) {
      arrNew[j+1] = arrNew[j]; 
    }
    arrNew[i] = num;  // splice
    return arrNew;
  }
}
{
    //选择排序法: 首先选出最小的数放在第一个位置上，然后选出次小的数放在第二个位置上，以此类推,直至完成排序
    function mySort(arr) {
      for(let i=0;i<arr.length;i++) {
        let temp = i;
        for(let j=i+1;j<arr.length;j++) {
          if(arr[temp] > arr[j]) {
            temp = j;
          }
        }
        [arr[i], arr[temp]] = [arr[temp], arr[i]];
      }
      return arr;
    }
}
{
  // 折半查找法,在一组 有序 的数组内查找num是否存在: 
  let  arr=[5,13,19,21,37,56, 64,75, 80,88,92];
  function biSearch(arr, num) {
    let hasNum = false;
    let high = arr.length - 1;
    let low = 0;
    let mid = parseInt((high + low)/2);
    while(high >= low) {
      if(num === arr[mid]) {
        hasNum = true;
        break;
      } else if(num > arr[mid]) {
        low = mid + 1;
        mid = parseInt((high + low)/2);
      } else {
        high = mid - 1;
        mid = parseInt((high + low)/2); // 
      }
    }
    return hasNum;
  }
}
{
  // 反转数字
  let arr2 = [1,2,3,4,5,6,7,8,9,10,11];
  function myReverse(arr) {
    for(let i=0;i<parseInt(arr.length/2);i++) {
      [arr[i], arr[arr.length-1-i]] = [arr[arr.length-1-i], arr[i]];
    }
    return arr;
  }
}
{
   // 随机生成1个 n 位以内的数  // 65212
   function getNum(n) {
      let temp = parseInt(Math.random() * Math.pow(10, n));
      let arr = [];
      do{
        arr.unshift(temp%10);
        temp = parseInt(temp/10);
      }while(temp > 0);
      return arr;
   }
}
{
  // 随机取名字
  let arr = ["张三","李四","王二麻子","王英俊","小郭"]; 
  function getName(arr) {
    let ran = parseInt(Math.random() * arr.length);
    return arr[ran];
  }
}
