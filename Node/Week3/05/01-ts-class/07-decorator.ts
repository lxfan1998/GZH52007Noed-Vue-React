// 编写一个api工具类，好比这个是sendcloud.net

// https://www.sendcloud.net/doc/

// 版本升级 v2版本接口
// http://t1.com/api/v1/send/message

function FactoryDecorator(params:string) {
    return function (target:any) {
        // target进行扩充
        target.prototype.get
    }
}

class RequestApi {
    url:string;

    constructor(url:string){

    }

    get(){
        // 发送get请求
        console.log(this.url,'发送get请求');
    }

    post(data:any){
        // 发送post请求
        console.log(this.url,'发送post请求');
    }
}
