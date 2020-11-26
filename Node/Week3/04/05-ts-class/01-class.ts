
// 学习一下class四大特性

// 抽象、继承、封装、多态

class People{
    // 2. this下面的都是属性
    // 1. ts里面，类的构造函数是不需要做类型约束的
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }

    // 2. 定义方法
    say(word:string)
}
