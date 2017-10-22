'use strict';

var express = require('express'),
    router = express.Router(),
    fs = require('fs'),
    path = require('path');

function filterData(req, res, file){
    var basePath = '../..';

    fs.readFile(path.resolve(__dirname, basePath + file), 'utf-8', function (err, data) {
        if (err) {
            console.log(err);
        } else {
            res.json(JSON.parse(data));
        }
    });
}

router.get(['/menu/all', '/role/menus'], function (req, res) {
    filterData(req, res, '/views/system/menu/index.json');
});

router.get(['/menu/roles', '/user/role'], function(req, res){
    filterData(req, res, '/views/system/auth.json');
});

router.get('/role/user', function(req, res){
    filterData(req, res, '/views/system/user/index.json');
});

router.get('/log/query', function(req, res){
    filterData(req, res, '/views/system/log/index.json');
});

router.get('/message/query', function(req, res){
    filterData(req, res, '/views/system/message.json');
});
router.get('/message/queryUnread', function(req, res){
    filterData(req, res, '/views/system/message.json');
});
router.post('/message/read', function(req, res){
    filterData(req, res, '/views/system/message.read.json');
});

router.post('/post/table', function(req, res){
    filterData(req, res, '/views/examples/tables/dt-server-post.json');
});

router.get(['/employee/query', '/employee/all/get'], function(req, res){
    filterData(req, res, '/views/examples/tables/data-tables/server-side/employee.get.json');
});

router.get('/employee/all', function(req, res){
    filterData(req, res, '/views/examples/tables/data-tables/server-side/employee.json');
});

router.post('/employee/all/post', function(req, res){
    filterData(req, res, '/views/examples/tables/data-tables/server-side/employee.post.json');
});

module.exports = router;
