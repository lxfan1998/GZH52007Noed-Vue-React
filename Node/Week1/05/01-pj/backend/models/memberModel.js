const express=require('express');

class MovieModel{
    constructor(){

    }

    /* 
        前台会员注册的时候，根据用户名插卡记录是否存在，如果存在，则不能注册；不存在才可以注册
        @params username
        @returns password
        @param marup
    */
    addUser(username,password,markup=''){
        let memberObj=new MemberModel({username})
    }

}

module.exports=MModel;