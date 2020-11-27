var express = require('express');
var router = express.Router();

// 引入业务控制文件
const MovieController=require('../controllers/movieController.js');
const movieObj=new MovieController();

// 需求：希望将项目的所有的路由信息进行外置，而不是都写在app.js文件导致单个文件过大，不利于维护和管理
// 定义路由信息
// 展示添加表单，get操作
router.get('/movie/add', movieObj.add);
// 收集，用post
router.post('/movie/store', movieObj.store);
router.get('/movie/list', movieObj.list);

module.exports = router;