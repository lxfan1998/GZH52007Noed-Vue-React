// 1.引入一个第三方的模块express（底层http模块的封装）
const express = require('express');
const path=require('path');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const cors=require('cors');


const movieRouter=require('./router/movie.js');
const backRouter=require('./router/back.js');
const indexRouter=require('./router/index.js');

// 注册接口路由
const movieApiRouter=require('./router/api/movie.js');

// 会员接口
const memberApiRouter=require('./router/api/member.js');
const commentApiRouter=require('./router/api/comment.js');

const app = express();
const port = 3000;

// 设置跨域操作
app.use(cors());

// 配置session
app.use(cookieSession({
    name: 'session',
    keys: ['DFGHJKL:"CVBNM<$$%^&*()VBBnm,1231231'],
    // 有效期
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));


// 配置post的处理方式
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 配置静态资源的处理方式
// url访问：localhost:3000/bg.png
app.use(express.static('public'));

// 配置模板引擎
app.engine('html', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');


// 需求：希望将项目的所有的路由信息进行外置，而不是都写在app.js文件导致单个文件过大，不利于维护和管理
// 定义路由信息


// 参数1：路由前缀，由用户自定义
// 参数2：外置路由对象
// 会拿v1和外置路由进行拼接
// v1/about
// v1/news
app.use('/admin',movieRouter);
app.use('/admin',backRouter);
// /admin/dashboard
app.use('/admin',indexRouter);

// 注册接口路由，一般会加上前缀
app.use('/api/v1',movieApiRouter);
// 注册
app.use('/api/v1',memberApiRouter);
app.use('/api/v1',commentApiRouter);

// 完成登录的操作 1. 定义login路由


app.listen(port, () => console.log(`Example app listening on port ${port}!`));