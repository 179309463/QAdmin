var express = require('express'),
    router = express.Router(),
    type = 'iframe';

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

module.exports = router;
