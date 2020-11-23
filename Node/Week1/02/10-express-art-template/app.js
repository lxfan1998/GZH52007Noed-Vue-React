// 1.引入一个第三方的模块express（底层http模块的封装）
const express = require('express');
const fs = require('fs');
const path=require('path');

// 2.得到一个服务器实例http.createServer();
const app = express();

// 复制中文版的，英文版的代码调试那句会少一个options，报错
// 设置模板的后缀，用户可以自定义
app.engine('html', require('express-art-template'));
// 设置模板文件的目录
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

const port = 3000;

// app.http的请求方法('url地址,url路径','回调函数')
// 当浏览器以http的请求方法+url地址请求时，则回调函数执行，函数可以给浏览器进行响应
// req请求头，res响应头
// 浏览器的地址栏会自动补一个“/”
// http://localhost:3000/
app.get('/', (req, res) => {
    // 代表获取请求参数
    console.log(req.url);
    console.log(req.method);

    // 代表进行相应（send方法是express库给我们封装的，不是原生的res.write()、res.end()）
    res.send('Hello World!');
});

// app下面其实是存在get或者post方法（参数一 url地址，参数二 回调函数）

// 1.可以完成get和post请求（表单提交实现）
    // 1.1 http协议除了get和post，还有其他的请求方式，例如deldete、put、patch、options......只是我们的浏览器大部分时间我们使用的是get或者post。需求：可以实现delete请求（用于删除服务器端的资源信息）。
    // b/s 后期 做开发，有时候我们做的c（可以发送get、post、delete、put）/s（定义好相应的请求的方法）

// http方法 delete+url(/deletenews) 借助一个第三方的调试工具：postman（专门实现url地址进行调试的，后期做api接口开发的时候要使用，以及 前后端分离 要使用）
app.delete("/deletenews",(req,res)=>{
    res.send("delete news ok!");
});

app.put("/putnews",(req,res)=>{
    res.send("put news ok!");
});


// 2.响应的内容是否可以复杂一点（响应一段HTNL代码）
    // 2.1 响应的内容，HTML代码可以外置（单独建立一个目录，存放要返回的HTML代码）
    // 2.2 外置的页面可以使用到返回处代码的某些变量

// 定义一个可以接收注册提交的url地址：/store
// http://localhost:3000/store
app.post('/store', (req, res) => {
    console.log(req.url);
    console.log(req.method);

    res.send('post ok!');
});

app.get('/store', (req, res) => {
    console.log(req.url);
    console.log(req.method);

    res.send('get ok!');
});

// 1.默认完成get请求（post请求，注册、登录），定制返回一个注册页面/register
// http://localhost:3000/register
app.get('/register', (req, res) => {

    // let htmlString=``;  // 一段表单的HTML代码（用户名，密码，确认密码，提交方式是post）
    // 加载views/register.html，方便管理
    // fs模块，读取views/register.html文件里面的内容，然后再响应
    let fileName='./views/register.html';  // 相对路径
    let htmlString=fs.readFileSync(fileName,'utf-8');

    // console.log(htmlString);

    res.send(htmlString);
});

// 关于页面：/about
// 浏览器的url地址栏，走的是get请求http://localhost:3000/about
app.get('/about', (req, res) => {
    console.log(req.url);
    console.log(req.method);

    res.send('about page!');
});

// 封装一个新闻页面：/news
// 浏览器url地址栏，走的是get请求：http://localhost:3000/news
app.get('/news', (req, res) => {
    console.log(req.url);
    console.log(req.method);

    // res.send('news page!');
    // 2.对象数组，后期是从数据库取出来的，连接数据库 MongoDB
    let newsTitle='xxx网站的最新新闻';
    const newsList=[
        {
            id:1,
            title:'新闻一-----',
            img:'',
        },
        {
            id:2,
            title:'新闻二=====',
            img:'',
        },
        {
            id:3,
            title:'新闻三三三三三三',
            img:'',
        },
        {
            id:4,
            title:'新闻四四四四四四',
            img:'',
        },
    ];
    // 使用res.render方法，render：渲染
    // 模板一般也称为视图
    res.render('news',{newsTitle,newsList});
});

// 3.监听端口，提供web服务
app.listen(port, () => console.log(`Example app listening on port ${port}!`));