// cms = content manage system 网站的后台
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/html52007cms',{ useNewUrlParser: true, useUnifiedTopology: true });

// 参数1：首字母大写（习惯）
const UserModel = mongoose.model('User', { username: String , password: String },'cms_members');

const userInfo = new UserModel({ username: 'liyang' , password: 'admin88' });

// 一般我们经常听到curd这样的字眼。curd（增删改查）
// c create  创建，增加
// u update  更新，改
// r read  都，查，retried 检索
// d delete  删除

// Promise then的第一个参数就是成功的回调，所以该回调函数的第一个参数就是当前插入成功的记录
userInfo.save().then((data) => {
    console.log('insert ok!');
    console.log(data);
    mongoose.disconnect();
});

