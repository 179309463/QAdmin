var express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {path: 'examples/home.html'})
})

console.log('载入路由...');

function responseCommon(req, res) {
    var _path = req.path.substring(1);

    if (req.headers['x-pjax']) {
        res.render(_path);
    } else {
        res.render('index', {path: _path});
    }
}

router.all('/system/account/*', function (req, res) {
    res.charset = 'utf-8';
    var _path = req.path.substring(1),
        fileName = _path.lastIndexOf('/'),
        _index = 'system/account/index.html';

    fileName = _path.substring(fileName + 1);

    if (req.headers['x-pjax']) {
        switch (fileName) {
            case 'index.html':
                if(req.headers['x-pjax-container'] === '#accountContent'){
                    res.render('system/account/message.html');
                }else{
                    res.render(_index, {
                        path1:'message.html',
                        fileName:fileName
                    });
                }
                break;
            case 'password.html':
                if(req.headers['x-pjax-container'] === '#accountContent'){
                    res.render('system/account/password.html');
                }else{
                    res.render(_index, {
                        path1: 'password.html',
                        fileName:fileName
                    });
                }
                break;
            case 'log.html':
                if(req.headers['x-pjax-container'] === '#accountContent'){
                    res.render('system/log-table.html');
                }else{
                    res.render(_index,{
                        path1: '../log-table.html',
                        fileName:fileName
                    });
                }
                break;
            case 'display.html':
                if(req.headers['x-pjax-container'] === '#accountContent'){
                    res.render('system/settings/display.html');
                }else{
                    res.render(_index,{
                        path1: '../settings/display.html',
                        fileName:fileName
                    });
                }
                break;
        }
    } else {
        switch (fileName) {
            case 'index.html':
                res.render('index', {
                    path: _index,
                    path1:'message.html',
                    fileName: fileName
                });
                break;
            case 'password.html':
                res.render('index', {
                    path: _index,
                    path1: 'password.html',
                    fileName: fileName
                });
                break;
            case 'log.html':
                res.render('index',{
                    path: _index,
                    path1: '../log-table.html',
                    fileName: fileName
                });
                break;
            case 'display.html':
                res.render('index',{
                    path: _index,
                    path1: '../settings/display.html',
                    fileName: fileName
                });
                break;
        }
    }
});

