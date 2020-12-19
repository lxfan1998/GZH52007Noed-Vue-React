
# Week6Day1

# Nginx

# Tengine
官方文档：http://tengine.taobao.org/

# 代理

# 课程目标
1. flux简介
2. redux入门使用
3. react-redux的基本使用
4. hoc高阶组件


# 前置
+ 在使用vue、react、angular进行spa应用开发的时候，我们会进行组件化开发。
+ 组件间到时候会出现嵌套、平级这种页面关系。
+ 组件间出现通信问题。
    + 父子
    + 子父
    + 兄弟
    + 爷孙
    + ...
    
为了更好地去管理这种组件间的数据通信，Facebook工程师提出了

# flux简介


## 执行的流程：
1. 组件 派发action（点击事件、change事件），触发一个dispatcher

