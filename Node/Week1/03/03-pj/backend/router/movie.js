const mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

// mongoose入库

mongoose.connect('mongodb://localhost/h5MovieCms',{ useNewUrlParser: true, useUnifiedTopology: true });
const MovieModel = mongoose.model('Movie', { moviename: String , director: String , actors: String },'cms_movie');


// 需求：希望将项目的所有的路由信息进行外置，而不是都写在app.js文件导致单个文件过大，不利于维护和管理
// 定义路由信息

// 展示添加表单，get操作
router.get('/movie/add', function (req, res) {
    // render的movie是一个文件夹，为了更好地管理代码
    res.render('movie/add');
});

// 收集，用post
router.post('/movie/store', function (req, res) {
    // 实际：收集数据，然后使用mongoose操作MongoDB存储到数据库
    // 在express里面如何收集数据
    // console.log(req.body);  // req.body包含了post数据
    let {moviename,director,actors}=req.body && req.body;

    console.log(moviename,director,actors);

    // 判断数据合法性（数据有些字段（比如moviename）不能为空，限制长度）
    if(!moviename || !director || !actors){
        // 不合法
        res.redirect('/admin/movie/add');  // redirect可以让浏览器跳转到其他页面
        return;
    }

    // 合法
    const movieInfo = new MovieModel({ moviename,director,actors });
    movieInfo.save().then((data) => {
        console.log('insert ok!');
        console.log(data);

        mongoose.disconnect();
        // 成功添加后跳转到展示页面
        res.redirect('/admin/movie/list');
    });
});

router.get('/movie/list', function (req, res) {
    res.render('movie/list');
});

module.exports = router;