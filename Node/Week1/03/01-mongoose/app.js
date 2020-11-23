const mongoose = require('mongoose');
// c/s mongodb://localhost/test
// mongodb:// 协议
// localhost|127.0.0.1 主机地址（代表的是哪一台服务器），互联网上的服务器通过ip地址或者域名进行定位
// localhost:27017 默认是存在一个端口号（默认端口号为27017）的，但是由于是27017，所以可以不写
// test 数据库，数据库的名称由用户自定义
// 'mongodb://localhost/test'一般我们称之为dsn（data source name，数据源的名称）

// b/s 用的是http协议或https协议
// mongoose.connect('mongodb://localhost:27017/test');
mongoose.connect('mongodb://localhost/test');

// 定义表的结构和名称，mongodb里面是以json格式组织数据，一般我们称之为文档。
// 一条记录就是一个json格式的数据，是一个文档，json格式里面的字段用户自定义。
const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));

// c/s mongodb://localhost/test
// mongodb:// 协议
// localhost/127.0.0.1 主机地址（代表是哪一种ip地址或者域名进行定位
// localhost:27017 是存在一个端口号的，但是由于是27017所以可以不写
// test 数据库，数据库的名称用户自定义即可
// mongodb://localhost/test 一般我们dsn（data source name）

// b/s http协议
// mongodb.connect('mongodb://localhost:27017/test');
mongodb.connect('mongodb://localhost/test');

// 定义表的结构和名称mgdb，里面是以json格式组织数据，一般我们称之为文档。
// 一条记录是一个json格式的数据，是一个文档，json里面的字段用户自定义。

// 1.数据库：（表的集合，mgdb里面数据表也可以叫做集合）
// 参数1：可以认为是表，mongoose这个库会把第一个参数的复数形式作为实际的表名（转换成小写）。
// 参数2：对象，定义字段的属性。属性的约束，例如String需要去查看文档。
// 参数3：该参数是可选的。如果用户不希望mongoose按照自己的方式通过参数1来生成表名，