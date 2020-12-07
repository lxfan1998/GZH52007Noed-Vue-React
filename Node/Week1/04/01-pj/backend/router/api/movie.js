var express = require('express');
var router = express.Router();
const MovieModels=require('../../models/movieModel.js');

// 定义接口路由 list
// 完整地址：localhost:3000/api/v1/movie/list
router.get('/movie/list',async (req,res)=>{
    // 获取电影列表数据
    const movieObj=new MovieModels();
    let returnData={};

    try {
        const movieData=await movieObj.list();
        returnData={
            error_code: 0,
            reason: '成功的返回',
            result:{
                data:movieData
            }
        };
    }catch (e) {
        returnData={
            error_code: 1000,
            reason: '获取失败',
            result:{
                data:null
            }
        };
    }
    // 设置一下响应头信息，允许跨域请求
    // res.setHeader('Access-Control-Allow-Origin','*');  // *代表允许所有的域名跨域请求

    res.send(JSON.stringify(returnData));
});

module.exports = router;