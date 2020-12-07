const express = require('express');
const app = express();
const port = 6060;

// 配置静态资源目录
app.use(express.static('public'));

app.get('/', (req, res) => res.send('Hello front!'));

app.listen(port, () => console.log(`app listening on port ${port}!`));