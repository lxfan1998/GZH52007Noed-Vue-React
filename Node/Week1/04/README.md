
# （Week1Day4上午）

# 课程目标
1. 电影网站完善
2. MVC简介
3. 接口编写

# MVC思想简介

## MVC架构：
+ M：model，模型，负责对数据库的操作。
+ V：view，视图，负责数据的展示和收集。
+ C：controller，控制器，完成业务逻辑。

+ app.js：启动文件，单一入口。

整套架构：MVC+单一入口


思考：电影模块的curd操作。
需求：完成网站会员的curd操作。
做法：增加memberController.js、movieModel.js和member文件夹（有add.html和list.html）。

需求：新闻模块的curd操作。

都是为了方便后期的团队协作。

无状态协议。

# （Week1Day4下午）

# md5
严格意义上来说md5不算加密（一般来说有加密就要有解密）。它具有单项不可逆性，只能由明文变成密文，对于相同的明文生成的密文一致。
md5叫做获取信息的摘要值（hash值，指纹信息）。