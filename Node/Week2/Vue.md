# 课程目标
1.前端开发规范简介
2.vuejs简介
3.vuejs初体验
4.掌握MVVM开发思想
5.掌握vuejs的常见指令

（Week2Day1上午）

# Mac OSX安装MongoDB
http://www.runboo.com/mongodb/mongdb-osx-install

# 1.开发规范
> 为提高团队协作效率，规范文件管理，方便项目后期维护，提高代码质量，在公司内部都会指定相关的文档来规定项目的目录规范，前端开发人员必须遵照规范进行前台页面开发。

## 工作目录规范
> 一般在构建一个项目应用的时候，对其目录结构都会进行严格的要求。

文件命名用英文小写，不要用中文也不要有空格。

例如：
1.之前做的项目，使用MVC思想进行开发，严格地建立`models`、`controller`、`views   目录。
2.使用express-generator生成的项目也是有严格的目录规范的。

## 代码命名规范
> 在我们编写代码的时候，很多时候需要进行定义类名、变量名、函数名等操作，那么该如何定义一个符合命名规范的字符呢？

代码变量：

1. 小驼峰（getUserInfo）
2. 大驼峰（CommentController）
3. 下划线（get_userInfo_by_id）

常见的规范有：
1. BEM命名方式（）

```
    ul class='nav'
        li class='nav_item' img class='nav_item_img' a class='nav_item_a'
        li class='nav_item'
        li class='nav_item'
```

BEM（Block，Element，Modifier）是由Yandex团队提出的一种前端命名规范。其核心思想是将页面拆分成一个个独立的富有语义的块（blocks），从而使得团队在开发复杂的项目时变得高效，并且十分有利于代码复用，即便团队引入新成员，也容易维护。在某种程度上，BEM和OOP是相似的。

参考文档：https://www.jianshu.com/p/a25a224b1bf5

2. OOCSS命名规范

```
    OOp编程思想，被称为面向对象编程。
```

```
    <a class='btn btn-primary btn-lg'>按钮</a>
```


OOCSS不是一个框架，也不是一种技术，更不是一种新的语言，它只不过是一种方法，一种书写方法。换句话说，OOCSS的核心就是用最简单的方式编写最整洁、最干净的CSS代码，从而使代码更具重用性、可维护性和可扩展性（把原本写在一起的样式，拆开多个class写，提高可复用性）。规范实现：bootstrap框架。

参考文档：https://www.w3cplus.com/css/oocss-concept


## 官方
### 1. standard.js规范
JaveScript Standaed Style官网：https://standardjs.com/
参考网址：https://mycode.net.cn/tools/2175.html

1. 一些细则
+ 使用两个空格进行缩进。
+ 字符串使用单引号，需要转义的地方除外。
+ 不再有冗余的变量（冗余变量是导致大量bug的源头）。
+ 无分号（没什么不好）。
+ 行首不要以(、[、`开头，这是省略分号时唯一会造成问题的地方，工具里已经加了自动检测。
+ 关键字后加空格if (condition){...}。
+ 函数名后加空格function name (arg){...}。
+ 坚持使用全等===，摒弃==，但在需要检查null或者undefined时可以使用（如obj==null）。
+ 一定要处理Node.js中错误回调传递进来的err参数。
+ 使用浏览器全局变量时加上window前缀，但是document和navigator除外。
+ 避免无意中用到了这些命名看上去很普通的全局变量：open、length、event、name。


### 2. 爱彼迎前端规范
参考网址：https://blog.csdn.net/haoshidai/article/details/52833377

1. 引用
+ 对所有的引用使用const，不要使用var（确保无法对引用重新赋值，也不会导致出现bug或者难以理解）。

```
    // 不要用var
    var a=1;
    var b=2;

    // 用const
    const a=1;
    const b=2;
```

+ 如果一定需要可变动的引用，使用let代替var（因为let时块级作用域，而var是函数作用域；var会对变量作域解析，let不会作域解析；var可以重复声明同一个变量，但是let不能）。

```
    // 不要用var
    var count=1;
    if (true){
        count+=1;
    }

    // 用let
    let count=1;
    if (true){
        count+=1;
    }
```

2. 对象
+ 使用字面值创建对象。

```
    // 不要用系统的new Object()
    const item=new Object();

    // 建议用字面值定义对象
    const item={};
```

+ 使用对象方法的简写。

```
    // 不建议
    const atom={
        value:1,

        addValue:function (value){
            return atom.value+value;
        },
    };

    // 使用对象方法的简写
    const atom={
        value:1,
        addValue(value){
            return atom.value+value;
        },
    } ;
```

+ 使用对象属性值的简写（这样更短更有描述性）。

```
    const lukeSkywalker = 'Luke Skywalker';

    // 不建议
    const obj = {
        lukeSkywalker: lukeSkywalker,
    };

    // 使用对象属性值的简写
    const obj = {
        lukeSkywalker,
    };
```

+ 不要直接调用 Object.prototype 的方法，如：hasOwnProperty、propertyIsEnumerable、和isPrototypeOf。

