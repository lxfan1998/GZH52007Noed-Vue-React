var template = require('art-template');

// 参数1：模板（有占位符）
// 参数2：给模板的数据（js变量）
// 底层原理：先去tpl-user.art读取代码，读取到的代码其实就是字符串，然后再去查找html里的user的name属性的值，替换到tpl-user.art里面的占位符里
var html = template(__dirname + '/views/tpl-user.art', {
    user: {
        // 普通的数据类型（基本数据类型），展示
        name: 'art-template',
        // 复合数据类型（对象、数组），遍历
    },
    newsList:[
        {
            id:1,
            title:'新闻一',
            img:'',
        },
        {
            id:2,
            title:'新闻二',
            img:'',
        },
        {
            id:3,
            title:'新闻三',
            img:'',
        },
        {
            id:4,
            title:'新闻四',
            img:'',
        },
    ],
});
console.log(html);  // 替换后的字符串