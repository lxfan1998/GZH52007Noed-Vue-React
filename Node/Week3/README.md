
（Week3Day1上午）

# 课程目标
1. 工程化简介和vue-cli的基本使用
2. npx的基本使用
3. vuejs单组件简介
4. vuejs单组件基本使用
5. ElementUI和MintUI的基本使用


# 工程化简介

通过之前的学习vue-router已经学习了一个大概，知道使用vue-router可以做单页的应用。在使用的过程中发现有一个小问题，代码全部防止在一个文件里面，这样项目代码会非常地混乱。

在实际开发地时候，我们更多地会分门别类地进行管理，根据项目的功能需求，划分出不同的功能模块，然后建立相关的文件夹进行统一的管理。

这种管理访问一般我们叫做`工程化`管理。

## 工程化定义
+ html+css+js（jq+jq插件）静态的HTML页面+网站动效+js广告（对联广告，右下角广告）--->后端（MVC）--->ssr渲染（模板引擎）。
    + 浏览器的兼容问题
    + 开发出来的网页也比较单一（PC端）
    
+ ajax出现，前后端分离
    + 不利于SEO
    + 用户体验非常好（页面不刷新，局部更新）
 
+ angular、vue、react（出现了一些新技术如：es6、模块化、less、sass）--->spa应用--->webapp（在浏览器这个宿主环境里面实现类似native app的体验效果）

现在的前端开发已经不再是传统的web开发（html+js+css+jq），现在的前端开发需要讲究工程化、自动化、模块化等等，引入很多新的概念（模块化、commonjs、es6、amd、cmd、umd），新的技术（less、sass、ts...），但是这些二新的技术一般来说很难保证所有的浏览器都兼容，例如现在的es6虽说已经成为开发标准，但是有很多低版本的浏览器还是不能兼容es6里面的语法特性，但是我们作为爱发着不能不使用es6开发，因为es6确实好用，所以开发者还是很乐于使用新的技术做开发的，但是开发出来的东西又不能保证很好地去兼容所有的浏览器，这个时候就需要借助工程化，在这个工程化管理的模式里，会提供一些自动化构建的工具进行代码的转换（例如：gulp-->less-->css，babel-->es6-->es5）。同类型的产品还有grunt，目前最好用的webpack，还可以实现诸如打包、压缩（css、js）、合并等功能。

> 工程化的基本概念：开发者可以使用一些比较新的语法特性去编写我们的日常开发代码，但是为了保证其代码可以在绝大部分的浏览器上进行运行，我们需要将新特性编写的代码转换为能够兼容绝大部分浏览器的代码。这种转换的工程可以使用自动化完成，而不需要人手工地进行操作，这种开发模式被称为工程化开发模式，工程化模块需要借助一些第三方的工具，一般我们称之为脚手架，而这些脚手架的底层一般使用webpack或者grunt或者gulp这些工具，而这些工具底层使用的一些开发者开发好的loader（加载器）和plugin（插件）。

+ 现代化开发模式（spa应用-->vue、react、angular）
    + 构建工程化的管理环境-->脚手架（官方提供一个全局包，提供一些命令）--->webpack（grunt）--->loader，plugins--->html+css+js--->上线部署
    

《前端工程化：体系设计与实践》
网址：https://www.jb51.net/books/658581.html

# vue-li的简介
在我们进行vuejs项目开发的时候，如果项目做的稍微大型一点，则我们也需要考虑这种工程化的概念，vuejs官方推出了一个工具，可以专门地进行工程化管理，这个工具叫做vue-cli（vue的cli（command line interface命令行接口），提供了一个命令行的工具，可以快速地构建vuejs的项目）。

一般哦我们呢把vue-cli叫做脚手架，可以快速构建一个项目地基本地雏型结构（代码地转换）。

这个脚手架的底层是webpack。

# vue-cli安装
网址：https://cli.vuejs.org/zh/

安装：
```shell
    npm install -g @vue/cli
```
或者
```shell
    yarn global add @vue/cli
```

创建一个项目：
```shell
    vue create my-project
```
或者
```shell
    vue ui
```

执行`vue create my-project`命令后
1. 选择特性
    ```shell
        Vue CLI v4.5.6
        ? Please pick a preset: (Use arrow keys)
        > Default ([Vue 2] babel, eslint)
          Default (Vue 3 Preview) ([Vue 3] babel, eslint)
          Manually select features
    ```

