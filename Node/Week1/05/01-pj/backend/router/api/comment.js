var express = require('express');
var jwt=require('jsonwebtoken');
const moment=require('moment');

var router = express.Router();
const CommentModels=require('../../models/commentModel.js');
const SiteConfig=require('../../config/site.js');

// 获取的接口
// get传参是在url里（比如index.html?movieId=122321t&type=5）
router.get('/comment/list',async (req,res)=>{
    // 获取某一部电影的评论
    // 如何完成分页功能？
    // http://localhost:3000/api/v1/comment/list?movieId=5fbfb4ca84cb3131d0a1d80f&page=1&size=5
    let {movieId}=req.query;
    if(!movieId){
        let returnData={
            error_code:1001,
            reason:'电影id不存在！',
            result:{
                data:null
            }
        };
        res.json(returnData);
        return;
    }
    try {
        // 获取电影列表数据
        let commentObj=new CommentModels();
        let commentList=await commentObj.list(movieId);
        let returnData={
            error_code:0,
            reason:'获取成功！',
            result:{
                data:commentList
            }
        };
        res.json(returnData);
        return;
    }catch (e) {
        let returnData={
            error_code:1010,
            reason:e.message,
            result:{
                data:null
            }
        };
        res.json(returnData);
        return;
    }
});

// 提交的接口
router.post('/comment/add',async (req,res)=>{
    // 1. 收集数据
    // 什么人在什么事件对什么进行了评论
    let {token,movieId,content}=req.body;

    if(!movieId || !content){
        let returnData={
            error_code:1001,
            reason:'评论信息不完整！',
            result:{
                data:null
            }
        };
        res.json(returnData);
        return;
    }

    // 2. 验证
    // token是否存在
    if(!token){
        let returnData={
            error_code:1007,
            reason:'token不存在！',
            result:{
                data:null
            }
        };
        res.json(returnData);
        return;
    }
    // 验证token的合法性
    try {
        var userInfo = jwt.verify(token, SiteConfig.JWT_SALT);
        let userId=userInfo._id;
        let addTime=moment().format('YYYY-MM-DD HH:mm:ss');
        // 入库
        let commnetObj=new CommentModels();
        try {
            let info=await commnetObj.addComment(userId,movieId,addTime,content);
            let returnData={
                error_code:0,
                reason:'评论成功',
                result:{
                    data:info
                }
            };
            res.json(returnData);
            return;
        }catch (e) {
            let returnData={
                error_code:1008,
                reason:e.message,
                result:{
                    data:null
                }
            };
            res.json(returnData);
            return;
        }
    }catch (e) {
        let returnData={
            error_code:1009,
            reason:e.message,
            result:{
                data:null
            }
        };
        res.json(returnData);
        return;
    }
});

module.exports = router;