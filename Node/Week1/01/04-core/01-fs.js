// http://nodejs.cn/api/fs.html
const fs = require('fs');  // fs模块id，不需要加路径
// fs 模块可用于与文件系统（磁盘，硬盘）进行交互（以类似于标准 POSIX 函数的方式）。

// 之前学习的JavaScript是运行在浏览器端的，是否可以操作文件？
// 不可以（处于安全考虑，客户端JavaScript是没办法操作文件的）。

// 但是服务器端是一定要有和文件交互的能力的

// console.log(fs);

// 文件的内容的读取操作
// []里面的参数如果不需要可以不写
// fs.readFile(path[, options], callback) 异步读取，需要使用callback获取结果
// fs.readFileSync(path[, options]) 加了Sync的是同步读取

// readFileSync文件的内容的读取操作，同步，可以直接使用变量接受返回的内容
let filename='./data/1.txt';
// let filename='./data/12.txt';  // 一个不存在的文件
/* no such file or directory, open 'F:\Node&Vue&React\GZH52007Noed-Vue-React\Node\Week1\01\04-core\data\12.txt'] {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: 'F:\\Node&Vue&React\\GZH52007Noed-Vue-React\\Node\\Week1\\01\\04-core\\data\\12.txt'
} */

// let content=fs.readFileSync(filename);
// let content=fs.readFileSync(filename,'utf-8');
// let content=fs.readFileSync(filename,{encoding:'utf-8'});
// console.log(content);  // <Buffer 68 69 20 6e 6f 64 65 6a 73 21>
// 转成我们能看懂的字符，或者添加options
// console.log(content.toString());

// 假如现在存在这样一个需求：a.txt b.txt c.txt
// 使用异步读取的方式把文件的内容读取出来，然后拼接在一起形成一个d.txt文件
// TODO：（这个TODO是WebStorm软件的功能）会遇到一个很恶心的东西：callback hell（回调地狱）。如果不使用系统的同步读取api，要怎么解决？ async+await改写

// readFile异步读取，需要嵌入callback
let content=fs.readFile(filename,'utf-8',(error,data)=>{
    if(error){
        // 如果有错误（比如在filename是一个不存在的文件），要自己操作
        // 直接抛出错误
        // throw error;
        // 日志的记录
        console.log(error);
    }else{
        console.log(data);
    }
});

