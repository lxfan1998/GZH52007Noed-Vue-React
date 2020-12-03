<template>
  <div id="app">
    <!--<div id="nav">-->
      <!--<router-link to="/">Home</router-link> |-->
      <!--<router-link to="/about">About</router-link>-->
    <!--</div>-->
    <!--<router-view/>-->

      <!--1. 规范目录结构-->
      <!--1. public里面的静态资源文件是不需要做编译处理的，也就是说这个目录里面建议存放纯静态资源，而不能存放类似less、sass这些文件。less和sass等文件存放在assets目录下，在该目录下的预处理语言编写的less、sass、ts等文件都可以被项目的脚手架进行编译生成纯的静态的资源文件-->

      <!--2. 样式的重置-->
      <!--2.1 一些HTML标签是自带样式的，比如body、ul、li、a等等-->
      <!--2.2 这些样式可以手工重置，最简单粗暴的方法就是用*{margin: 0;padding: 0;}这样去重置，但是这样其实不太好，但是如果一个一个重置，比如a{text-decoration: none;}，效率也比较低。-->
      <!--2.3 使用一些第三方现有的样式重置库。-->
      <!--2.3.1 用得比较多的是reset.css和normalize.css（这个一般手机端使用得比较多），这两个是国际标准。-->
      <!--2.3.2 国内也存在一些前端重置的标准，比如淘宝、新浪、网易的样式重置标准。-->

      <!--3. 编写公共的样式文件。common.css，也有可能用less来写，common.less，less里面有个东西叫变量，比如$baseColor、$mainColor、@secondColor-->
      <!--3.1 根据页面的主体的观察，定出页面的大体的字体、大小、样式，一般会写在body里面。-->

      <!--4. 页面底部的导航栏-->
      <!--4.1 多个页面都存在底部，我们就可以把底部提取出来实现复用-->
      <!--4.2 定义底部的导航-->
      <!--技术实现：fixed+flex-->


      <!--4.3 定义导航点击后显示的组件（四个组件，电影，影院，咨询，我的-->
      <router-view />

      <!--4.4 定义路由映射表-->
      <!--src/router/index.js-->

      <!--5. 完成电影首页页面-->

  </div>
</template>

<style lang="less">
  // 导入外部的less文件。app是主组件，主组件里面的style不要加上scoped，因为加了scoped就代表样式是局部的了。
  @import url('./assets/less/common.less');


</style>
