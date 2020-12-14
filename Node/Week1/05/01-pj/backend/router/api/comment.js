var express = require('express');
var jwt=require('jsonwebtoken');
const moment=require('moment');

var router = express.Router();
const CommentModels=require('../../models/commentModel.js');
const SiteConfig=require('../../config/site.js');

// 获取的接口
router.get('/comment/list',(req,res)=>{

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