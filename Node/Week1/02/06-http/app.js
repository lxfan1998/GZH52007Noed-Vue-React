// 使用nodejs核心的http模块搭建一个web服务器，提供网页服务
const http=require('http');

// 1.createServer接收一个函数作为参数，一旦请求到来，该函数执行
// 2.(request,response)=>{}回调函数接收两个参数。参数request代表请求头信息；参数response代表响应头信息
const server=http.createServer((request,response)=>{
    console.log(request.url);  // 获取请求的url地址
    console.log(request.method);  // 获取请求的方式

    if(request.url=='/member'){
        response.write(request.url+' member list');
    }else if(request.url=='/about'){
        response.write(request.url+' about list');
    }else{
        response.write('404 not found!');
    }

    // response.write('hi nodejs!');  // 代表是服务器给浏览器的响应，而且write可以调用多次
    // response.write('hi nodemon!');

    // 最后
    // 问题&解决办法
    // 1.默认情况下，修改服务器代码后，需要使用nodejs重新执行该文件代码
    // 安装一个nodemon全局包
    // yarn global add nodemon，安装完成后会给我们提供一个叫做nodemon的命令，以后使用node命令的地方，全部换成nodemon，可以监视文件的变化，一般文件内容更新，立马重新加载文件里面的代码。

    // 2.无论地址栏输入任何url地址，看到的内容都是一致的
    // 加if做判断

    // 3.修改代码希望浏览器可以自动刷新
    // Browsersync能让浏览器实时、快速响应文件更改（html、js、css、sass、less等）并自动刷新页面。http://www.browsersync.cn/
    // npm install -g browser-sync
    response.end();  // 结束
});

const port=8080;
// 端口可写的范围：0~65535。1~1024一般给操作系统使用，不建议开发者自己使用，开发者使用1024以后的端口。一个服务占据一个端口（区分某个服务可以通过端口区分，当一个端口被某个占用，其他的服务器就不能使用该端口）。

server.listen(port,()=>{
    console.log('server is runnimg at port:'+port);
})