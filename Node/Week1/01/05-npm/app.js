var moment = require('moment');
// 2020-11-9 15:30:02 monent提供的format方法，接受一个时间格式的字符串，可以把时间变成我们想要的格式。
// console.log(moment().format());  // 2020-11-12T11:39:39+08:00
// 官方解释文档：http://momentjs.cn/docs/#/parsing/special-formats/
// 默认获取的是当前的时间
console.log(moment().format('YYYY-MM-DD HH:mm:ss'));  // 2020-11-12 11:43:50

// TODO：需求：一些评论，电商类型的网站，底部的留言。monent
// xxx说：xxxxx    几分钟之前
// xxx说：xxxxx    一个月之前
// xxx说：xxxxx    n年之前
// xxx说：xxxxx    太过于久远...

// 需求：把一个时间戳转换为时间格式字符串

// 2020-11-12 11:46:38时间戳是1605152798
// 前端里面时间的处理，一般情况下都是毫秒做单位
let timestamp=1605152798;
console.log('timestamp',moment(1605152798*1000).format('YYYY-MM-DD HH:mm:ss'));  // 2020-11-12 11:43:50