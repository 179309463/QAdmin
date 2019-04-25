var express = require('express')
var path = require('path')
var logger = require('morgan')
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// 载入路由
var index = require('./routes/index');
var system = require('./routes/system');
var datatable = require('./routes/datatable');
var examples = require('./routes/examples');
var data = require('./routes/data');

// 监听端口
var port = process.env.PORT || 3200

var app = new express()
app.set('views', path.resolve(__dirname, '../app/views'))
app.set('view engine', 'html')
app.set('view catch', false)
app.engine('html', require('ejs').renderFile)

app.use(logger('dev'));
app.use(express.static(path.resolve(__dirname, '../public')));
app.use('/views/', express.static(path.resolve(__dirname, '../app/views')));
app.use('/', data);
app.use('/', system);
app.use('/', datatable);
app.use('/', examples);
app.use('/', index);

app.listen(port)
console.log('Server started on ' + port)

module.exports = app;
