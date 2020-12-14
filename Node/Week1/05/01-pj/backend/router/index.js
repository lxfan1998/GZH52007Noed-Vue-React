// 后台首页相关的路由信息
var express = require('express')
var router = express.Router()

// 1. 路由定义完成 dashboard 首页
router.get('/dashboard', function (req, res) {
    // 模板引擎，展示一个页面
    // res.render('/admin/dashboard');

    if(!req.session.isLogin){
        // 用户没有登录，直接访问，一般我们称之为翻墙
        res.redirect('/admin/login');
        return;
    }
    console.log('req.session',req.session);
    res.render('dashboard');
});

// 由于后台的首页引入welcome.html页面
router.get('/welcome', function (req, res) {
    res.render('welcome');
});

// 退出登录状态
router.get('/logout', function (req, res) {
    // 1. 清除session 2. 前往页面/admin/login
    req.session.isLogin=null;
    req.session.username=null;
    res.redirect('/admin/login');
    return;
});

module.exports = router