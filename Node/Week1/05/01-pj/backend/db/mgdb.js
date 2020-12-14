const mongoose = require('mongoose');
const DBConfig=require('../config/db.js');

// db的连接
// mongoose入库
mongoose.connect(DBConfig.DSN,{ useNewUrlParser: true, useUnifiedTopology: true });
