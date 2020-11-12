class BackController{
    constructor(){

    }

    login(req,res){
        res.render('login');
    }
    checklogin(req,res){
        // 完成登录检测
        console.log(req.body);
        let{username,password}=req.body;
        if(!username||!password){
            res.redirect('/admin/login');
            return ;
        }

        // 判断当前的提交的信息和数据库里面的信息是否一致。如果一致，则合法
        // 定义管理员的模型
        const userObj=new UserModel();
        try{
            let info=await userObj.checklogin(username,password);
            console.log(info);
            if(info.status){
                // 用户成功登录，
                res.redirect('./admin/home');
                return ;
            }
        }
    }
}