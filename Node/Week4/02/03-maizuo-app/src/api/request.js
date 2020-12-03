import axios from 'axios'
/* 对axios进行单独的配置操作 */
const instance=axios.create({
   // 1. 配置接口的基准地址，不变的域名地址
    baseURL: 'https://m.maizuo.com',
    // 2. 配置头信息
    headers:{
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1606880294749433138446337","bc":"440100"}',
        'X-Host': 'mall.film-ticket.film.list',
    }
});

// 2. 后期如果我们需要对请求或者是响应做拦截操作
// 拦截是为了做统一处理
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // 比如判断之类的
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    // 200、201等提示
    // console.log('instance respomse',response);
    return response.data.data;  // 直接把接口里面的数据响应到调用处。手工的操作

    // return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default instance;