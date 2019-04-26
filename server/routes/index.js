var express = require('express'),
    router = express.Router(),
    type = 'iframe',
    theme = 'base';

router.get(['/', '/system','/system/index','/system/index.html'], (req, res) => {
  type = (req.query.modal=="true" ? 'modal' : (req.query.pjax=="true" ? 'application' : 'iframe'));
  theme = (req.query.theme == 'topbar' ? 'topbar' : 'base');
  res.render('layouts/application', {
    type: type,
    theme: theme,
    path: 'examples/home.html',
    nav_menu: 'examples/nav-menu.html',
    site_menu: 'examples/site-menu.html'
  })
})

router.get('/login', (req, res) => {
  res.render('system/login.html')
});
router.get('/system/logout', (req, res) => {
  res.render('system/login.html')
});

router.get('/system/locked.html', (req, res) => {
  res.render('system/locked.html')
});

router.all('/examples/data_tables/*', function (req, res) {
  res.charset = 'utf-8';
  var path = req.path;//  /examples/data_tables/basic_init.html, /examples/data_tables/basic_init.html
  var slash = path.split("/");
  var moduleName, fileName;
  if(slash.length==4){
      moduleName = slash[3].split(".")[0];
      fileName = moduleName + "/index.html";
  }else{
      moduleName = slash[3];
      fileName = moduleName + "/" + slash[4];
  }

  if (req.headers['x-pjax']) {
      if(req.headers['x-pjax-container'] === '#DTConent'){
          res.render('examples/data_tables/'+fileName);
      }else{
          res.render('examples/data_tables/'+moduleName+".html", {
              path1: fileName
          });
      }
  } else {
      res.render('layouts/'+type, {
          type: type,
          theme: theme,
          isModal: false,
          path: 'examples/data_tables/'+moduleName+".html",
          path1: fileName
      });
  }
});

router.all('/*', function (req, res) {
    type = (req.query.modal=="true" ? 'modal' : (req.query.pjax=="true" ? 'application' : 'iframe'));
    theme = (req.query.theme == 'topbar' ? 'topbar' : 'base');

    var _path = req.path.substring(1);
    var i = _path.indexOf("/");
    var module = _path.substring(0, i);
    if(module=="application"){
        module = "examples"
    }

    if (req.headers['x-pjax']) {
        res.render(_path);
    } else {
        res.render('layouts/'+type, {
            type: type,
            theme: theme,
            path: _path,
            nav_menu: module+'/nav-menu.html',
            site_menu: module+'/site-menu.html'
        });
    }
});


module.exports = router;
