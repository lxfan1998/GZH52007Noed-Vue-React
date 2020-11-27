# （Week1 Day2上午）

# 课程目标
1.npm包管理器
2.express学习
3.mongodb学习

# npm包管理器
```shell
npm install monent

```
npm是一个包管理器，可以帮开发者管理JavaScript的第三方的代码文件。

网址：npmjs.org

+ 单个文件我们叫做模块（CommonJS）
+ 多个模块一般我们称之为包（package）（更加快速方便地组织代码）

# npm的使用
> npm软件随着nodejs安装自带的。

+ npm init -y  初始化一个包，生成一个pacage.json文件，该文件用于记录项目开发中地信息（1.项目的名称  2.项目的描述  3.项目地开发者信息，联系邮箱，仓库地址  4.项目开发中依赖地其他的包），一般我们将该文件成为项目的身份证。这个命令执行一次即可。（-y并不是必须的，如果不加-y，会有交互式的命令让我们选择）

+ npm install pacageName  安装一个包
    - npm i packageName  简写
+ npm uninstall pacageName  卸载一个包
+ npm update pacageName  更新一个包

# npm使用的注意事项
早先使用的npm进行包管理的时候，下载是很慢的
+ 用户网速慢
+ npm管理的包的服务器是国外（npmjs.org）
-切源（把npm的下载服务器转换到国内）（比较好用的是淘宝）
```shell
npm config set registry http://registry.npm.taobao.org
```

- 使用淘宝提供的一个cnpm的命令来替代npm（这个命令只需要执行一次）
```shell
npm install -g cnpm --registry=https://registry.npm.taobao.org
```
注意：-g是global的简写，代表是全局安装，一般这种安装后，会提供一个执行的命令，一般这个都是一个工具，辅助开发者做一些事情，这个命令是可以在任意窗口下执行的。

建议：尽量不要使用cnpm，一般做切源操作即可（用cnpm可能会出现一些错误）。

- 使用一个更加先进的包管理器：yarn。yarn是Facebook出的一个新的包管理器，旨在取代npm。

+ npm软件的设计有一定的缺陷

# yarn的基本使用
> yarn是Facebook出的一个新的包管理器，旨在取代npm。

+ yarn init -y  初始化操作
+ yarn add package  安装一个包
+ yarn remove package  卸载一个包
+ yarn upgrade package  升级一个包
+ yarn global add package  安装一个工具包

注意：后期大部分的时间我们使用的yarn包管理器，现在使用npm管理的包，全部都可以使用yarn管理，只是习惯使用yarn，yarn更加好用，后起之秀。

npm和yarn早期都是为了管理后端开发的包。但是由于太好用，npm和yarn也可以管理前端的包，例如jQuery、bootstrap。
但是也有专门管理前端的包管理器
- bower


# 注意事项
如果使用`npm install -g package`或者`yarn global add package`安装全局包的时候，需要使用的超级管理员的身份启动黑窗口（搜索cmd命令行-->右键-->以管理员身份运行）。

# npm协同开发
用yarn安装依赖会比npm快很多，尤其是需要安装很多依赖的时候。

package.json里面的script可以写多条命令，根据使用需求添加命令。
script里面是key值后面跟命令和脚本文件，使用`npm run key值`来运行脚本文件。
```shell
    "scripts": {
        "start": "node app.js",
        "dev": "node dev.js",
        "test": "node test.js",
        "abc": "node abc.js"
    },
```

拿到文件后，第一步先用yarn安装依赖，第二部去看package.json的script，查看咱们启动文件。

# yarn协同开发
运行脚本文件时不用加run，直接用`yarn key值`。

# http核心模块
nodejs的核心模块http。

# browsersync
Browsersync能让浏览器实时、快速响应文件更改（html、js、css、sass、less等）并自动刷新页面。
## 安装browsersync
```shell
    npm install -g browser-sync
```

## 使用browsersync
网址：http://www.browsersync.cn/

### 静态网站
1.如果您想要监听.css文件, 您需要使用服务器模式。 BrowserSync 将启动一个小型服务器，并提供一个URL来查看您的网站。
--files 路径是相对于运行该命令的项目（目录） 
```shell
    browser-sync start --server --files "css/*.css"
```

