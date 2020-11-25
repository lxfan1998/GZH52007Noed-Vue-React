// 后台首页相关的路由信息
var express = require('express')
var router = express.Router()

// 1. 路由定义完成 dashboard 首页
router.get('/dashboard', function (req, res) {
    // 模板引擎，展示一个页面
    // res.render('/admin/dashboard');
    res.render('dashboard');
});

// 由于后台的首页引入welcome.html页面
router.get('/welcome', function (req, res) {
    res.render('welcome');
});

module.exports = router