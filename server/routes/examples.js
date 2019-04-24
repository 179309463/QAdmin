var express = require('express'),
    router = express.Router(),
    type = 'iframe',
    theme = 'base';

router.get('/examples', (req, res) => {
  type = (req.query.modal=="true" ? 'modal' : (req.query.pjax=="true" ? 'application' : 'iframe'))
  theme = (req.query.theme == 'topbar' ? 'topbar' : 'base');

  res.render('layouts/application', {
    type: type,
    theme: theme,

    isModal: false,
    path: 'examples/home/index.html',
    nav_menu: 'examples/nav-menu.html',
    site_menu: 'examples/site-menu.html'
  })
})

router.get('/examples/home', (req, res) => {
    type = (req.query.modal=="true" ? 'modal' : (req.query.pjax=="true" ? 'application' : 'iframe'))
    var _path = req.path.substring(1);

    if (req.headers['x-pjax']) {
        res.render("examples/home/index.html");
    } else {
        res.render('layouts/'+type, {
            type: type,
            theme: theme,

            isModal: false,
            path: "examples/home/index.html",
            nav_menu: 'examples/nav-menu.html',
            site_menu: 'examples/site-menu.html'
        });
    }
});

module.exports = router;
