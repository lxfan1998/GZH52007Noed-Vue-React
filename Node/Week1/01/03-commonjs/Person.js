
// m2 就是一个普通的类
// 一般单个模块可以这样直接命名People.js
class Person{
    constructor(name){
        this.name=name;
    }

    say(){
        console.log(this.name+',say hi!');
    }
}

// module.exports={};
module.exports=Person;