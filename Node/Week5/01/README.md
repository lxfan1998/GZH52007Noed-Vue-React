
# Week5Day1上午

# 课程目标
1. vue+element完成cms的一套用户的curd操作
2. webpack的基本使用
3. 入口与出口及单页面与多页面
4. loaders配置使用
5. 插件配置使用


# cms的curd完成
在做这种后台的cms系统里面，一般是分模块进行完成的，一般完成某个功能模块的curd+分页+搜索之后，
+ 后台的管理员用户模块
    + 
    + 用户的列表
    + 用户的删除
    
    
+ 分类模块
    + 分类的增加
    + 分类的列表
    + 分类的编辑
    + 分类的删除
    + 分页
    + 搜索
    
+ 商品模块
    + 商品的增加
    + 商品的列表
    + 商品的编辑
    + 商品的删除

    
使用element

分页 views/User/index.vue

api/back.js

api/user.js

api/request.js进一步封装

views/Login/index.vue

用户的curd操作

index.js

# Week5Day1下午

# webpack学习

## 0. 思考：之前前端开发带来的痛点？
1. 开发的时候，我们写的代码是有注释、有空格的，在开发环境中注释是有意义的，但是在生产环境中，注释是没有意义的。代码应该是尽可能压缩得足够小。当我们没有借助一些其他的工具时，我们需要手工地把xxx.js转换成xxx.mini.js文件。（解决：1. 手工解决 2. gulp、 uglify.js插件实现）

2. 我们的js在发展的过程中，出现了很多新特性，例如es6箭头函数、class语法糖、Promise等。这些新特性在不做处理的时候是很难在低版本的浏览器适应的。尝试做转换，手工地转换，在线转换工具。

3. 我们的css开发，在发展过程中，也出现一些预处理的css，例如less、sass、stylus等。这些预处理的css写起来非常地方便，但是这些预处理的文件浏览器默是不支持的，所以我们需要做转换，可以借助一些在线转换工具转换成css文件。（css预处理）

......

思考：如何去解决上面的问题
答：在发展的过程中，出现了很多的解决方案。
1. 
2. 
3.慢慢地又出现一些更好的构建工具（webpack工具）（fis，百度旗下的）。
- http://fis.baidu.com/


## 1. webpack是什么？
> wbpack是一个 第三方的 自动化的 构建工具，可以使得我们的项目开发完全地自动化，或者叫做工程化。可以做哪些自动化呢？答：

## 2. 

## 3. 如何学习webpack
官方文档网址:https://www.webpackjs.com/concepts/

## 4. 



index.js