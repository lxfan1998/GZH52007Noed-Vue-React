const mongoose=require('mongoose');

require('');

const UsersModel=mongoose.model('User',{username:String,password:String},'users');

class MovieModel{
    constructor(){

    }

    checkUser(username,password){
        // 根据用户名和密码去做对比
        // 1.用户名不存在
        // 2.用户名存在，密码不正确
        // mongoose findOne();  后台的用户肯定是唯一性
        return new Promise((resolve,reject)=>{
            if(error){
                // 系统
                reject({status:false,msg:error,data:null});
            }else{
                if(!data){
                    // 用户不存在
                    resolve({status:false,msg:'failure not found',data:null});
                }else{
                    // 用户名存在
                    if(data.password===password){
                        // 面膜正确，比对得上
                        
                    }
                }
            }
        })
    }
}