var express = require('express');
var jwt=require('jsonwebtoken');

var router = express.Router();
const MemberModels=require('../../models/memberModel.js');
const SiteConfig=require('../../config/site.js');

/**
 *
 * @api {post} /member/register 用户注册接口
 * @apiName  register
 * @apiGroup 用户管理
 * @apiVersion 0.1.0
 * @apiDescription 完成用户注册操作
 *
 * @apiPermission admin
 *
 * @apiParam {string} username 用户名
 * @apiParam {string} password 密码
 * @apiParam {string} repassword 确认密码
 * @apiParam {string} markup 个人简介
 *
 * @apiSuccess (success-200) {String} error_code 响应状态码
 * @apiSuccess (success-200) {String} msg 响应描述
 * @apiSuccess (success-200) {Object} result 返回数据，成功的时候才存在
 * @apiSuccess (success-200) {Object[]} result.data 数据
 *
 *
 * @apiSuccessExample {json} 成功注册-示例:
 * 成功注册
 * HTTP/1.1 200 OK
 * {
 *  code:0,
 *  msg:'success',
 *  data:{}
 *  }
 *
 *  @apiError (failure-500) {String} code 响应状态码
 *  @apiError (failure-500) {String} msg 提示信息
 *
 *  @apiErrorExample {json} 失败-示例:
 *  这是出现错误时返回结果示例
 *  HTTP/1.1 404 Not Found
 *  {
 *   code:1,
 *   msg:'not found',
 *   }
 */


// 定义网站的会员注册相关的路由 1. 注册 2. 登录
// 调错的时候遵循最小化原则，当我们做一个功能的时候，如果这个功能没有实现，先把所有代码注释掉，然后第一步先判断路由有没有通，然后写一部测一步
router.post('/member/register',async (req,res)=> {

    // 1. 收集用户的注册信息 a. 用户名 b. 密码 c. 确认密码 d. mark up
    let {username,password,repassword,markup}=req.body;

    // 2. 验证信息的合法（1. 用户信息不能为空 2. 用户的唯一性）
    if( !username || !password || !repassword ){
        // 信息不完整
        let returnData={
            error_code:1001,
            reason:'用户信息不完整',
            result:{
                data:null
            }
        };
        res.json(returnData);
        // 底层原理：res.send(JSON.stringify(returnData));
        return;
    }
    if(password!==repassword){
        // 用户密码不一致
        let returnData={
            error_code:1002,
            reason:'用户密码不一致',
            result:{
                data:null
            }
        };
        res.json(returnData);
        return;
    }
    // 用户名是否之前有注册（牵涉到模型）
    const memberObj=new MemberModels();
    try {
        let info=await memberObj.checkUser(username);
        if(!info.status){
            // 不能注册
            let returnData={
                error_code:1004,
                reason:info.msg,
                result:{
                    data:null
                }
            };
            res.json(returnData);
            return;
        }else{
            // 可以注册，要准备入库
            try {
                let info=await memberObj.addUser(username,password,markup);

                let newInfo=JSON.parse(JSON.stringify(info));
                delete newInfo.password;

                let returnData={
                    error_code:0,
                    reason:info.msg,
                    result:{
                        data:newInfo
                    }
                };
                res.json(returnData);
                return;
            }catch (e) {
                let returnData={
                    error_code:1005,
                    reason:e.message,
                    result:{
                        data:null
                    }
                };
                res.json(returnData);
                return;
            }
        }
    }catch (e) {
        // 系统错误
        let returnData={
            error_code:1003,
            reason:'系统错误，请练习管理员',
            result:{
                data:null
            }
        };
        res.json(returnData);
        return;
    }
});

// 登录
router.post('/member/login',async (req,res)=>{
    // 1. 接收数据
    let {username,password}=req.body;

    // 2. 验证数据的完整性
    if(!username || !password){
        // 信息不完整
        let returnData={
            error_code:1001,
            reason:'用户信息不完整',
            result:{
                data:null
            }
        };
        res.json(returnData);
        return;
    }
    // 3. 数据库验证，验证用户名和密码的合法性，信息入库
    let memberObj=new MemberModels();
    try {
        // 我们在使用mongoose这个库的时候，返回的对象是由mongoose封装后的对象，该对象只能获取属性，不能修改、删除。
        // 如果确实有需要操作属性的，则我们需要转换为js普通的对象然后再操作。
        let info=await memberObj.checkLoginUser(username,password);
        if(info.status){
            // 登录成功，记录用户登录的标识（http协议是无状态的）
            // 思考：传统的操作可以用session或cookie（需要前、后端在同一个项目下）
            // 当前后端分离，不是在一个项目，该如何做标识？
            // token认证
            // delete info.data.password;  // 删除对象的属性，本意。因为这里的info不是普通的对象，它是返回的对象是由mongoose封装后的对象，所以在这里这种操作是不允许的，没有作用
            let newInfo=JSON.parse(JSON.stringify(info.data));
            delete newInfo.password;
            console.log('newInfo',newInfo);
            // console.log('newInfo',SiteConfig.JWT_SALT,{expiresIn:'2h'});

            var token = jwt.sign(newInfo, SiteConfig.JWT_SALT,{ expiresIn: '2h' });

            let returnData={
                error_code:0,
                reason:info.msg,
                result:{
                    data:newInfo,
                    token:token,
                }
            };
            res.json(returnData);
            return;
        }else{
            // 登录失败
            let returnData = {
                error_code: 1006,
                reason: info.msg,
                result: {
                    data: null
                }
            };
            res.json(returnData);
            return;
        }
    }catch (e) {
        // 系统错误
        let returnData={
            error_code:1003,
            reason:'系统错误，请联系管理员',
            result:{
                data:null
            }
        };
        res.json(returnData);
        return;
    }

    // 4. 验证通过，标识用户登录状态

    // 5. 给予响应
    res.send("/member/login,login ok!");
});

module.exports = router;