const mongoose=require('mongoose');

require('../db/mgdb.js');

const MoviesModel=mongoose.model('movie',{moviename:String,director:String,actors:String},'cms_movie');
// 完成对电影数据的操作
class MovieModel {
    constructor(){

    }
    由控制器决定是否需要模型的参与来完成数据的操作
    const movieObj=new MovieModel();
    // 调用处如何获取调用后的状态
        let status=await movieObj.store(movieInfo:{moviename,director,actors});
    if(status){
        resizeBy.redirect
    }
}
//