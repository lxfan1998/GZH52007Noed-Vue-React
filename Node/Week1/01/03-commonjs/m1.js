// m1模块
let name='m1';
let age=12;

const add =(a,b)=>{
    return a+b;
}

function People(name){
    this.name=name;
}

class Person{
    constructor(name){
        this.name=name;
    }

    say(){
        console.log(this.name+',say hi!');
    }
}

console.log('__dirname：',__dirname);  // __dirname：F:\Node&Vue&React\GZH52007Noed-Vue-React\Node\Week1\01\03-commonjs  打印出来的是目录
console.log('__filename：',__filename);  // __filename：F:\Node&Vue&React\GZH52007Noed-Vue-React\Node\Week1\01\03-commonjs\m1.js  打印出来的是文件名的目录
// 都是绝对路径

// 方式一：单个暴露
// 暴露{name:name}关键字后面的属性名称，用户自定义，代表是暴露出去使用的名称
// exports
// exports.name=name;
// exports.number=age;

// 方式二：整体暴露
// module.exports={
//     name,  // ES6简化写法，属性名和属性值相同时可以简化，name:name-->name
//     age,
//     add
// }

// 注意事项：单个暴露和整体暴露同时使用会出现问题
// 单个暴露失效
// exports.name=name;
// module.exports={
//     age,
//     add
// }
// 并且与它们的书写顺序无关
module.exports={
    age,
    add,
    Person
}
exports.name=name;

// exports.name=name;
// module.exports={
//     name,
//     age,
//     add
// }
// 原因：单个暴露是失效的，以整体暴露为准。底层的exports是module.exports对象的一个引用，但是在代码执行完毕后，暴露出去的是module.exports。在nodejs执行环境里面，底层的实现CommonJs大致的运行逻辑是这样的：m1-nodejs-commonjs.js