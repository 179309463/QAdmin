var express = require('express'),
    router = express.Router(),
    type = 'iframe';

router.all('/application/system/account/*', function (req, res) {
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
                res.render('application/'+type, {
                    type: type,
                    isModal: false,
                    path: _index,
                    path1:'message/index.html',
                    fileName: fileName,
                    nav_menu: 'examples/nav-menu.html',
                    site_menu: 'examples/site-menu.html'
                });
                break;
            case 'password/index.html':
                res.render('application/'+type, {
                    type: type,
                    isModal: false,
                    path: _index,
                    path1: 'password/index.html',
                    fileName: fileName,
                    nav_menu: 'examples/nav-menu.html',
                    site_menu: 'examples/site-menu.html'
                });
                break;
            case 'log/index.html':
                res.render('application/'+type, {
                    type: type,
                    isModal: false,
                    path: _index,
                    path1: '../log-table/index.html',
                    fileName: fileName,
                    nav_menu: 'examples/nav-menu.html',
                    site_menu: 'examples/site-menu.html'
                });
                break;
            case 'display/index.html':
                res.render('application/'+type, {
                    type: type,
                    isModal: false,
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

module.exports = router;
