var express=require('express');
var jwt=require('jsonwebtoken');
var moment=require('moment');


var router=express.Router();
const MemberModels=require('../../models/memberModel');
const SiteConfig=require('../../config/site.js');

router.get('/comment/register',(req,res)=>{
    
});

router.post('/comment/add',(req,res)=>{
    // 1.收集数据
    // 什么人在什么时间对什么进行评论
    let {token,movieId,content}=req.body;
    let addTime=;
    // 校验token的合法性
    try{
        var userInfo=jwt.verify(token,SiteConfig.JWT_SALT);
        let addTime=moment().format('YYYY-MM-DD HH:mm:ss');
        // 入库
        let commentObj=new CommentModel();
        try{
            let info=await comment
        }
    }catch(e){
        
    }

});