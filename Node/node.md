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

下午

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
> AMD模块化
> CommonJS模块化（nodejs使用的）

4、模块化和nodejs之间的关系？
> nodejs里面的一些核心的代码使用的commonjs规范对外进行提供的，只有掌握了commonjs规范。才可以更好地使用nodejs提供的核心的功能（文件操作、网络功能）。

## commonjs模块化规范
1、什么是commonjs模块化规范
> commonjs模块化规范是为了更加高效地组织node.js代码提出地一种编写代码地规范，使用该规范后可以更加高效组织代码，方便日后地维护和开发。

2、commonjs规范有哪些注意事项？
+ 一个文件就是一个模块，模块
+ 
+ 
+ 

单个暴露和多个暴露同时存在时，以多个暴露为准，单个暴露此时是失效的。

commonjs里面的成员是私有的

在模块里面存折一些特殊的变量：module、exports、__dirname、__filename

# Week1 Day2
## 下午
# 2.express学习
> express是一个底层使用http模块，封装的一个web库，可以快速地让开发者构建自己地web项目。

同类型的产品有：
+ koa（也是express的原班人马进行开发）使用ES6、ES7高级特性进行编写，写出来的代码更加优雅简洁。
+ eggjs（阿里开发出来的一款专注于做大型web项目的库，它的开发思想完全遵循后端的MVC(MVVM)）。