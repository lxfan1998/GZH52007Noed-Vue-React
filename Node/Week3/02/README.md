
（Week3Day2上午）

# 课程目标
1.ElementUI的基本使用
2. VueX的基本使用

# ElementUI的基本使用



## ElementUI是什么？
> 是由国内 饿了么 前端团队开发的一款专门用于做PC端spa应用的UI组件库。

官网：https://element.eleme.cn/#/zh-CN


## 为什么要学习ElementUI？
+ 开发者需要自己再去构建一些基础性的UI组件性
    + 用户的注册登录（表单，验证，收集），商品的展示和添加（table，分页，筛选，form，验证，收集）
    
+ 无需太多地去关注样式的问题，更多的是关注业务逻辑（功能），一般现在使用的spa都是做的中后台程序。
    + PC网站（psd--->html，1:1高保真，还原，无1像素偏差）
    
 ## 业务
 + c2c（client to client）：（流量，直通车）个人对个人。
 + b2c（business to client）：公司对个人。b2b比如速卖通、阿里。
 + o2o（online to online）


## 如何学习ElementUI？
> 根据官网提供的文档进行学习。

https://element.eleme.cn/zh-CN

1. 组件的布局
2. 基本组件的使用
3. form组件，table组件
4. 其他的组件，一般是在开发的时候根据功能，查找相关的组件，然后复制粘贴代码，然后查看文档api进行调用。

## 入门学习
1. 使用脚手架构建一个spa
2. 安装elementui组件库

# VueX的基本使用



# 扩充
1. 中台


（Week3Day2下午）

# VueX的基本使用

## VueX是什么？
> VueX是一个集中化管理数据的方案，有了VueX可以很好地完成vuejs项目里面的组件间地通信问题。


1. vuex里面是集中化管理数据，提供了一个人唯一的数据源（数据的仓库store里面的数据一般我们叫做status状态）
2. 数据一般分为两种：
    + 同步数据：组件自己维护的数据而不需要和后台接口产生关系。
    + 异步数据：需要和后台打交道的数据
3. 我们的组件上面触发某个行为导致stats状态改变，同步数据。
    3.1 一般同步数据需要变化，组件commit（行为、参数）
    3.2 
    
    
所有的异步操作都要放在actions里面

mapState含义是把仓库里面的数据映射到计算属性。参数可以是一个数组[]，把仓库里面需要返回的state的key值写在数组里面即可，或者是一个对象，对象的格式{count:function(){return store.state.count;},goodsList:function(){return store.state.goodsList}}