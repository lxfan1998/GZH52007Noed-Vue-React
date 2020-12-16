
# Week1Day5上午
1. 电影网站完善
2. jwt的基本使用
3. websocket的基本使用

---

# 1. 电影网站完善
1. 注册
2. 登录
3. 评论列表
4. 评论添加

## token
token：令牌环
+ 用户的信息
+ 令牌合法性
+ 令牌时效性

用json web token生成token，这种技术我们称之为jwt。

### 安装
`yarn add jsonwebtoken`

### 使用
```shell
    var jwt = require('jsonwebtoken');
    // 参数1：信息 参数2：密钥，随机字符串，混淆，保密。颁发和验证的时候要一样
    // 业内规范：一般token的有效期为2h
    var token = jwt.sign({ foo: 'bar' }, 'shhhhh',{ expiresIn: '2h' });
    
    // 颁发
    console.log(token);
    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2MDc2MDQ0MjN9.xrwQTdGpp4Xve-f06KnBI5DJ-q9Z7iDCUdX8zT4CED0 加密后的token
    
    // 校验 1. 信息 2. 合法性 3. 有效期
    var decoded = jwt.verify(token, 'shhhhh');
    console.log(decoded);  // { foo: 'bar', iat: 1607846541 }
```

# 思考
b/s

客户端和服务端通信方式有哪些？
+ ajax
    + cors

+ jsonp（在ajax出现之前就已经出现了）

+ iframe

+ flash（actionJavascript）一般用在h5游戏里（比如白鹭引擎，cocos2d（js|lua|c++））

上面得通信反射光hi里面，都只能实现客户端主动请求，服务器端进行响应。

但是有的时候我们有一些比较特殊的需求，需要服务器主动给客户端推送信息
+ 在线聊天（IM）（比如webqq、wechat、在线客服）
+ 在线网页游戏

这些服务器主动向客户端推送信息的技术叫做comet技术（推技术）。

要实现这些推技术可以使用哪些方式？
+ websocket
+ 长链接
+ 轮询（伪实现，使用ajax+定时器不断地向服务器发送请求）（比如ajax聊天室）

# websocket简介
websocket是一门可以实现客户端和服务器建立连接后，进行相互通信的技术。websocket技术是基于http协议实现的，websocket的设计者在http协议的基础上，进行了额外的补充，形成websocket协议。

要学习websocket技术，必须：
+ 搭建websocket服务器
+ 搭建websocket客户端

# websocket服务器
参考网址：https://www.runoob.com/html/html5-websocket.html

借助一个第三方的库：socket.io

注意版本不同可能会导致不兼容，一般都是版本太高了，删除高版本重新安装低版本的就好了。

# 构建websocket客户端


```shell
    // 构建一个websocket服务器
    var express = require('express');
    var app=express();
    
    // 设置一个静态资源服务器
    app.use(express.static('public'));
    
    // 构建了一个http web服务器
    var http = require('http').createServer(app);
    
    // 构建了一个web socket服务器，提供网页服务
    var io = require('socket.io')(http);
    
    // 使用web服务功能
    // http://localhost:9300/
    app.get('/', (req, res) => {
      res.send('websocket ok!');
    });
    
    // websocket服务器，提供websocket连接服务
    io.on('connection', (socket) => {
        // 参数socket代表当前的连接对象
        // 一旦有客户端连接服务器端，connection回调函数就执行
        //socket.on('sendMsg')一旦监听，如果客户端有通过emit触发该事件，回调函数执行。参数data代表客户端传递的数据。
        socket.on('sendMsg',function (data) {
            console.log('data from client'+ socket.id,data);
        });
        // 服务器端主动给客户端推送信息
        setInterval(function () {
            socket.emit('sendMsgToClient',(new Date()) + ':' + Math.random());
        },1000);
    
      console.log('a user connected');
    });
    
    // http服务器监听9300端口
    http.listen(9300, () => {
      console.log('listening on *:9300');
    });
```

# websocket聊天室

02-websocket-chat

# Layui
官方文档：https://www.layui.com/doc/

示例-->内置模块-->即时通讯

## LayIM即时通讯
网址：https://www.layui.com/demo/layim.html

注意：LayIM 是基于 layui 的一款独立的付费组件，它是网页即时通讯 UI 解决方案，您购买授权后得到的是一套前端源代码，而服务端程序需自写。