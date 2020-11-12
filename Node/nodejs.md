(Week1DAy1上午)

# node下载
网址：nodejs.org
下载安装包后安装（看电脑配置安装相应版本）
# node安装
cmd命令行
1、查看版本：node -v
2、切到目录：cd 要切到的目录（里面有node.exe的那个文件夹的目录）
3、输入node
4、再输入node.exe -v
5、设置-->高级系统设置-->环境变量-->编辑环境变量-->
环境变量不存在时报错：'xxx'不是内部或外部命令，也不是可运行的程序或批处理文件。
# 执行npm时
就是在执行node.cmd
# 使用node
运行js文件：node app.js
小技巧，输入node a再按Tab键，会自动补齐app.js。

(Wee1Day1下午)

# node.js里面的模块化（commonjs规范）
1、什么是模块？
> 就是一段功能代码的封装。

2、为什么要学习模块化？
> 为了代码的复用和后期的维护。

3、常见的模块化分类有哪些？
> 函数（utils.js、lodash.js）
网址：http://www.lodashjs.com/docs/lodash.uniq
> 匿名函数自执行
> ES6模块化（前端规范）
> CMD模块化(比如sea.js，作者阿里花名玉伯，淘宝大牛，也叫射雕，真名王保平，现在sea.js已经被淘汰了)
> AMD模块化（require.js）
网址：http://www.cnblogs.com/goloving/p/7711104.html
> CommonJS模块化（nodejs使用的）

4、模块化和nodejs之间的关系？
> nodejs里面的一些核心的代码使用的CommonJS规范对外进行提供的，只有掌握了CommonJS规范，才可以更好地使用nodejs提供的核心的功能（文件操作、网络功能）。

## CommonJS模块化规范
1、什么是CommonJS模块化规范
> CommonJS模块化规范是为了更加高效地组织node.js代码提出地一种编写代码的规范，使用该规范后可以更加高效组织代码，方便日后的维护和开发。

2、CommonJS规范有哪些注意事项？
+ 一个文件就是一个模块，模块里面的成员（变量、函数、类）全部是私有的（局部变量），外部无法使用，彼此（多个模块之间，多个文件之间的成员）之间完全独立。
+ 如果要吧本模块里的成员变量给到别的模块使用，则需要通过exports或者module.exports关键字暴露出来。
+ 如果要使用其他的模块，则必须要通过require先引入，只有引入后才可以使用该模块暴露出来的成员。

浏览器是没有模块的概念的。
js里面的全局变量是可以共享的。

单个暴露和多个暴露同时存在时，以多个暴露为准，单个暴露此时是失效的。

CommonJS里面的成员是私有的

在模块里面存着一些特殊的变量：module、exports、__dirname、__filename

## nodejs里面的模块分类
nodejs底层使用CommonJS规范组织代码。将我们的代码分成三类
+ nodejs提供的核心代码，一般称之为核心模块（官方文档查看）
+ 开发者自己开发的功能模块（比如m1js、Person.js）
+ 第三方爱好者提供的核心模块，一般是放置在npmjs.org网站上面，需要借助npm包管理器管理的模块

### 核心模块
- path 路径处理
- fs 文件系统打交道（可以做磁盘文件的增删改查）
- http 网络

- 自己编写的模块
- fs核心模块

# 4.npm包管理器

TODO：

## 需求：
1.把时间戳转换为时间格式字符串
- 1970年到现在的秒数（535684896）-->（xxxx-xx-xx xx:xx:xx）（用系统提供的DAte()可以实现，但是比较麻烦）
- 希望把数字转换成大写（120）-->（壹佰贰拾元）

## 实现思路
1.自己写（低效）
2.百度查别人的代码，自己改（低效）
3.专门的网站提供一些做好的代码

## npm包管理器
+ 安装
+ 卸载
+ pacage.json文件的含义
+ 全局包和局部包的区别
+ yarn包管理器
+ bower包管理器


（Week1 Day2上午）

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

（Week1 Day2下午）

# 2.express学习
> express是一个底层使用http模块，封装的一个web库，可以快速地让开发者构建自己地web项目。

同类型的产品有：
+ koa（也是express的原班人马进行开发）使用ES6、ES7高级特性进行编写，写出来的代码更加优雅简洁。
+ eggjs（阿里开发出来的一款专注于做大型web项目的库，它的开发思想完全遵循后端的MVC(MVVM)）。


（Week1Day4下午）

# 
md5加密不算加密，它具有单项不可逆性，只能由明文变成密文，对于相同的明文生成的密文一致。
md5叫做获取信息的摘要值（hash值，指纹信息）。

# 

