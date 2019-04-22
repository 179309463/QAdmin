var express = require('express'),
    router = express.Router(),
    type = 'iframe',
    theme = 'base';

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
                    theme: theme,
                    isModal: false,
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
                    theme: theme,
                    isModal: false,
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
                    theme: theme,
                    isModal: false,
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
                    theme: theme,
                    isModal: false,
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
                    theme: theme,
                    isModal: false,
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
                    theme: theme,
                    isModal: false,
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
                    theme: theme,
                    isModal: false,
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
                    theme: theme,
                    isModal: false,
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
                    theme: theme,
                    isModal: false,
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
                    theme: theme,
                    isModal: false,
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
                    theme: theme,
                    isModal: false,
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
                    theme: theme,
                    isModal: false,
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
                    theme: theme,
                    isModal: false,
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
                    theme: theme,
                    isModal: false,
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
                    theme: theme,
                    isModal: false,
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
                    theme: theme,
                    isModal: false,
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

module.exports = router;
