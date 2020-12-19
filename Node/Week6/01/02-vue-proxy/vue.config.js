module.exports = {
    devServer: {
        // 目标服务器，指的是需要跨域请求的那台服务器
        // http://localhost:3000/api/v1/movie/list
        // proxy: 'http://localhost:3000/api/v1/movie/list'
        // 但是这个其实是类似之前的同域代理服务器完成跨域请求
        proxy: {
            // 凡是以“/api”开头的请求，都转发到http://localhost:3000/去
            // 然后拼接：http://localhost:3000/api/v1/movie/list
            // 改成“/proxyapi"之后，需要增加pathRewrite改写url地址
            '/proxyapi': {
                target: 'http://localhost:3000/',
                ws: true,  // websocket协议：支持
                changeOrigin: true,  // http协议：支持
                pathRewrite:{'^/proxyapi':'/api'},  // 可以改写我们的url地址
            },
        }
    }
}