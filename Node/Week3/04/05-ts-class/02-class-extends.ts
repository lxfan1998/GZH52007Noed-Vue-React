




// 只是完成了继承（重写）
class Man extends Peple1{
    // 2. 定义方法
    say(word:string):void{
        console.log('Man',this.name+'say:'+word);
    }
}
const m1=new Man('caoyang',12,);


class Woman extends  People1{

    // 我们的子类将父类的方法进行重写，导致子类同一个方法产生的行为不一样，我们称之为多态（多种形态）。

    // 重写
    say(word:string):void{
        console.log('Woman',this.name+'say:'+word);
    }
}

console.log('====================');
const m2=new Woman('lily',12);