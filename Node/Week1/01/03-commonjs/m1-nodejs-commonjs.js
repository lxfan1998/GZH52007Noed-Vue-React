;(function(module,exports,__dirname,__filename){
    // 局部变量（CommonJS里面的成员是私有的）
    // 这个函数是nodejs在使用require加载的时候，进行执行。执行的时候，传递一些参数过来。
    // 在模块里面存着一些特殊的变量
    // module,exports,__dirname,__filename
    // nodejs在加载m1.js这个模块的时候，在加载的一瞬间就会把m1.js里面的代码放在一个匿名自执行函数里，执行的时候会传一些参数过来，传过来之后在我们自己的代码里就可以用这些参数
    var exports=module.exports={};
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

    // exports和module.exports指向的是同一个地址，他们指向了同一个对象
    module.exports={  // 使得exports对象的地址指向发生改变，就不再指向之前那个对象了
        age,
        add
    }
    exports.name=name;

    // exports.name=name;
    // module.exports={
    //     name,
    //     age,
    //     add
    // }
    // 原因：单个暴露是失效的，以整体暴露为准。底层的exports是module.exports对象的一个引用，但是在代码执行完毕后，暴露出去的是module.exports。在nodejs执行环境里面，底层的实现CommonJs大致的运行逻辑是这样的：

    return module.exports;  // 但是这个匿名自执行函数返回的是module.exports，所以当单个暴露和整体暴露同时使用时，单个暴露（exports）是失效的
    // 如果上面没有写module.exports只有exports的话，exports是生效的

})(module,exports,__dirname,__filename);