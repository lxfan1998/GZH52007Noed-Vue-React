
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

# 构建websocket客户端