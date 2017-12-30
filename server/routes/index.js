var express = require('express'),
    router = express.Router(),
    type = 'iframe';

router.get('/', (req, res) => {
  type = (req.query.pjax=="true" ? 'index' : 'iframe');
  res.render('application/index', {
    type: type,
    path: 'examples/home/index.html',
    nav_menu: 'examples/nav-menu.html',
    site_menu: 'examples/site-menu.html'
  })
})

console.log('载入路由...');

function responseCommon(req, res) {
    type = (req.query.pjax=="true" ? 'index' : 'iframe');
    var _path = req.path.substring(1);
    var i = _path.indexOf("/");
    var module = _path.substring(0, i);
    if(module=="application"){
        module = "examples"
    }

    if (req.headers['x-pjax']) {
        res.render(_path);
    } else {
        res.render('application/'+type, {
            type: type,
            path: _path,
            nav_menu: module+'/nav-menu.html',
            site_menu: module+'/site-menu.html'
        });
    }
}

router.all('/system/account/*', function (req, res) {
    res.charset = 'utf-8';
    var _path = req.path.substring(1),
        fileName = _path.lastIndexOf('/'),
        _path2 = _path.substring(0, fileName),
        fileName = _path2.lastIndexOf("/"),
        _index = 'application/system/account/index.html';

    fileName = _path.substring(fileName + 1);

    if (req.headers['x-pjax']) {
        switch (fileName) {
            case 'account/index.html':
                if(req.headers['x-pjax-container'] === '#accountContent'){
                    res.render('application/system/account/message/index.html');
                }else{
                    res.render(_index, {
                        path1:'message/index.html',
                        fileName:fileName
                    });
                }
                break;
            case 'password/index.html':
                if(req.headers['x-pjax-container'] === '#accountContent'){
                    res.render('application/system/account/password/index.html');
                }else{
                    res.render(_index, {
                        path1: 'password/index.html',
                        fileName:fileName
                    });
                }
                break;
            case 'log/index.html':
                if(req.headers['x-pjax-container'] === '#accountContent'){
                    res.render('application/system/log-table/index.html');
                }else{
                    res.render(_index,{
                        path1: '../log-table/index.html',
                        fileName:fileName
                    });
                }
                break;
            case 'display/index.html':
                if(req.headers['x-pjax-container'] === '#accountContent'){
                    res.render('application/system/settings-display/index.html');
                }else{
                    res.render(_index,{
                        path1: '../settings-display/index.html',
                        fileName:fileName
                    });
                }
                break;
        }
    } else {
        switch (fileName) {
            case 'account/index.html':
                res.render('index', {
                    type: type,
                    path: _index,
                    path1:'message/index.html',
                    fileName: fileName,
                    nav_menu: 'examples/nav-menu.html',
                    site_menu: 'examples/site-menu.html'
                });
                break;
            case 'password/index.html':
                res.render('index', {
                    type: type,
                    path: _index,
                    path1: 'password/index.html',
                    fileName: fileName,
                    nav_menu: 'examples/nav-menu.html',
                    site_menu: 'examples/site-menu.html'
                });
                break;
            case 'log/index.html':
                res.render('index',{
                    type: type,
                    path: _index,
                    path1: '../log-table/index.html',
                    fileName: fileName,
                    nav_menu: 'examples/nav-menu.html',
                    site_menu: 'examples/site-menu.html'
                });
                break;
            case 'display/index.html':
                res.render('index',{
                    type: type,
                    path: _index,
                    path1: '../settings-display/index.html',
                    fileName: fileName,
                    nav_menu: 'examples/nav-menu.html',
                    site_menu: 'examples/site-menu.html'
                });
                break;
        }
    }
});

