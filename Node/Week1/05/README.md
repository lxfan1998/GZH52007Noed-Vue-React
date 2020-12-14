
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

