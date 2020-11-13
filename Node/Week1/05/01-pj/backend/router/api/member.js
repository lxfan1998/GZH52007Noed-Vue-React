var express=require('express');
var router=expresss.Router();
const MemberModels=require('../../models/memberModel');


// 定义网站的会员注册相关的路由 1.注册  2.登录
router.get('/member/register',async(req,res)=>{
    // 最小化原则
    // 1.收集用户的注册信息  a.用户名  b.密码  c.确认密码  .
    // 底层
    return ;

    if(password!==repassword){
        let returnData={
            error
        }
    }
    // 用户名是否之前有注册（牵涉到模型）
    const memberObj=new MemberModels();
    try{
        let info=await memberObj.checkUser(username);
        if(!info.status){

        }else{
            // 可以注册  入库
            try{
                let info=await memberObj.addUser();
            }
            catch{

            }
        }
    }catch(e){

    }

    // 3.信息入库

    // 4.给予响应
});