router.all('/examples/tables/data-tables/basic-init/*', function (req, res) {
    res.charset = 'utf-8';
    var _path = req.path.substring(1),
        fileName = _path.lastIndexOf('/'),
        _path2 = _path.substring(0, fileName),
        fileName = _path2.lastIndexOf("/"),
        _index = 'examples/tables/data-tables/basic-init/index.html';

    fileName = _path.substring(fileName + 1);

    if (req.headers['x-pjax']) {
        switch (fileName) {
            case 'basic-init/index.html':
                if(req.headers['x-pjax-container'] === '#DTConent'){
                    res.render('examples/tables/data-tables/basic-init/zero-configuration/index.html');
                }else{
                    res.render(_index, {
                        path1:'zero-configuration/index.html',
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
            case 'basic-init/index.html':
                res.render('application/'+type, {
                    type: type,
                    path: _index,
                    path1:'zero-configuration/index.html',
                    fileName: fileName,
                    nav_menu: 'examples/nav-menu.html',
                    site_menu: 'examples/site-menu.html'
                });
                break;
            default:
                res.render('application/'+type, {
                    type: type,
                    path: _index,
                    path1: fileName,
                    fileName: fileName,
                    nav_menu: 'examples/nav-menu.html',
                    site_menu: 'examples/site-menu.html'
                });
                break;
        }
    }
});
router.all('/examples/tables/data-tables/advanced-init/*', function (req, res) {
    res.charset = 'utf-8';
    var _path = req.path.substring(1),
        fileName = _path.lastIndexOf('/'),
        _path2 = _path.substring(0, fileName),
        fileName = _path2.lastIndexOf("/"),
        _index = 'examples/tables/data-tables/advanced-init/index.html';

    fileName = _path.substring(fileName + 1);

    if (req.headers['x-pjax']) {
        switch (fileName) {
            case 'advanced-init/index.html':
                if(req.headers['x-pjax-container'] === '#DTConent'){
                    res.render('examples/tables/data-tables/advanced-init/events-live/index.html');
                }else{
                    res.render(_index, {
                        path1:'events-live/index.html',
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
            case 'advanced-init/index.html':
                res.render('application/'+type, {
                    type: type,
                    path: _index,
                    path1:'events-live/index.html',
                    fileName: fileName,
                    nav_menu: 'examples/nav-menu.html',
                    site_menu: 'examples/site-menu.html'
                });
                break;
            default:
                res.render('application/'+type, {
                    type: type,
                    path: _index,
                    path1: fileName,
                    fileName: fileName,
                    nav_menu: 'examples/nav-menu.html',
                    site_menu: 'examples/site-menu.html'
                });
                break;
        }
    }
});
router.all('/examples/tables/data-tables/data-sources/*', function (req, res) {
    res.charset = 'utf-8';
    var _path = req.path.substring(1),
        fileName = _path.lastIndexOf('/'),
        _path2 = _path.substring(0, fileName),
        fileName = _path2.lastIndexOf("/"),
        _index = 'examples/tables/data-tables/data-sources/index.html';

    fileName = _path.substring(fileName + 1);

    if (req.headers['x-pjax']) {
        switch (fileName) {
            case 'data-sources/index.html':
                if(req.headers['x-pjax-container'] === '#DTConent'){
                    res.render('examples/tables/data-tables/data-sources/dom/index.html');
                }else{
                    res.render(_index, {
                        path1:'dom/index.html',
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
            case 'data-sources/index.html':
                res.render('application/'+type, {
                    type: type,
                    path: _index,
                    path1:'dom/index.html',
                    fileName: fileName,
                    nav_menu: 'examples/nav-menu.html',
                    site_menu: 'examples/site-menu.html'
                });
                break;
            default:
                res.render('application/'+type, {
                    type: type,
                    path: _index,
                    path1: fileName,
                    fileName: fileName,
                    nav_menu: 'examples/nav-menu.html',
                    site_menu: 'examples/site-menu.html'
                });
                break;
        }
    }
});
router.all('/examples/tables/data-tables/api/*', function (req, res) {
    res.charset = 'utf-8';
    var _path = req.path.substring(1),
        fileName = _path.lastIndexOf('/'),
        _path2 = _path.substring(0, fileName),
        fileName = _path2.lastIndexOf("/"),
        _index = 'examples/tables/data-tables/api/index.html';

    fileName = _path.substring(fileName + 1);

    if (req.headers['x-pjax']) {
        switch (fileName) {
            case 'api/index.html':
                if(req.headers['x-pjax-container'] === '#DTConent'){
                    res.render('examples/tables/data-tables/api/add-row/index.html');
                }else{
                    res.render(_index, {
                        path1:'add-row/index.html',
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
            case 'api/index.html':
                res.render('application/'+type, {
                    type: type,
                    path: _index,
                    path1:'add-row/index.html',
                    fileName: fileName,
                    nav_menu: 'examples/nav-menu.html',
                    site_menu: 'examples/site-menu.html'
                });
                break;
            default:
                res.render('application/'+type, {
                    type: type,
                    path: _index,
                    path1: fileName,
                    fileName: fileName,
                    nav_menu: 'examples/nav-menu.html',
                    site_menu: 'examples/site-menu.html'
                });
                break;
        }
    }
});
router.all('/examples/tables/data-tables/ajax/*', function (req, res) {
    res.charset = 'utf-8';
    var _path = req.path.substring(1),
        fileName = _path.lastIndexOf('/'),
        _path2 = _path.substring(0, fileName),
        fileName = _path2.lastIndexOf("/"),
        _index = 'examples/tables/data-tables/ajax/index.html';

    fileName = _path.substring(fileName + 1);

    if (req.headers['x-pjax']) {
        switch (fileName) {
            case 'ajax/index.html':
                if(req.headers['x-pjax-container'] === '#DTConent'){
                    res.render('examples/tables/data-tables/ajax/simple/index.html');
                }else{
                    res.render(_index, {
                        path1:'simple/index.html',
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
            case 'ajax/index.html':
                res.render('application/'+type, {
                    type: type,
                    path: _index,
                    path1:'simple/index.html',
                    fileName: fileName,
                    nav_menu: 'examples/nav-menu.html',
                    site_menu: 'examples/site-menu.html'
                });
                break;
            default:
                res.render('application/'+type, {
                    type: type,
                    path: _index,
                    path1: fileName,
                    fileName: fileName,
                    nav_menu: 'examples/nav-menu.html',
                    site_menu: 'examples/site-menu.html'
                });
                break;
        }
    }
});
router.all('/examples/tables/data-tables/server-side/*', function (req, res) {
    res.charset = 'utf-8';
    var _path = req.path.substring(1),
        fileName = _path.lastIndexOf('/'),
        _path2 = _path.substring(0, fileName),
        fileName = _path2.lastIndexOf("/"),
        _index = 'examples/tables/data-tables/server-side/index.html';

    fileName = _path.substring(fileName + 1);

    if (req.headers['x-pjax']) {
        switch (fileName) {
            case 'server-side/index.html':
                if(req.headers['x-pjax-container'] === '#DTConent'){
                    res.render('examples/tables/data-tables/server-side/simple/index.html');
                }else{
                    res.render(_index, {
                        path1:'simple/index.html',
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
            case 'server-side/index.html':
                res.render('application/'+type, {
                    type: type,
                    path: _index,
                    path1:'simple/index.html',
                    fileName: fileName,
                    nav_menu: 'examples/nav-menu.html',
                    site_menu: 'examples/site-menu.html'
                });
                break;
            default:
                res.render('application/'+type, {
                    type: type,
                    path: _index,
                    path1: fileName,
                    fileName: fileName,
                    nav_menu: 'examples/nav-menu.html',
                    site_menu: 'examples/site-menu.html'
                });
                break;
        }
    }
});
router.all('/examples/tables/data-tables/plug-ins/*', function (req, res) {
    res.charset = 'utf-8';
    var _path = req.path.substring(1),
        fileName = _path.lastIndexOf('/'),
        _path2 = _path.substring(0, fileName),
        fileName = _path2.lastIndexOf("/"),
        _index = 'examples/tables/data-tables/plug-ins/index.html';

    fileName = _path.substring(fileName + 1);

    if (req.headers['x-pjax']) {
        switch (fileName) {
            case 'plug-ins/index.html':
                if(req.headers['x-pjax-container'] === '#DTConent'){
                    res.render('examples/tables/data-tables/plug-ins/api/index.html');
                }else{
                    res.render(_index, {
                        path1:'api/index.html',
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
            case 'plug-ins/index.html':
                res.render('application/'+type, {
                    type: type,
                    path: _index,
                    path1:'api/index.html',
                    fileName: fileName,
                    nav_menu: 'examples/nav-menu.html',
                    site_menu: 'examples/site-menu.html'
                });
                break;
            default:
                res.render('application/'+type, {
                    type: type,
                    path: _index,
                    path1: fileName,
                    fileName: fileName,
                    nav_menu: 'examples/nav-menu.html',
                    site_menu: 'examples/site-menu.html'
                });
                break;
        }
    }
});
router.all('/examples/tables/data-tables/others/*', function (req, res) {
    res.charset = 'utf-8';
    var _path = req.path.substring(1),
        fileName = _path.lastIndexOf('/'),
        _path2 = _path.substring(0, fileName),
        fileName = _path2.lastIndexOf("/"),
        _index = 'examples/tables/data-tables/others/index.html';

    fileName = _path.substring(fileName + 1);

    if (req.headers['x-pjax']) {
        switch (fileName) {
            case 'others/index.html':
                if(req.headers['x-pjax-container'] === '#DTConent'){
                    res.render('examples/tables/data-tables/others/fixed-header/index.html');
                }else{
                    res.render(_index, {
                        path1:'fixed-header/index.html',
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
            case 'others/index.html':
                res.render('application/'+type, {
                    type: type,
                    path: _index,
                    path1:'fixed-header/index.html',
                    fileName: fileName,
                    nav_menu: 'examples/nav-menu.html',
                    site_menu: 'examples/site-menu.html'
                });
                break;
            default:
                res.render('application/'+type, {
                    type: type,
                    path: _index,
                    path1: fileName,
                    fileName: fileName,
                    nav_menu: 'examples/nav-menu.html',
                    site_menu: 'examples/site-menu.html'
                });
                break;
        }
    }
});

router.get('/login', (req, res) => {
  res.render('application/login/index.html')
});
router.get('/application/system/logout', (req, res) => {
  res.render('application/login/index.html')
});

router.get('/locked.html', (req, res) => {
  res.render('application/locked')
});

router.get('/examples/home', (req, res) => {
    var _path = req.path.substring(1);

    if (req.headers['x-pjax']) {
        res.render("examples/home/index.html");
    } else {
        res.render('application/'+type, {
            type: type,
            path: "examples/home/index.html",
            nav_menu: 'examples/nav-menu.html',
            site_menu: 'examples/site-menu.html'
        });
    }
});

router.get('/gojs/home', (req, res) => {
    var _path = req.path.substring(1);

    if (req.headers['x-pjax']) {
        res.render("gojs/home/index.html");
    } else {
        res.render('application/'+type, {
            type: type,
            path: "gojs/home/index.html",
            nav_menu: 'gojs/nav-menu.html',
            site_menu: 'gojs/site-menu.html'
        });
    }
});

router.all('/*', function (req, res) {
    responseCommon(req, res);
});


module.exports = router;
