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

// 暴露
exports.name=name;