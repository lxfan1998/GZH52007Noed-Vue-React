# XXX后台 API 接口文档

## API V1 接口说明

- 接口基准地址：`http://localhost:3000/api/v1/`
- 服务端已开启 CORS 跨域支持 
- API V1 认证统一使用 Token 认证
- 需要授权的 API ，必须在请求头中使用 `Authorization` 字段提供 `token` 令牌
- 使用 HTTP Status Code 标识状态
- 数据返回格式统一使用 JSON

### 支持的请求方法

- GET（SELECT）：从服务器取出资源（一项或多项）。
- POST（CREATE）：在服务器新建一个资源。
- PUT（UPDATE）：在服务器更新资源（客户端提供改变后的完整资源）。
- PATCH（UPDATE）：在服务器更新资源（客户端提供改变的属性）。
- DELETE（DELETE）：从服务器删除资源。
- HEAD：获取资源的元数据。
- OPTIONS：获取信息，关于资源的哪些属性是客户端可以改变的。

### 通用返回状态说明

| *状态码* | *含义* | *说明*       |
| -------- | ------ | ------------ |
| 0        | OK     | 请求成功     |
| 1001     |        | 信息不完整   |
| 1002     |        | 用户名已存在 |
| 1003     |        | 系统错误     |
| 1004     |        | 不能注册     |
| 1005     |        | 异常错误     |
| 1006     |        | 登录失败     |
| 1007     |        | token不存在  |

---

## 电影模块

### 列表接口

* 请求路径：/movie/list
* 请求方法：get
* 请求参数

| 参数名 | 参数说明       | 备注                   |
| ------ | -------------- | ---------------------- |
| page   | 页码           | 可以为空，默认为第一页 |
| size   | 每页显示的数量 | 可以为空，默认10条记录 |

* 响应参数

| 参数名    | 参数说明 | 备注 |
| --------- | -------- | ---- |
| id        | 用户 ID  |      |
| moviename | 电影名称 |      |
| director  | 导演     |      |
| actors    | 演员     |      |

* 响应数据

```json
{
	"error_code": 0,
	"reason": "成功的返回",
	"result": {
		"data": [{
			"_id": "5fbfb4ca84cb3131d0a1d80f",
			"moviename": "姜子牙",
			"director": "饺子",
			"actors": "饺子",
			"__v": 0
		}, {
			"_id": "5fc0eba5e279252f38b3a4e1",
			"moviename": "刻苦",
			"director": "客",
			"actors": "人",
			"__v": 0
		}, {
			"_id": "5fc0ec8bc0ed310d547877ea",
			"moviename": "天天天天",
			"director": "二二二",
			"actors": "一一一",
			"__v": 0
		}, {
			"_id": "5fc0f63546205e2438146035",
			"moviename": "三国",
			"director": "上",
			"actors": "下",
			"__v": 0
		}, {
			"_id": "5fc0fbc0ce5a3e1e44269aeb",
			"moviename": "天下",
			"director": "导",
			"actors": "演员1",
			"__v": 0
		}, {
			"_id": "5fc1ad8d6e98f22874c55784",
			"moviename": "ssdf",
			"director": "ss",
			"actors": "ssd",
			"__v": 0
		}, {
			"_id": "5fc1bef1e51bc22f946bdfe9",
			"moviename": "天下",
			"director": "yiyi",
			"actors": "yi",
			"__v": 0
		}, {
			"_id": "5fc1caa3e527042f20e1d532",
			"moviename": "fwfrq",
			"director": "vafv",
			"actors": "vvrv",
			"__v": 0
		}, {
			"_id": "5fce36bd00ddc23b48f3b159",
			"moviename": "一部好电影",
			"director": "李导演",
			"actors": "王晶晶",
			"__v": 0
		}]
	}
}
```

## 会员模块

### 注册接口

#### 请求url地址

```
/member/register
```



#### 请求方式

```
post
```



#### 请求参数

| 序号 | 字段       | 描述               |
| ---- | ---------- | ------------------ |
| 1    | username   | 用户名字段，必须   |
| 2    | password   | 密码字段，必须     |
| 3    | repassword | 确认密码字段，必须 |
| 4    | markup     | 个人简介，非必须   |



#### 示例

```
url:http://localhost:3000/api/v1/member/register
```

成功结果

````
{
    "error_code": 0,
    "result": {
        "data": {
            "_id": "5fd0cf21fc4bd40ec02f2549",
            "username": "丽丽",
            "password": "admin",
            "markup": "Postman测试成功",
            "__v": 0
        }
    }
}
````

失败

