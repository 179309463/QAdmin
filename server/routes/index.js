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

router.get('/login', (req, res) => {
  res.render('application/login/index.html')
});
router.get('/application/system/logout', (req, res) => {
  res.render('application/login/index.html')
});

router.get('/locked.html', (req, res) => {
  res.render('application/locked')
});

router.all('/*', function (req, res) {
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
});


module.exports = router;
