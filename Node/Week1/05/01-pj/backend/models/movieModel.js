const mongoose = require('mongoose');

require('../db/mgdb.js');

const MoviesModel = mongoose.model('Movie', { moviename: String , director: String , actors: String },'cms_movie');
// 完成对电影数据的操作
class MovieModel {

    constructor(){

    }
    // 存储操作
    store(movieInfo){
        // 合法
        const movie = new MoviesModel(movieInfo);
        // 存储是异步操作
        return movie.save();
    }

    // 获取电影列表
    list(){
        return new Promise((resolve,reject)=>{
            MoviesModel.find().exec((error,data)=>{
                if(error){
                    reject(error);
                }
                else{
                    resolve(data);
                }
            });
        });
    }
}

module.exports=MovieModel;