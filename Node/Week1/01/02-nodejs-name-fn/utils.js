// 默认情况下，函数外面是没办法调用函数内部的东西的，因为函数内部的是局部变量
;(function (){
    // 也是模块化概念（为了代码的复用和维护）
    // 局部变量
    let name='andy';
    let age=12;
    const add=function (a,b){
        return a+b;
    }
    // return {name,add};
})();
// console.log(name);  // 这里是调用不了上面函数中的name的

// 使用匿名函数自执行也是模块化概念，函数中的变量都是局部变量，这两个函数彼此之间没有冲突，不用担心变量名冲突
;(function (){
    let name='judy';
    let age=12;
    const add=function (a,b){
        return a+b;
    }
    // return {name,add};
})();
// console.log(name);

// 但是这样存在一个问题：外部引用不了函数中的变量
// 解决：一般会在全局内再暴露一个唯一的变量来接收所暴露的信息
// 比如jQuery就是这样做的
;(function (w){
    let name='judy';
    let age=12;
    const add=function (a,b){
        return a+b;
    }
    // 比如jQuery就是
    // 自己的代码对外的唯一的出口
    // 这样写就只在全局多了一个$变量或jquery变量，对全局的污染降到了最小
    w.$=w.Jquery={
        name,
        add,
        age
    }
    // return {name,add};
})(window);
// $.ajax();
// $.get();