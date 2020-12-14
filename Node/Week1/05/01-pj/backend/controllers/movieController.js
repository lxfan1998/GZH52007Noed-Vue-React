// controller 翻译，控制的意思，完成业务操作
// 命名规范
// 业务名称Controller

const MovieModel=require('../models/movieModel.js');

// 一般改文件是一个类，一个一个的函数

// es6复习
// 类名和文件名一致，类名要大写，代表是一个类
class MovieController {
    constructor(){

    }

    // add，展示添加表单
    add(req,res){
        // render的movie是一个文件夹，为了更好地管理代码
        res.render('movie/add');
    }

    // store，收集
    async store(req,res){
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
        // 由控制器决定是否需要模型的参与来完成数据的操作
        const movieObj=new MovieModel();
        // 调用处如何获取调用后的状态。如何使用同步的方式去编写异步的代。async+await
        try {
            await movieObj.store({moviename,director,actors});  // 当前插入的记录
            res.redirect('/admin/movie/list');
            return;
        }catch (e) {
            res.redirect('/admin/movie/add');
            return;
        }
    }

    // list
    async list(req,res){
        // 调用模型获取数据
        const movieObj=new MovieModel();
        try {
            const movieData=await movieObj.list();
            res.render('movie/list',{movieData});
        }catch (e) {
            console.log(error);
        }
    }
}

module.exports=MovieController;