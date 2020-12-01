// 完成和登录相关的路由操作 login logout
var express = require('express')
var router = express.Router()
const BackController=require('../controllers/backController.js');
const backController=new BackController();

router.get('/login', backController.login);
router.post('/checklogin',backController.checklogin);

module.exports = router;