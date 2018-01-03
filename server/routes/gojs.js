var express = require('express'),
    router = express.Router(),
    type = 'iframe';

router.get('/gojs', (req, res) => {
  type = (req.query.pjax=="true" ? 'index' : 'iframe');
  res.render('application/index', {
    type: type,
    isModal: false,
    path: "gojs/home/index.html",
    nav_menu: 'gojs/nav-menu.html',
    site_menu: 'gojs/site-menu.html'
  })
})

router.get('/gojs/home', (req, res) => {
    var _path = req.path.substring(1);

    if (req.headers['x-pjax']) {
        res.render("gojs/home/index.html");
    } else {
        res.render('application/'+type, {
            type: type,
            isModal: false,
            path: "gojs/home/index.html",
            nav_menu: 'gojs/nav-menu.html',
            site_menu: 'gojs/site-menu.html'
        });
    }
});

module.exports = router;