```
    // 不建议
    console.log(object.hasOwnProperty(key));

    // 建议
    console.log(Object.prototype.hasOwnProperty.call(object, key));

    // 最好用这种
    const has = Object.prototype.hasOwnProperty;
    // 或者这样
    const has = require('has');
    …
    console.log(has.call(object, key));
```

+ 浅拷贝对象的时候最好是使用...操作符而不是 Object.assign。
```
    // very bad
    const original = { a: 1, b: 2 };
    const copy = Object.assign(original, { c: 3 });
    delete copy.a;

    // bad
    const original = { a: 1, b: 2 };
    const copy = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }

    // good
    const original = { a: 1, b: 2 };
    const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }

    const { a, ...noA } = copy; // noA => { b: 2, c: 3 }
```

3. 数组
+ 使用字面值创建数组。
+ 使用拓展运算符...复制数组。
+ 使用Array#from把一个类数组对象转换成数组。
+ ......

......

### 3. taro规范
官网：https://taro-docs.jd.com/taro/docs/README
参考网址：https://www.w3cschool.cn/znvtm/znvtm-4kw5379m.html

基本书写：
+ 使用两个空格进行缩进。
+ 除了缩进，不要使用多个空格。
+ 不要在句末使用分号。
+ 字符串统一使用单引号。
+ 代码块中避免多余留白。
+ 关键字后面加空格。
+ 函数声明时括号与函数名间加空格。
+ 展开运算符与它的表达时间不要留空白。
+ 遇到分号时空格要后留钱不留。
+ 代码块首位留空格。
+ 圆括号间不留空格。
+ 属性前面不要加空格。
+ 一元运算符前面跟一个空格。
+ 注释首尾留空格。
+ 模板字符串中变量前后不加空格。
+ 逗号后面加空格。
+ 不允许有连续多行空行。
+ 单行代码块两边加空格。
+ 不要使用非法的空白符。
+ 始终将逗号至于行末。
+ ...


## Eslint代码检测
> Eslint可以让你在编码的过程中发现问题，并且可以自己创建检测规则，保持代码编写风格的一致性。

文档：http://www.cnblogs.com/my93/p/5681879.html


# 工作规范（邮箱、企业邮箱、阿里邮箱、腾讯邮箱）
+ 企业邮箱账号
+ OA账号（无纸化办公）
+ 钉钉
---

1.周报、日报
2.邮件发送相关



# 相关阅读
1.http://juejin.im/post/6844903908616175629
2.[雅虎36条优化准则](http://www.cnblogs.com/mamo/p/3889351.html)


# 2.vuejs简介
+ 渐进式（在不改变原项目的基础上，快速引入该产品做开发）JavaScript框架
+ Vue.js是当下很火的一个JavaScript MVVM库，他是以 数据驱动 和 组件化 的思想构建的。
（侵入式）根本没办法再原来的项目里面集成该产品，


# 3.vuejs初体验
版本
+ 2.x
+ 3.x（2020.9正式发布）完全兼容之前的2.x里面的写法，但是引入很多新的特性（组合api，类似react hooks编程）。


# 双向数据绑定
方向一：模型到视图
方向二：视图到模型

（Week2Day1下午）

# vuejs的指令
v-html
vuejs在遇到html标签的时候，会转换成HTML的实体符号，然后再进行输出。为什么要转换为实体符号？
答：主要是为了网站的安全，




arr遍历输出 1. 便利的数据 2. 遍历的最小单元

## v-for
+ v-for语法类型，类似for in语法。
+ in前面的标识符用户自定义，in后面的代表要遍历的模型变量。
+ [{},{}]
+ key对对象来说就是属性；key针对数组则是下标。

## v-pre
浏览器再解析html标签时，对于空格或者换行，会默认将之当作一个看空格处理，不会保留原格式。

## v-cloak

## v-bind属性绑定
> 属性绑定，可以实现将模型变量的值绑定到HTML标签的某些属性上面，形成属性的属性值。


## v-on事件绑定
+ 后面加上事件的名称，不要加前缀on
+ 区别

### 事件修饰符



（Week2Day2上午）

# 课程目标
1. vuejs实现电影网站留言加载功能
2. vuejs其他api的基本使用
3. vuejs实现购物车案例

# 无刷新分页
## 基于页码

## 基于加载的实现

## 滚动加载

触发条件，页面底部的加载更多按钮距离底部在一定的范围内，触发ajax请求，加载最新的数据。

瀑布流布局。

# 电影网站的评论的无刷新分页

属于上面的方式二。

## 提供一个分页的接口
现在后端提供一个可以获取第一页、第二页、第三页这样的接口。

分页接口需要哪些信息？

1. 当前的代码（page）
2. 每页显示的数量（size）

意味前台需要给后端传递这两个信息。一般分页接口我们使用get提交方式（现在是从服务器获取数据，一般获取数据都是get请求，一般向服务器提交数据用post请求）。

### 请求参数
1. page
2. size
3. movieId

## 请求方法
get请求

## 



### 前端调用





# 2. vuejs其他api的基本使用
1. vuejs基本使用
2. 插值表达式
3. 指令（常用)
4. api（都是vue.js用来处理数据的）
    + filter 过滤
    + watch 监视
    + cmputed 计算属性





# 3. vuejs实现购物车案例