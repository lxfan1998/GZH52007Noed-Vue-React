

# Week4Day2

# 课程目标
+ vuejs完成spa电影网站（仿卖座）
+ elementui实现一个cms管理系统

# 开发模式
1. 全新开发（从0到1）
2. 基于现有的项目进行仿照（仿站、套站），甚至有些公司连UI设计都不自己完成，而是把别人的静态HTML页面通过一些软件扒下来。
3. 基于现有的开源的产品进行二开（二次开发）。

## 全新开发（0-1）2-3个月
1. 需求分析
2. 项目的原型
3. UI设计稿
4. 签订合同
5. 前端开发
6. 后端写接口
---
## 现有的项目进行仿照
1. 找一个类似的产品进行功能的模仿
2. 扒站工具：仿站小工具，Teleport Ultra（最好用的一个），crmeb

https://m.maizuo.com/v5/#/films/nowPlaying

## 基于现有的开源的产品进行二开
一般这种现成的产品有两种购买模式
1.基于saas的方式（购买者不需要自己去维护服务器，商家是不给开发者源码的，购买者只是花钱买了该公司的一个用户账号而已，公司提供相关的网页服务）
    + url
    + 账号
    + 密码
 2. 全部的代码进行打包给到购买者，一般来说首次会提供安装服务。（第一年维护基本免费，新功能要收费，维护费从第二年开始递增，一般从项目的10%按照每年5%递增，增加到25%就不再增加了）。（项目做得越大，产品出现bug的可能性也会越来越大）
    + 网址：http://www.crmeb.com/
    + 底层技术：ThinkPHP6+vue

+ http://www.crmeb.com/web/cases/list.html

3. 全部的代码进行打包给到购买者（部分源代码加密混淆）。

# 项目的初始结构
1. 使用脚手架工具快速地构建一个项目的基本结构

# 项目的基本的代码雏型和项目的知识点分析
1. 构建基本的代码结构（参照卖座进行分析）

# 项目的初始结构
1. 实现底部的切换栏（导航tabs）
2. 每点击一个tabs里面的选项，则会有一个与之对应的页面出现（指定四个页面）
3. 电影页（1. 存在选项卡）
4. 一般app的首页的顶部都会有一个轮播图

## 准备
1. 规范目录结构
    1. public里面的静态资源文件是不需要做编译处理的，也就是说这个目录里面建议存放纯静态资源，而不能存放类似less、sass这些文件。less和sass等文件存放在assets目录下，在该目录下的预处理语言编写的less、sass、ts等文件都可以被项目的脚手架进行编译生成纯的静态的资源文件
2. 样式的重置
    1. 一些HTML标签是自带样式的，比如body、ul、li、a等等
    2. 这些样式可以手工重置，最简单粗暴的方法就是用*{margin: 0;padding: 0;}这样去重置，但是这样其实不太好，但是如果一个一个重置，比如a{text-decoration: none;}，效率也比较低。
    3. 使用一些第三方现有的样式重置库。
        1. 用得比较多的是reset.css和normalize.css（这个一般手机端使用得比较多），这两个是国际标准。
        2. 国内也存在一些前端重置的标准，比如淘宝、新浪、网易的样式重置标准。
3. 编写公共的样式文件。common.css，也有可能用less来写，common.less，less里面有个东西叫变量，比如$baseColor、$mainColor、@secondColor
    1. 根据页面的主体的观察，定出页面的大体的字体、大小、样式，一般会写在body里面。
4. 页面底部的导航栏（技术实现：fixed+flex）
    1. 多个页面都存在底部，我们就可以把底部提取出来实现复用
    2. 定义底部的导航
    ```shell
        <!--1. 直接在页面引入cdn节点-->
            <!--图片优化 cdn-->
            <link href="//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">

    ```
    3. 定义导航点击后显示的组件（四个组件，电影，影院，咨询，我的
    4. 定义路由映射表（src/router/index.js）
        1. 建立组件
        2. 定义路由映射表
    ````shell
        // 0. 建立组件 1. 定义路由映射表
        const routes = [
          // 1. 定义默认的首页展示的内容
          //  方式一：直接定义路由规则
          // {
          //   path: '/',  // 代表访问网站首页的时候，出现的是哪个组件
          //   name: 'movies',
          //   component: ()=>import('../pages/Movies/index.vue')
          // },
                
          //  方式二：可以使用redirect方式
          {
            path: '/',  // 代表访问网站首页的时候，出现的是哪个组件
            redirect: 'movies',  // 重定向
           },
          {
            path: '/movies',
            name: 'movies',
            // 路由懒加载的特性，为了防止首屏加载的时候因为文件过大导致页面出现留白的现象
            component: ()=>import('../pages/Movies/index.vue')
          },
          {
            path: '/homes',
            name: 'homes',
            component: () => import('../pages/Homes/index.vue')
          },
          {
            path: '/news',
            name: 'news',
            component: () => import('../pages/News/index.vue')
          },
          {
            path: '/my',
            name: 'my',
            component: () => import('../pages/My/index.vue')
          },
             //  定义一个404页面
          {
             path: '*',  // *代表和上面不匹配后的所有路径
             name: 'notfound',
             component: ()=>import('../pages/NotFound/index.vue')
          }
        ]
    ````
    
    
    ```shell
        <style lang="less">
          // 导入外部的less文件。app是主组件，主组件里面的style不要加上scoped，因为加了scoped就代表样式是局部的了。
          @import url('./assets/less/common.less');
        </style>
    ```

## swiper
Swiper官网：https://www.swiper.com.cn/

vue Swiper网址：https://www.swiper.com.cn/usage/index.html

vue-awesome-swiper网址：https://github.com/surmon-china/vue-awesome-swiper

+ Swiper是纯javascript打造的滑动特效插件，面向手机、平板电脑等移动终端。
+ Swiper能实现触屏焦点图、触屏Tab切换、触屏多图切换等常用效果。
+ Swiper开源、免费、稳定、使用简单、功能强大，是架构移动端网站的重要选择。

### loading小动画
参考网址：https://www.cnblogs.com/jr1993/p/4622039.html

## 1. 首页
1. 轮播图（基于vue-swiper插件）
2. 选项卡（vuejs内置component组件，动态组件）
3. 顶部选项卡（vue-router路由，可以做一个SPA的应用）
4. 电影的列表（1. mockjs模拟数据 2. 抓包分析卖座的网络请求，获取出来电影列表的接口）
5. 地理位置的功能（lbs：location base serve 基于地理位置的服务，国内做得好的就是百度）


