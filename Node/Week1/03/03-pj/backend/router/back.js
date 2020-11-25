// 完成和登录相关的路由操作 login logout
var express = require('express')
var router = express.Router()


router.get('/login', function (req, res) {
    // res.send('login page');
    // 模板引擎，展示一个页面
    res.render('login');
})


module.exports = router