2. 选择使用以下哪些（按空格选中或取消选择）
    ```shell
        ? Check the features needed for your project: (Press <space> to select, <a> to t
        oggle all, <i> to invert selection)
         (*) Choose Vue version  // 选择Vue的版本，稍后要自己选.
         (*) Babel  // js编译器，可以帮我们把es6的语法转换为es5的语法。
        >( ) TypeScript  // 解决js在开发过程中类型不规范的操作。这里暂时不用。
         ( ) Progressive Web App (PWA) Support  // 谷歌开发的一种离线技术，让我们的手机即使在没有网络的情况下还能够正常地提供访问。暂时不用。
         ( ) Router  // 用到了，按空格选中。
         ( ) Vuex  // Vue生态圈中的一员。暂时用不上。
         ( ) CSS Pre-processors  // CSS的预处理源，用到了，按空格选中。
         (*) Linter / Formatter  // Linter / Formatter：公司里面是有代码规范的，我们需要尊村代码规范，是否要做代码检测。会进入版本js和爱彼迎的标准这些标准，如果代码不规范，它就会提示代码不规范，然后一个个手动解决。

         ( ) Unit Testing  // 做单元测试用的，暂时用不上。
         ( ) E2E Testing  // 做单元测试用的，暂时用不上。
    ```

3. 使用2.x还是3.x的版本？
    ```shell
        ? Choose a version of Vue.js that you want to start the project with (Use arrow
        keys)
        > 2.x  // 选2.x版本
          3.x (Preview)

    ```

4. 路由要使用哪种模式，是否要使用history这种模式（希望用这种模式）？

    其实在本地开发的时候不建议使用history，推荐使用hash。使用hash后，url地址后面有个#，可以非常方便地做调试
    ```shell
        ? Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n)  // 选择n代表不用history使用hash，然后回车
    ```

5. 你要选择的预处理源？
    
    都行，但是选择Sass的话需要去下载一个比较大的包，这个包还不一定能安装成功，选择Less可以保证一定能安装成功。如果安装不成功就多试几次。
    ```shell
        ? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): (Use a
        rrow keys)
        > Sass/SCSS (with dart-sass)
          Sass/SCSS (with node-sass)
          Less  // 这里选这个
          Stylus

    ``` 

6. 使用哪一个代码规范标准？

    用标准规范。
    ```shell
        ? Pick a linter / formatter config: (Use arrow keys)
        > ESLint with error prevention only
          ESLint + Airbnb config
          ESLint + Standard config  // 选这个标准规范
          ESLint + Prettier

    ``` 

7. 什么时候做检测？
    ```shell
        ? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selecti
        on)
        >(*) Lint on save  // 当保存的时候检测是否遵循标准规范，需要，按空格选上。
         ( ) Lint and fix on commit  // 当我们保存好了之后它发现我们的代码不遵循规范，就尝试帮我们自动修复，看是否能符合规范，如果能的话就修复，如果不能就需要我们自己手工修复。需要，按空格选上。
    ```
    
8. 配置文件时是要单独保存还是在package.json里面保存？

    单独保存会方便一些。
    ```shell
        ? Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys)
        > In dedicated config files  // 单独保存会更方便。
          In package.json

    ```

9. 是否要把上面的所有选择生成一个配置文件？

    方便下一次做操作。保存成配置文件后，下一次操作时就可以根据这个配置文件快速地把项目搭建起来。
    ```shell
        ? Save this as a preset for future projects? (y/N)  // 输入y，然后回车
    ```

10. 这一次开发的名称？
    ```shell
        // 直接输入自定义名称
    ```


# vue-cli基本使用

# vue-cli的注意事项


+ 第一层目录：
    + node_modules：node依赖，开发过程中的依赖信息。
    + public：存放静态资源信息，index.html网页入口页面。
    + src：程序员要关注的文件夹，代码就放在这里。
    + .eslintrc.js和babel.config.js：一些其他工具的配置。
+ 第二层目录（src下的）：
    + assets：资源、静态资源，和public不一样，public里面的资源不需要转换。assets需要进行转换处理，类似less、sass这种预处理语言编写的代码，它存放的是这类静态资源。
    + components：组件，小功能模块。
    + router：路由信息（统一管理）。
    + views：组件（页面级别）。
    + App.vue：主组件，一般载入其他的页面组件。
    + main.js：入口文件，项目是从该文件开始执行的，这个文件里面载入主组件。

1. `.vue`为后缀的文件，是vue@cli里面特有的文件，用于编写单文件组件，里面包含三个部分：style、script、template。后期vue@cli底层的webpack会使用vue-loader把`.vue`文件转换为浏览器可以识别的js文件。

 2. 我们的项目是从main.js开始执行的，项目中所有的代码都是被加载到main.js里面，然后再利用webpack工具把所有的代码转换为浏览器可以识别的js代码、css代码等静态资源。main.js--->App.vue--->a.vue-->d.vue（less）、b.vue（scss），c.vue（moment.js）--->app.js文件，最后把打包好的文件插入到public/index.html结构里面。然后vue@cli会帮我们启动一个web服务器，然后把public作为网站的根目录。
 
 （Week3Day1下午）
 
 # mac常用软件
 1. 
 
 # css预处理
 
 # sass和sacss地区别
 
 