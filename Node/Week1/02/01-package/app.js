// 时间格式化 Date
var moment=require('moment');
// 1.没有目录，排除是用户自己写的模块
// 2.尝试当成核心模块，但是核心模块不存在http://nodejs.cn/api/
// 3.认为是npm管理的包（node_modules/packageName）-->package.json-->main字段（./moment.js）

console.log(moment().format());