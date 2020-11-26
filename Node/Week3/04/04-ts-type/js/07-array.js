// 复合数据类型：1. 数组 [] 2. 对象 3. 元组 4. 函数

// 数组：一组数据的集合，js里面的数组比较特殊，js数组里面的元素可以不完全一致
const arr1=[1,2,3,4,false,'strung1',[12,23]];
console.log(arr1);

// 对于强类型的语言，数组是一类数据的组合，那么这个数组中所有的元素的类型必须严格一致。

// 希望在ts里面约束数组的元素的类型全部为数字
const arr2:number[]=[1,2,2,34,45,45];

// 数组里的元素字符串
const arr3:string[]=['a','b','12'];


// 方式二：Array<数据类型>
// const arr4:boolean[]=[true,false,true];
const arr5:Array<boolean>=[true,false,true];


// 如果