router.all('/examples/tables/data-tables/basic-init/*', function (req, res) {
    res.charset = 'utf-8';
    var _path = req.path.substring(1),
        fileName = _path.lastIndexOf('/'),
        _index = 'examples/tables/data-tables/basic-init/index.html';

    fileName = _path.substring(fileName + 1);

    if (req.headers['x-pjax']) {
        switch (fileName) {
            case 'index.html':
                if(req.headers['x-pjax-container'] === '#DTConent'){
                    res.render('examples/tables/data-tables/basic-init/zero-configuration.html');
                }else{
                    res.render(_index, {
                        path1:'zero-configuration.html',
                        fileName:fileName
                    });
                }
                break;
            default:
                if(req.headers['x-pjax-container'] === '#DTConent'){
                    res.render('examples/tables/data-tables/basic-init/'+fileName);
                }else{
                    res.render(_index, {
                        path1: fileName,
                        fileName:fileName
                    });
                }
                break;
        }
    } else {
        switch (fileName) {
            case 'index.html':
                res.render('index', {
                    path: _index,
                    path1:'zero-configuration.html',
                    fileName: fileName
                });
                break;
            default:
                res.render('index', {
                    path: _index,
                    path1: fileName,
                    fileName: fileName
                });
                break;
        }
    }
});
router.all('/examples/tables/data-tables/advanced-init/*', function (req, res) {
    res.charset = 'utf-8';
    var _path = req.path.substring(1),
        fileName = _path.lastIndexOf('/'),
        _index = 'examples/tables/data-tables/advanced-init/index.html';

    fileName = _path.substring(fileName + 1);

    if (req.headers['x-pjax']) {
        switch (fileName) {
            case 'index.html':
                if(req.headers['x-pjax-container'] === '#DTConent'){
                    res.render('examples/tables/data-tables/advanced-init/events-live.html');
                }else{
                    res.render(_index, {
                        path1:'events-live.html',
                        fileName:fileName
                    });
                }
                break;
            default:
                if(req.headers['x-pjax-container'] === '#DTConent'){
                    res.render('examples/tables/data-tables/advanced-init/'+fileName);
                }else{
                    res.render(_index, {
                        path1: fileName,
                        fileName:fileName
                    });
                }
                break;
        }
    } else {
        switch (fileName) {
            case 'index.html':
                res.render('index', {
                    path: _index,
                    path1:'events-live.html',
                    fileName: fileName
                });
                break;
            default:
                res.render('index', {
                    path: _index,
                    path1: fileName,
                    fileName: fileName
                });
                break;
        }
    }
});
router.all('/examples/tables/data-tables/data-sources/*', function (req, res) {
    res.charset = 'utf-8';
    var _path = req.path.substring(1),
        fileName = _path.lastIndexOf('/'),
        _index = 'examples/tables/data-tables/data-sources/index.html';

    fileName = _path.substring(fileName + 1);

    if (req.headers['x-pjax']) {
        switch (fileName) {
            case 'index.html':
                if(req.headers['x-pjax-container'] === '#DTConent'){
                    res.render('examples/tables/data-tables/data-sources/dom.html');
                }else{
                    res.render(_index, {
                        path1:'dom.html',
                        fileName:fileName
                    });
                }
                break;
            default:
                if(req.headers['x-pjax-container'] === '#DTConent'){
                    res.render('examples/tables/data-tables/data-sources/'+fileName);
                }else{
                    res.render(_index, {
                        path1: fileName,
                        fileName:fileName
                    });
                }
                break;
        }
    } else {
        switch (fileName) {
            case 'index.html':
                res.render('index', {
                    path: _index,
                    path1:'dom.html',
                    fileName: fileName
                });
                break;
            default:
                res.render('index', {
                    path: _index,
                    path1: fileName,
                    fileName: fileName
                });
                break;
        }
    }
});
router.all('/examples/tables/data-tables/api/*', function (req, res) {
    res.charset = 'utf-8';
    var _path = req.path.substring(1),
        fileName = _path.lastIndexOf('/'),
        _index = 'examples/tables/data-tables/api/index.html';

    fileName = _path.substring(fileName + 1);

    if (req.headers['x-pjax']) {
        switch (fileName) {
            case 'index.html':
                if(req.headers['x-pjax-container'] === '#DTConent'){
                    res.render('examples/tables/data-tables/api/add-row.html');
                }else{
                    res.render(_index, {
                        path1:'add-row.html',
                        fileName:fileName
                    });
                }
                break;
            default:
                if(req.headers['x-pjax-container'] === '#DTConent'){
                    res.render('examples/tables/data-tables/api/'+fileName);
                }else{
                    res.render(_index, {
                        path1: fileName,
                        fileName:fileName
                    });
                }
                break;
        }
    } else {
        switch (fileName) {
            case 'index.html':
                res.render('index', {
                    path: _index,
                    path1:'add-row.html',
                    fileName: fileName
                });
                break;
            default:
                res.render('index', {
                    path: _index,
                    path1: fileName,
                    fileName: fileName
                });
                break;
        }
    }
});
router.all('/examples/tables/data-tables/ajax/*', function (req, res) {
    res.charset = 'utf-8';
    var _path = req.path.substring(1),
        fileName = _path.lastIndexOf('/'),
        _index = 'examples/tables/data-tables/ajax/index.html';

    fileName = _path.substring(fileName + 1);

    if (req.headers['x-pjax']) {
        switch (fileName) {
            case 'index.html':
                if(req.headers['x-pjax-container'] === '#DTConent'){
                    res.render('examples/tables/data-tables/ajax/simple.html');
                }else{
                    res.render(_index, {
                        path1:'simple.html',
                        fileName:fileName
                    });
                }
                break;
            default:
                if(req.headers['x-pjax-container'] === '#DTConent'){
                    res.render('examples/tables/data-tables/ajax/'+fileName);
                }else{
                    res.render(_index, {
                        path1: fileName,
                        fileName:fileName
                    });
                }
                break;
        }
    } else {
        switch (fileName) {
            case 'index.html':
                res.render('index', {
                    path: _index,
                    path1:'simple.html',
                    fileName: fileName
                });
                break;
            default:
                res.render('index', {
                    path: _index,
                    path1: fileName,
                    fileName: fileName
                });
                break;
        }
    }
});
router.all('/examples/tables/data-tables/server-side/*', function (req, res) {
    res.charset = 'utf-8';
    var _path = req.path.substring(1),
        fileName = _path.lastIndexOf('/'),
        _index = 'examples/tables/data-tables/server-side/index.html';

    fileName = _path.substring(fileName + 1);

    if (req.headers['x-pjax']) {
        switch (fileName) {
            case 'index.html':
                if(req.headers['x-pjax-container'] === '#DTConent'){
                    res.render('examples/tables/data-tables/server-side/simple.html');
                }else{
                    res.render(_index, {
                        path1:'simple.html',
                        fileName:fileName
                    });
                }
                break;
            default:
                if(req.headers['x-pjax-container'] === '#DTConent'){
                    res.render('examples/tables/data-tables/server-side/'+fileName);
                }else{
                    res.render(_index, {
                        path1: fileName,
                        fileName:fileName
                    });
                }
                break;
        }
    } else {
        switch (fileName) {
            case 'index.html':
                res.render('index', {
                    path: _index,
                    path1:'simple.html',
                    fileName: fileName
                });
                break;
            default:
                res.render('index', {
                    path: _index,
                    path1: fileName,
                    fileName: fileName
                });
                break;
        }
    }
});
router.all('/examples/tables/data-tables/plug-ins/*', function (req, res) {
    res.charset = 'utf-8';
    var _path = req.path.substring(1),
        fileName = _path.lastIndexOf('/'),
        _index = 'examples/tables/data-tables/plug-ins/index.html';

    fileName = _path.substring(fileName + 1);

    if (req.headers['x-pjax']) {
        switch (fileName) {
            case 'index.html':
                if(req.headers['x-pjax-container'] === '#DTConent'){
                    res.render('examples/tables/data-tables/plug-ins/api.html');
                }else{
                    res.render(_index, {
                        path1:'api.html',
                        fileName:fileName
                    });
                }
                break;
            default:
                if(req.headers['x-pjax-container'] === '#DTConent'){
                    res.render('examples/tables/data-tables/plug-ins/'+fileName);
                }else{
                    res.render(_index, {
                        path1: fileName,
                        fileName:fileName
                    });
                }
                break;
        }
    } else {
        switch (fileName) {
            case 'index.html':
                res.render('index', {
                    path: _index,
                    path1:'api.html',
                    fileName: fileName
                });
                break;
            default:
                res.render('index', {
                    path: _index,
                    path1: fileName,
                    fileName: fileName
                });
                break;
        }
    }
});
router.all('/examples/tables/data-tables/others/*', function (req, res) {
    res.charset = 'utf-8';
    var _path = req.path.substring(1),
        fileName = _path.lastIndexOf('/'),
        _index = 'examples/tables/data-tables/others/index.html';

    fileName = _path.substring(fileName + 1);

    if (req.headers['x-pjax']) {
        switch (fileName) {
            case 'index.html':
                if(req.headers['x-pjax-container'] === '#DTConent'){
                    res.render('examples/tables/data-tables/others/fixed-header.html');
                }else{
                    res.render(_index, {
                        path1:'fixed-header.html',
                        fileName:fileName
                    });
                }
                break;
            default:
                if(req.headers['x-pjax-container'] === '#DTConent'){
                    res.render('examples/tables/data-tables/others/'+fileName);
                }else{
                    res.render(_index, {
                        path1: fileName,
                        fileName:fileName
                    });
                }
                break;
        }
    } else {
        switch (fileName) {
            case 'index.html':
                res.render('index', {
                    path: _index,
                    path1:'fixed-header.html',
                    fileName: fileName
                });
                break;
            default:
                res.render('index', {
                    path: _index,
                    path1: fileName,
                    fileName: fileName
                });
                break;
        }
    }
});

router.get('/login', (req, res) => {
  res.render('login')
});

router.get('/locked.html', (req, res) => {
  res.render('locked')
});

router.get('/home', (req, res) => {
    var _path = req.path.substring(1);

    if (req.headers['x-pjax']) {
        res.render("examples/home.html");
    } else {
        res.render('index', {path: "examples/home.html"});
    }
});

router.all('/*', function (req, res) {
    responseCommon(req, res);
});


module.exports = router;
