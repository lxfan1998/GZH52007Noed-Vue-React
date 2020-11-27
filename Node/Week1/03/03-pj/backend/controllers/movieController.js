// controller 翻译，控制的意思，完成业务操作
// 命名规范
// 业务名称Controller

const mongoose = require('mongoose');

// mongoose入库
mongoose.connect('mongodb://localhost/h5MovieCms',{ useNewUrlParser: true, useUnifiedTopology: true });
const MovieModel = mongoose.model('Movie', { moviename: String , director: String , actors: String },'cms_movie');


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
    store(req,res){
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
            // 断开连接
            mongoose.disconnect();
            // 成功添加后跳转到展示页面
            res.redirect('/admin/movie/list');
        });
    }

    // list
    list(req,res){
        // 连接数据库获取电影信息
        MovieModel.find().exec((error,data)=>{
            if(error){
                // res.redirect('');
                console.log(error);
                return;
            }else{
                // 数据放置在模板
                res.render('movie/list',{movieData:data});
            }
        });
    }
}

module.exports=MovieController;