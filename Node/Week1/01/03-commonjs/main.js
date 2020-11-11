// main.js和m1.js是两个独立的文件，在nodejs里运行会报错，要想m1.js里的变量在main.js能够引用，就要在m1.js中把变量暴露出来，然后在main.js中引入m1.js
// 但是浏览器是没有模块的概念的，所以在浏览器中打开网页时，用src引入就效果就和直接在html中写js代码，js代码中的全局变量是可以共享的，所以在浏览器中是可以正常运行的

// 使用
// const m1=require('./m1.js');
// 1.参数：引入模块的路径（使用绝对路径相对路径都可以，但是不能省略目录./）。
// 2.引入文件的后缀可以省略。
// 3.引入的模块需要使用一个变量接受，一般接受变量的名称和文件的名称一致。一般文件的名称我们叫做模块名称（模块id）
const m1=require('./m1');
const m2=require('./m2.js');  // 引入模块一般都是放在最上面
const Person=require('./Person.js');

// 要注意：子啊浏览器中，写在hmtl文件的src路径中的'./m1.js'和'm1.js'是等价的，但是在js文件中这两者是不等价的
console.log('m1',m1);
console.log('m2',m2);

var p2=new Person('judy');

// 使用：一般类直接使用就可以，前缀有点奇怪，约定俗成是不加前缀的
// new Person('andy');
// 如果某个模块只是暴露单个类，一般我们直接暴露该类即可
const p1=new m1.Person('andy');
console.log(p1.name);  // andy
console.log('p1',p1);  // Person { name: 'andy' }
console.log('p2',p2);

// 如果要使用模块里面的成员，则使用：模块名称.模块的成员
// console.log(m1.name);
// console.log(m1.number);
// console.log(m1.age);
// console.log(m1.add);
// console.log(m1.add(12,24));