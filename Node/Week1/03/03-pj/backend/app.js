// 1.引入一个第三方的模块express（底层http模块的封装）
const express = require('express');
const app = express();
const port = 3000;

// 定义路由信息



app.listen(port, () => console.log(`Example app listening on port ${port}!`));