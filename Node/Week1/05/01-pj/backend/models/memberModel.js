const mongoose = require('mongoose');
const md5=require('md5');

require('../db/mgdb.js');

const MembersModel = mongoose.model('Member', { username: String , password: String , markup: String },'members');

class MemberModel {

    constructor(){

    }
    /*
    * 前台会员注册的时候，根据用户名查看记录是否存在，如果存在，则不能注册；不存在才可以注册
    * @params username
    * @returns {Promise}
    * */
    checkUser(username){
        return new Promise((resolve,reject)=>{
            MembersModel.findOne({username}).exec((error,data)=>{
                if(error){
                    // 如果有错误，可能是系统出问题了
                    reject({status:false,msg:error,data:null});
                }else{
                    if(!data){
                        // 用户不存在，则可以注册
                        resolve({status:true,msg:'success',daat:null});
                    }else{
                        // 用户存在，不能注册
                        resolve({status:false,msg:'userInfo is exist',data});
                    }
                }
            });
        });
    }
    /*
    * 完成信息入库操作
    * @param username
    * @param password
    * @param markup
    * */
    addUser(username,password,markup=''){
        let memberObj=new MembersModel({username,password:md5(password),markup});
        return memberObj.save();  // 返回值Promise
    }

    /*
    * 检测前台会员信息
    * @param username
    * @param password
    * @return {Promise}
    * */
    checkLoginUser(username,password){
        return new Promise((resolve,reject)=>{
            MembersModel.findOne({username}).exec((error,data)=>{
                if(error){
                    // 系统
                    reject({status:false,msg:error,data:null});
                }else{
                    if(!data){
                        // 用户不存在
                        resolve({status:false,msg:'failure not found',data:null});
                    }else {
                        // 用户名存在，密文比较
                        if(data.password===md5(password)){
                            resolve({status:true,msg:'login success',data:data});
                        }else {
                            // 密码不正确
                            resolve({status:false,msg:'failure password error',data:null});
                        }
                    }
                }
            });
        });
    }
}

module.exports=MemberModel;