1、用户名存在

```
{
    "error_code": 1004,
    "reason": "userInfo is exist",
    "result": {
        "data": null
    }
}
```

2、信息不完整

```
{
    "error_code": 1001,
    "reason": "用户信息不完整",
    "result": {
        "data": null
    }
}
```



字段解释

| 序号 | 字段        | 含义       | 描述                 |
| ---- | ----------- | ---------- | -------------------- |
| 1    | error_code  | 错误状态吗 | 详情看全局返回状态码 |
| 2    | reason      | 返回描述   |                      |
| 3    | result      | 返回数据   |                      |
| 4    | result.data | 详情数据   |                      |

### 登录接口

#### 请求url地址

```
/member/login
```



#### 请求方式

```
post
```



#### 请求参数

| 序号 | 字段     | 描述                    |
| ---- | -------- | ----------------------- |
| 1    | username | 用户名，必须            |
| 2    | password | 密码（用md5加密），必须 |



#### 示例

```
url:http://localhost:3000/api/v1/member/login
```

成功结果

```json
{
    "error_code": 0,
    "reason": "login success",
    "result": {
        "data": {
            "_id": "5fd1e893178df027d4102f85",
            "username": "lili",
            "markup": "注册测试",
            "__v": 0
        },
        "token": "token"
    }
}
```

失败

1、信息不完整

```json
{
    "error_code": 1001,
    "reason": "用户信息不完整",
    "result": {
        "data": null
    }
}
```

2、用户不存在

```json
{
    "error_code": 1006,
    "reason": "failure not found",
    "result": {
        "data": null
    }
}
```

3、密码错误

```json
{
    "error_code": 1006,
    "reason": "failure password error",
    "result": {
        "data": null
    }
}
```



### 评论模块

### 评论添加接口

#### 请求url地址

```
/comment/add
```



#### 请求方式

```
post
```



#### 请求参数

| 序号 | 字段    | 描述     |
| ---- | ------- | -------- |
| 1    | movieId | 电影Id   |
| 2    | addTime | 评论时间 |
| 3    | content | 评论内容 |



#### 示例

评论成功

```json
{
    "error_code": 0,
    "reason": "评论成功",
    "result": {
        "data": {
            "_id": "5fd76847230d4b3210ea1932",
            "userId": "5fd1e893178df027d4102f85",
            "movieId": "5fbfb4ca84cb3131d0a1d80f",
            "addTime": "2020-12-14 21:27:35",
            "content": "一部好电影",
            "__v": 0
        }
    }
}
```

失败

1、信息不完整

```json
{
    "error_code": 1001,
    "reason": "评论信息不完整！",
    "result": {
        "data": null
    }
}
```

2、token不存在

```json
{
    "error_code": 1007,
    "reason": "token不存在！",
    "result": {
        "data": null
    }
}
```

3、token不合法

```json
{
    "error_code": 1009,
    "reason": "jwt malformed",
    "result": {
        "data": null
    }
}
```



### 评论获取接口

#### 请求url地址

```
/comment/list
```



#### 请求方式

```
get
```



#### 请求参数

| 序号 | 字段    | 描述   |
| ---- | ------- | ------ |
| 1    | movieId | 电影id |



#### 示例

成功

```json
{
    "error_code": 0,
    "reason": "获取成功！",
    "result": {
        "data": [
            {
                "_id": "5fd76847230d4b3210ea1932",
                "userId": "5fd1e893178df027d4102f85",
                "movieId": "5fbfb4ca84cb3131d0a1d80f",
                "addTime": "2020-12-14 21:27:35",
                "content": "一部好电影",
                "__v": 0
            },
            {
                "_id": "5fd76a26230d4b3210ea1933",
                "userId": "5fd1e893178df027d4102f85",
                "movieId": "5fbfb4ca84cb3131d0a1d80f",
                "addTime": "2020-12-14 21:35:34",
                "content": "一部好电影",
                "__v": 0
            },
            {
                "_id": "5fd76b4f230d4b3210ea1934",
                "userId": "5fd1e893178df027d4102f85",
                "movieId": "5fbfb4ca84cb3131d0a1d80f",
                "addTime": "2020-12-14 21:40:31",
                "content": "一部好电影",
                "__v": 0
            }
        ]
    }
}
```



失败

1、模型没有实例化

```json
{
    "error_code": 1010,
    "reason": "CommentModel.find is not a function",
    "result": {
        "data": null
    }
}
```



## apidoc

使用该工具我们可以在编写代码的时候，为代码增加注释，然后基于该注释可以快速地生成文档。

