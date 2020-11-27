# （Week1Day3上午）

# 课程目标
1. mongoose库
2. 使用nodejs+MongoDB+mongoose实现一个电影网站系统（前后端+接口联调）

# 1. mongoose库

mongoose是一个使用npm管理的包，可以让我们使用程序的方式去操作mongodb数据库。

mongodb数据库是一个c/s架构的软件。
+ s 服务器先启动（27017）
+ c 客户端连接操作
    + mongo.exe命令行
    + robot3t 可视化图形界面操作（掌握）
    + mongoose程序操作数据库

## mongoose库使用
官方文档地址：http://www.mongoosejs.net/docs/schematypes.html

参考网址：https://www.cnblogs.com/oxspirt/p/10235284.html

```shell
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
```

# 2. 使用nodejs+MongoDB+mongoose实现一个电影网站系统（前后端+接口联调）

## 项目演示
### 前台
https://h5.woaikaifa.com

### 后台

### 接口文档
https://h5.woaikaifa.com/apis/

最新电影接口：https://h5.woaikaifa.com/api/v1/movie/top?page=1&size=10

可以到https://www.bejson.com/把数据转换成json格式。

```json
    
```

## 项目本地部署（作为参考原型）

### 数据库的导入
在C:\Program Files\MongoDB\Server\4.2\bin目录下输入cmd命令：
```
    mongorestore.exe -d movieCms --dir F:\Node-Vue-React\GZH52007Noed-Vue-React\Node\Week1\03\02-pj-show\movieCms
```
+ mongorestore.exe：导入命令，mongodb提供的。
+ -d：database的简写，代表数据库的名称。
+ movieCms：数据库的名称，由用户自定义。
+ --dir：代表导入数据库的目录。
+ E:\GzH507\learn\week1\03\资料\movieCms\movieCms：目录，不要出现中文、空格。


### 后台的部署
后台地址：http://localhost:9000/admin/login



注意：端口号是否是9000取决于你运行项目时显示的使用的端口号，并不是固定的。

账户：admin
密码：admin88

## 前台的部署
http://localhost:9000/index.html


# 问题
+ 编程语言
+ 针对用户群体

## 什么是前台？
+ 编程语言：html+css+js，网页的静态页
+ 针对用户群体：大众

## 什么是后台？
+ 编程语言：php+Java+nodejs
+ 针对用户群体：公司内部员工

# （Week1Day3下午）