2.如果您需要监听多个类型的文件，您只需要用逗号隔开。例如我们再加入一个.html文件
--files 路径是相对于运行该命令的项目（目录） 
```shell
    browser-sync start --server --files "css/*.css, *.html"
```
3.如果你的文件层级比较深，您可以考虑使用 **（表示任意目录）匹配，任意目录下任意.css 或 .html文件。 
```shell
    browser-sync start --server --files "**/*.css, **/*.html"
```

### 动态网站
1.如果您已经有其他本地服务器环境PHP或类似的，您需要使用代理模式。 BrowserSync将通过代理URL(localhost:3000)来查看您的网站。
主机名可以是ip或域名
```shell
    browser-sync start --proxy "主机名" "css/*.css"
```

2.在本地创建了一个PHP服务器环境，并通过绑定Browsersync.cn来访问本地服务器，使用以下命令方式，Browsersync将提供一个新的地址localhost:3000来访问Browsersync.cn，并监听其css目录下的所有css文件。
```shell
    browser-sync start --proxy "Browsersync.cn" "css/*.css"
```

（尝试了但是没成功）

# （Week1 Day2下午）

# 2.express学习
> express是一个底层使用http模块，封装的一个web库，可以快速地让开发者构建自己的web项目。

同类型的产品有：
+ koa（也是express的原班人马进行开发）使用ES6、ES7高级特性进行编写，写出来的代码更加优雅简洁。
+ eggjs（阿里开发出来的一款专注于做大型web项目的库，它的开发思想完全遵循后端的MVC(MVC还有一个变种MVVM)的开发思想）。

## 安装和使用
安装命令：`npm install express --save`或者`yarn add express`，--save可以省略。
引入：`const express = require('express');`
得到一个服务器实例`http.createServer();`


# Postman
+ 专门实现url地址进行调试的，后期做api接口开发的时候要使用，以及前后端分离要使用。
+ 不是浏览器，只是实现了浏览器的一部分功能。
+ 借助这个工具，可以实现各种http请求的方法。后期做接口开发的时候，服务器写了很多代码，需要给一些其他的用户，比如像Android、iOS开发的时候，就可以用
Postman进行调试。

# art-template
> art-template 是一个简约、超快的模板引擎。

> 它采用作用域预声明的技术来优化模板渲染速度，从而获得接近 JavaScript 极限的运行性能，并且同时支持 NodeJS 和浏览器。

官方网址：http://aui.github.io/art-template/zh-cn/docs/

## 语法
```shell
    {{each target}}
        {{$index}} {{$value}}
    {{/each}}
```
+ target：要遍历的那个复合数据
+ $index：target的下标
+ $value：target里面的每一个元素

# 3.mongodb学习

## 数据库
+ mysql（用得比较多）
+ SQLserver
+ db2
+ oracle
+ MongoDB（芒果）
......

## MongoDB
> MongoDB是数据库，存储数据的仓库。

## 数据分类
+ 关系型数据库
    + mysql
        + 行和列构成的二维表（table）
        + sql（结构化的查询语句）
+ 非关系型数据库（nodejs+MongoDB（j方式的api操作））
    + MongoDB
        + key=value（键值对）构成hash表
        + 没有sql，使用官方api函数


## 安装
官方网址：https://www.mongodb.com/try/download/community

注意版本和系统

## 使用
安装目录下/MongoDB/Server/4.2/bin：
> MongoDB是c/s架构软件（软件有两种架构一种是c/s一种是b/s）。

1. s：server，必须先运行，监听一个端口（27017），开启服务。命令：mongodb.exe（且必须在/MongoDB/Server/4.2/bin目录下执行命令行）。
2. 使用客户端操纵服务器端（只能通过客户端操纵服务器端，前提是服务器开启了）。

+ 命令行（一定要在/MongoDB/Server/4.2/bin目录下）
    + mongod.exe：
    开启服务器（端口号27017），c/s架构中，s（服务器）是不能关闭的，关闭了会导致客户端无法操作。
        + 报错：
        ```
        sexception in initAndListen: NonExistentPath: Data directory C:\data\db\ not found. Create the missing directory or specify another path using (1) the --dbpath command line option, or (2) by adding the 'storage.dbPath' option in the configuration file., terminating
        ```
        + 解决方法：直接在C盘下创建一个文件夹，命名为data，然后再data文件夹里再建一个文件夹，命名为db。
               
    + mongo.exe：打开客户端。