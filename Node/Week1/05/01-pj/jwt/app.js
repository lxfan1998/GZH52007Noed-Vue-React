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