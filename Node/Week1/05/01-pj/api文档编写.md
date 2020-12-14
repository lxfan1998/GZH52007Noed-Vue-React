# 简介

随着移动客户端的流行，后端系统需开放越来越多的 API 来供客户端使用。API文档的编写和管理是一个挑战，随着API不断变化，文档必须及时更新，但编写文档也是个不小的负担。

一个比较好的做法，就是将文档放在代码里，开发人员编写代码时同时修改文档。然后通过工具从代码中抽出文档，并生成方便用户阅读的格式。此类工具早已存在，比如Java中的javadoc。这里我们要介绍一个非常轻量级的，适用于几乎所有流行语言的，针对Restful API的文档自动生成工具－apiDoc。


[官网](https://apidocjs.com/)


# 安装
apiDoc基于NodeJS实现，所以你需先有NodeJS及NPM环境。然后通过：
```
$ npm install apidoc -g
```
全局安装apiDoc。之后，你就可以执行下面的命令来生成文档：
```
$ apidoc -i src -o dest
```
该命令从当前工作目录的”src”子目录下读取所有代码文件，并从中抽取apiDoc的文档注释，然后生成HTML格式的文档，并保存在”dest”子目录下。执行完后，用户就可以打开”dest”下的”index.html”来阅读文档。

“apidoc”命令支持许多参数，常用的有：
- -t template
    - 根据”template”子目录下的模板生成文档，缺省时采用apiDoc的默认模板。

- -f ".*\\.py$"
    - 只解析Python代码。-f后的参数按正则匹配，可以设置多个-f参数。

- -h
    - 显示该命令帮助信息。

# 配置文件
运行apidoc前，你需先有一个配置文件，放在代码根目录下（如上例中的src目录），取名为”apidoc.json”。下面是一个标准配置文件的例子：
```
{
  "name": "电影网站接口文档",
  "version": "0.1.0",
  "description": "公司内部文档，请勿外传",
  "title": "h5.com",
  "url" : "https://movie.52kfw.cn/index.php/api/movie",
  "sampleUrl": "https://test.52kfw.cn/index.php/api/movie",
  
  "header": {
    "title": "简介"
  },
  "footer": {
    "title": "底部"
  },

  "template": {
    "withCompare": true,
    "withGenerator": false
  }
}
```

- name, version, description
    -这三个配置项的内容会显示在生成文档的最上方，其中name即整个文档的大标题。

- title
    - 网页的标题，显示在浏览器标签上。

- url
    - 文档中每个API地址的前缀。

- sampleUrl
    - 当有此项时，每个API文档的最后会有Sample Request测试部分。该配置项是测试API地址的前缀。

- header, footer
    - 页面的头和尾。当多个页面都有相同的头和尾时，这个配置项就非常有用。子配置项中

- title
    - 页面左边菜单栏中显示的标题。

- filename
    - 指向页头或页尾的模板文件，apiDoc使用的是Markdown文件。

- template
    - withCompare
        - 生成的文档有版本比较功能。后面会介绍。默认为”true”。
    - withGenerator
        - 生成的文档页尾带有一段文字，表示这个文档是由apiDoc生成的，加上这个代表对作者的尊重吧。默认为”true”。
让我们简单写下页头和页尾的Markdown文件，并将它们同”apidoc.json”放在一起，即”src”目录下。

- header.md
```
## 简介
> 本文档仅限内部使用切勿外传。

- email: gogery@163.com
- wx: superve
```

- footer.md
```

Copyright © 2017 - 2019 [h5.com](http://www.h5.com/) All Rights Reserved

```
# API文档注释
apidoc 根据我们代码里面特定格式的数据生成文档。

JavaScript 示例：
```
/**
 * 
 * @api {post} /register 用户注册接口
 * @apiName  register
 * @apiGroup 用户管理 
 * @apiVersion 0.1.0
 * @apiDescription 完成用户注册操作
 *
 * @apiPermission admin
 * 
 * @apiParam {string} username 用户名
 * @apiParam {string} password 密码
 * @apiParam {string} email 邮箱
 * @apiParam {string} phoneNumber 手机号
 * 
 * @apiSuccess (success-200) {String} code 响应状态码
 * @apiSuccess (success-200) {String} msg 响应描述
 * @apiSuccess (success-200) {Object} data 返回数据，成功的时候才存在
 * @apiSuccess (success-200) {int} data.count  记录总数
 * @apiSuccess (success-200) {Object[]} data.list 记录列表
 *
 * 
 * @apiSuccessExample {json} 成功注册-示例:
 * 成功注册
 * HTTP/1.1 200 OK
 * {
 * 	code:0,
 *  msg:'success',
 *  data:{}
 *  }
 *  
 *  @apiError (failure-500) {String} code 响应状态码 
 *  @apiError (failure-500) {String} msg 提示信息 
 *  
 *  @apiErrorExample {json} 失败-示例:
 *  这是出现错误时返回结果示例
 *  HTTP/1.1 404 Not Found
 *  {
 *   code:1,
 *   msg:'not found',
 *   }
 */
function register() {
	
}




/**
 * 
 * @api {get} /list 用户列表接口
 * @apiName  useList
 * @apiGroup 用户管理 
 * @apiVersion 0.1.2
 * @apiDescription 用户列表最新接口
 * 
 * @apiParam {int} page 页码 
 * @apiParam {int} size 每页数量 
 * @apiParam {string} orderBy 排序字段 
 * 
 * @apiSuccess (success-200) {String} code 响应状态码
 * @apiSuccess (success-200) {String} msg 响应描述
 * @apiSuccess (success-200) {Object} data 返回数据，成功的时候才存在
 * @apiSuccess (success-200) {int} data.count  记录总数
 * @apiSuccess (success-200) {Object[]} data.list 记录列表
 * 
 * @apiSuccessExample Success-Response:
 *  这是返回结果示例
 *  HTTP/1.1 200 OK
 * {
 * code:0,
 * msg:'success',
 * data:{}
 *  }
 *
 * @apiUse UserNotFoundError
 */

function useList() {
	
}

```
可以看到，文档注释主要是由一系列以@符号开头的参数组成：

- @api {get} /users/:user_id Request User Information
    - {get}定义了HTTP请求是GET
    - API地址是/users/:user_id
    - 文档中API的名称是Request User Information

- @apiVersion 0.1.0
    - API的版本号，默认显示在API名称的右方。该参数可用来在不同的版本之间做比较，后面会介绍

- @apiName GetUser
    - API名称，不影响文档

- @apiGroup User
    - API分组名，文档内容中和菜单栏中同一组的API会在一同显示，方便阅读

- @apiPermission admin
    - API的访问权限，文档中默认会API地址下面显示。没有权限要求的话，此项可以省略。

- @apiDescription API to get the user information.
    - API的详细描述，默认显示在API名称的下方

- @apiExample Example usage:
    - API调用示例，该参数的下一行就是示例的内容，直到有空行结束。可以定义多个@apiExample，默认在文档中会以标签形式列出，标签名就是”Example usage:“。

- @apiParam {Number} user_id The user’s unique ID.
    - API参数字段介绍，”{Number}“定义了字段类型，”user_id”是字段名称，后面则是字段描述。可以定义多个@apiParam字段。

- @apiSuccess {String} name Name of the User.
    - API成功后返回的字段，如同@apiParam，”{String}“定义了字段类型，”name”是返回字段名称，后面则是字段描述。可以定义多个@apiSuccess字段。

- @apiSuccessExample {json} Success-Response:
    - 显示一个API成功返回后Response响应的示例，”{json}“代表响应体是JSON类型。该参数的下行就是响应体内容，直到有空行结束。可以定义多个@apiSuccessExample，默认在文档中会以标签形式列出，标签名就是”Success-Response:“。

- @apiError UserNotFound User was not found.
    - API发生错误后的返回，”UserNotFound”是错误名称，后面则是错误描述。可以定义多个错误返回。

- @apiErrorExample {json} Error-Response:
    - 显示一个API错误返回后Response响应的示例，”{json}“代表响应体是JSON类型。该参数的下行就是响应体内容，直到有空行结束。可以定义多个@apiErrorExample，默认在文档中会以标签形式列出，标签名就是”Error-Response:“。

- @apiSampleRequest http://localhost:5000/users/:user_id
    - 文档提供的API Sample测试的地址。其实在”apidoc.json”中配过”sampleUrl”项后，此参数即可省去，除非这个API的测试URL比较特殊，需特别指定。


# 参数信息重用

很多时候，不同的API有着相同的文档内容，比如相同的成功响应示例，或者相同的错误返回。当API非常多时，一个变化需要改动多处的API文档，很麻烦。能不能像写C代码一样，定义一个宏，然后在API文档注释中引用这个宏呢？答案是有，在apiDoc中，这叫继承(inherit)。首先，你要在源代码注释中用@apiDefine定义这个宏。

比如，下面的注释，就是把上例中UserNotFound错误及其响应示例定义在一个名叫UserNotFoundError的宏中。此后，所有需要使用这段文档的地方，就通过 `@apiUse UserNotFoundError` 引入这个宏即可
```
/**
 *  @apiDefine UserNotFoundError
 *  
 *  @apiError error 这里错误描述 
 *  
 *  @apiErrorExample {json} 错误示例:
 *  当请求错误的时候，出现如下的结果：
 *  HTTP/1.1 404 Not Found
 *  {
 *   code:1,
 *   msg:'list not found',
 *  }
 */

/**
 * 
 * @api {post} /cxpt 分类列表
 * @apiName  categoryList
 * @apiGroup Category 
 * @apiVersion 0.1.0
 * @apiDescription 分类列表展示
 * 
 * @apiParam {string} page 页码 
 * @apiParam {string} size 每页获取数量 
 * 
 * @apiSuccess {String} code 返回参数描述，简单描述一下个返回参数
 * @apiSuccess {String} msg 返回参数描述，简单描述一下个返回参数
 * @apiSuccess {Object} data 返回参数描述，简单描述一下个返回参数
 * @apiSuccess {int} data.count 返回参数描述，简单描述一下个返回参数
 * @apiSuccess {Object[]} data.list 返回参数描述，简单描述一下个返回参数
 * @apiSuccessExample Success-Response:
 * 这是返回结果示例
 * HTTP/1.1 200 OK
 * {
 * code:0,
 * msg:'success',
 * data:{}
 *  }
 *
 *  
 * 	@apiUse UserNotFoundError
 *  
 */
function categoryList() {
	
}

```

当宏定义比较多时，怎么管理呢？我们可以把宏定义挪到代码以外去。让我们在”src”根目录下建立一个文件”_apidoc.js”。然后把上面UserNotFoundError的定义移到这个文件中。

src/_apidoc.js
```
/**
 *  @apiDefine UserNotFoundError
 *  
 *  @apiError error 这里错误描述 
 *  
 *  @apiErrorExample {json} 错误示例:
 *  当请求错误的时候，出现如下的结果：
 *  HTTP/1.1 404 Not Found
 *  {
 *   code:1,
 *   msg:'分类信息不存在',
 *  }
 */

```

执行下apidoc命令，看下效果吧。是不是和上例中一样？实际项目中，建议尽可能把所有的宏定义都写在”_apidoc.py”中。还有人会问，那这个文件太大了怎么办？你可以分出多个文件，记得给一个有意义的命名即可。

宏定义中加了@apiVersion版本信息，这说明这段宏只对特定版本有效。
src/_apidoc.js
```
/**
 *  @apiDefine UserNotFoundError
 *  
 *  @apiVersion 0.1.0
 * 
 *  @apiError error 这里错误描述 
 *  
 *  @apiErrorExample {json} 错误示例:
 *  当请求错误的时候，出现如下的结果：
 *  HTTP/1.1 404 Not Found
 *  {
 *   code:1,
 *   msg:'分类信息不存在',
 *  }
 */

```

# 定义访问权限
上面我们讲到@apiPermission参数可以定义当前API的访问权限。如果文档的读者想了解更多关于这个权限的信息呢？我们可以通过@apiDefine来定义每个权限的详细信息。
src/_pri.js
```

/**
 * @apiDefine admin 管理员权限
 * 
 * 注意该接口的必须要使用管理员的权限才可以使用
 * 
 * @apiVersion 0.1.0
 * 
 * 
 */

```

加上这段定义后，在文档出现”admin”权限名时，后面会有个“i”符号。鼠标点击后就会弹出”admin”的详细信息。

# 历史版本比较
当API更新时，不用再耗费体力查找到底哪里改动了，直接在文档上比较下就知道了。当在文档注释中定义多个版本后，生成后的文档页面中版本号是一个下拉列表。

点击其中一个历史版本，页面就会出现比较信息，通过高亮，删除线等来告诉你哪里被改动过了。
```
/**
 * 
 * @api {get} /cxpt 用户列表接口
 * @apiName  useList
 * @apiGroup Users 
 * @apiVersion 0.1.0
 * @apiDescription 简单描述这个API方法吧
 * 
 * @apiParam {int} myparam 参数描述，简单描述一下个参数 
 * 
 * @apiSuccess {String} code 返回参数描述，简单描述一下个返回参数
 * @apiSuccess {String} msg 返回参数描述，简单描述一下个返回参数
 * @apiSuccess {Object} data 返回参数描述，简单描述一下个返回参数
 * @apiSuccess {int} data.count 返回参数描述，简单描述一下个返回参数
 * @apiSuccess {Object[]} data.list 返回参数描述，简单描述一下个返回参数
 * @apiSuccessExample Success-Response:
 *  这是返回结果示例
 *  HTTP/1.1 200 OK
 * {
 * code:0,
 * msg:'success',
 * data:{}
 *  }
 *  
 *  @apiError error 这里错误描述 
 *  @apiErrorExample {json} Error-Response:
 *    这是出现错误时返回结果示例
 *  HTTP/1.1 404 Not Found
 *  {
 *   code:1,
 *   msg:'user not found',
 *   }
 */

/**
 * 
 * @api {get} /cxpt 用户列表接口
 * @apiName  useList
 * @apiGroup Users 
 * @apiVersion 0.1.1
 * @apiDescription 简单描述这个API方法吧
 * 
 * @apiParam {int} page 分页页码，如果不传递，默认为：1 
 * 
 * @apiSuccess {String} code 返回参数描述，简单描述一下个返回参数
 * @apiSuccess {String} msg 返回参数描述，简单描述一下个返回参数
 * @apiSuccess {Object} data 返回参数描述，简单描述一下个返回参数
 * @apiSuccess {int} data.count 返回参数描述，简单描述一下个返回参数
 * @apiSuccess {Object[]} data.list 返回参数描述，简单描述一下个返回参数
 * @apiSuccessExample Success-Response:
 *  这是返回结果示例
 *  HTTP/1.1 200 OK
 * {
 * code:0,
 * msg:'success',
 * data:{}
 *  }
 *  
 *  @apiError error 这里错误描述 
 *  @apiErrorExample {json} Error-Response:
 *    这是出现错误时返回结果示例
 *  HTTP/1.1 404 Not Found
 *  {
 *   code:1,
 *   msg:'user not found',
 *   }
 */

function fn() {
	
}

```


怎么来添加这历史版本信息呢。要做的事情很简单，就是每次API文档改动时，把原来的API文档注释复制备份到_apidoc.js中，然后再修改。修改完后别忘了更新版本号就行。

然后运行下，就可以做版本比较了。@apiDefine宏定义也可以有历史版本，要注意，这个版本号是同API注释的版本号相匹配的。

比如，假设我们在上例GET方法”0.0.1”版本注释中加入@apiUse UserNotFoundError，这个时候执行apidoc命令会报错。

因为它找不到”0.0.1”版本的@apiDefine UserNotFoundError定义（前面的例子中我们指定的版本号是@apiVersion 0.1.0）。所以，必须要补上”0.0.1”版的@apiDefine UserNotFoundError命令才能运行成功。



# 扩展
## 让apidoc可以输入中文

1. 找到自己npm安装后apidoc的路径，并打开api_group.js (node_modules\apidoc\node_modules\apidoc-core\lib\workers\api_group.js)
2. 注释掉//group = group.replace(/[^\w]/g, '_')
3. 你用来生成文档的源文件必须是UTF-8，不然后生成后代码也是乱码
