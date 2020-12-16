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