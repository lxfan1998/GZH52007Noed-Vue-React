
// m2 就是一个普通的类
class Person{
    constructor(name){
        this.name=name;
    }

    say(){
        console.log(this.naem+',say hi!');
    }
}

// module.exports={};
module.exports=Person;