const UserModel=require('../models/userModel.js');

class BackController {
    constructor(){

    }

    login(req,res){
        res.render('login');
    }

    async checklogin(req,res){
        // 完成登录检测
        console.log(req.body);
        let {username,password}=req.body;
        if(!username || !password){
            res.redirect('/admin/login');
            return;
        }

        // 判断当前的提交的信息和数据库里面的信息是否一致，如果一致，则合法
        // 定义管理员的模型
        const userObj=new UserModel();

        try {
            let info=await userObj.checkUser(username,password);
            console.log(info);
            if(info.status){
                // 用户成功登录，1. 标识一下用户的登录的状态 2. 前往后台的首页/admin/dashboard（检测用户是否登录，共享用户登录的标识）
                // req.session是我们安装cookie-session这个包之后给我们封装的
                // req.session可以在多个会话之间实现信息的共享
                req.session.isLogin=true;
                req.session.username=username;

                res.redirect('/admin/dashboard');
                return;
            }else {
                // 用户名或者密码不正确（后台报错不要给出太明显的信息，防止数据泄露）
                res.redirect('/admin/login');
                return;
            }
        }catch (e) {
            res.redirect('/admin/login');
            return;
        }
    }
}
module.exports=BackController;