const mongoose = require('mongoose');

require('../db/mgdb.js');

const UsersModel = mongoose.model('User', { username: String , password: String },'users');
// 完成对电影数据的操作
class UserModel {

    constructor(){

    }

    checkUser(username,password){
        // 根据用户名和密码去做比对
        // 1. 用户名不存在
        // 2. 用户名存在，密码不正确
        // mongoose findOne(); 后台的用户肯定是唯一的（唯一性）
        return new Promise((resolve,reject)=>{
            UsersModel.findOne({username}).exec((error,data)=>{
                if(error){
                    // 如果有错误，可能是系统出问题了
                    reject({status:false,msg:error,data:null});
                }else{
                    // 用户不存在
                    if(!data){
                        resolve({status: false,mag:'failure not found',data:null});
                    }else{
                        // 用户名存在，但是不能说明密码正确
                        if(data.password===password){
                            // 密码正确，比对得上
                            resolve({status: true,msg:'success',data:data});
                        }else{
                            // 密码不正确
                            resolve({status:false,msg:'failure password error',data:null});
                        }
                    }
                }
            });
        });
    }
}

module.exports=UserModel;