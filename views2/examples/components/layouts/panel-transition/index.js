/**
 * QAdmin v1.2.0 (http://www.qadmin.com/)
 * Copyright 2015-2017 QAdmin Team
 * Licensed under the QAdmin License 1.0 (http://www.qadmin.com/about/#license)
 */
(function (document, window, $) {
    'use strict';

    var $example = $('#exampleTransition'),
        $pageContent = $('#qadmin-pageContent');

    $pageContent.on('click.panel.transition', '[data-type]', function () {
        var type = $(this).data('type');

        $example.data('animateList').run(type);
    });

    $pageContent.on('close.uikit.panel', '[class*=blocks-] > li > .panel', function () {
        $(this).parent().hide();
    });

})(document, window, jQuery);