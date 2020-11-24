const mongoose = require('mongoose');
// c/s mongodb://localhost/test
// mongodb:// 协议
// localhost|127.0.0.1 主机地址（代表的是哪一台服务器），互联网上的服务器通过ip地址或者域名进行定位
// localhost:27017 默认是存在一个端口号（默认端口号为27017）的，但是由于是27017，所以可以不写
// test 数据库，数据库的名称由用户自定义
// 'mongodb://localhost/test'一般我们称之为dsn（data source name，数据源的名称）

// b/s 用的是http协议或https协议
// mongoose.connect('mongodb://localhost:27017/test');
mongoose.connect('mongodb://localhost/test',{ useNewUrlParser: true },{ useUnifiedTopology: true });

// 定义表的结构和名称，mongodb里面是以json格式组织数据，一般我们称之为文档。
// 一条记录就是一个json格式的数据，是一个文档，json格式里面的字段用户自定义。

// 定义表的结构和名称mgdb，里面是以json格式组织数据，一般我们称之为文档。
// 一条记录是一个json格式的数据，是一个文档，json里面的字段用户自定义。

// 1.数据库：（表的集合，mgdb里面数据表也可以叫做集合）
// 参数1：可以认为是表，mongoose这个库会把第一个参数的复数形式作为实际的表名（转换成小写）。
// 参数2：对象，定义字段的属性。属性的约束，例如String需要去查看文档。
// 参数3：该参数是可选的。如果用户不希望mongoose按照自己的方式通过参数1来生成表名，则可以使用第三个参数来自己定义表名。
const Cat = mongoose.model('Cat', { name: String } ,'cats');
// const Cat = mongoose.model('Cat', { name: String },'cms_cat');
// mongoose.model的返回值是一个构造函数，一般我们称之为模型Model（模型代表对数据的操作）

// 使用的模型进行数据库的真实操作。实例化的时候需要传递一个对象作为参数，对象代表入库的数据。对象的属性必须和定义模型时候的字段一致。
const kitty = new Cat({ name: 'xiaohuamao' });

// kitty.save()实现真实的入库。返回值是Promise对象，默认情况下是不会断开连接的
kitty.save().then(() => {
    // 操作成功
    console.log('insert ok!');
    mongoose.disconnect();  // （手工）断开连接
});

