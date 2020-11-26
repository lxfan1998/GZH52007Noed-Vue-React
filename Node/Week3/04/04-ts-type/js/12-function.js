function  add(a,b) {
    return a+b;
}

console.log(add(12,23));

// 除了变量可以声明类型，函数的参数、函数的返回值，都是可以进行类型的约束的。
// 函数参数以及返回值类型的约束是非常有意义的，因为绝大部分情况下我们会写很多工具函数，或者会用第三方提供的函数库。寒素是需要隐藏其内部的细节，给出输入，给予输出。实现写好函数调用文档。

//函数声明
function add1(a:number,b:number):number {
    return a+b;
}

console.log(add1(12,23));

// 在js里面如果函数没有返回值，默认返回undefined