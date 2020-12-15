const mongoose = require('mongoose');
const md5=require('md5');

require('../db/mgdb.js');

const CommentsModel = mongoose.model('Comments', { userId: mongoose.ObjectId , movieId: mongoose.ObjectId , addTime: String , content: String },'comments');

class CommentModel {

    constructor(){

    }

    list(movieId){
        return new Promise((resolve,reject)=>{
            CommentsModel.find({movieId}).exec((error,data)=>{
                if(error){
                    reject(error);
                }else {
                    resolve(data);
                }
            });
        });
    }

    addComment(userId,movieId,addTime,content){
        let commentObj=new CommentsModel({userId,movieId,addTime,content});
        return commentObj.save();
    }
}

module.exports=CommentModel;