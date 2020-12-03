import request from './request.js'

/*
完成对电影相关的接口的编写
*/

/*
* 1. 正在热映的接口编写
*   发网络请求 axios
* */

// 接口地址都是有一个固定的接口前缀的

// 开发的过程中一般前缀都是单独配置，还有请求头信息也是单独配置
export function getHotingMovie() {
    let url='/gateway?cityId=440100&pageNum=1&pageSize=10&type=1&k=1631023';
    return request.get(url);  // 返回的是一个promise对象
}

export function getComingMovie() {
    let url='/gateway?cityId=440100&pageNum=1&pageSize=10&type=2&k=522055';
    return request.get(url);
}