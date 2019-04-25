/**
 * QAdmin v1.2.0 (http://www.qadmin.com/)
 * Copyright 2015-2017 QAdmin Team
 * Licensed under the QAdmin License 1.0 (http://www.qadmin.com/about/#license)
 */
(function (window, document, $) {
    'use strict';

    var $nav = $('.site-navbar'),
        $conTabs = $('#qadmin-siteConTabs'),
        offsetTop = 0;

    if ($nav.length > 0) {
        offsetTop = $nav.innerHeight();
    }

    if($('body').hasClass('site-contabs-open')) {
        offsetTop += $conTabs.innerHeight();
    }

    var table = $('#exampleFixedHeader').DataTable($.po('dataTable', {
        pagingType: 'full_numbers',
        fixedHeader: {
            header: true,
            headerOffset: offsetTop
        }
    }));

    if (Breakpoints.is('xs')) {
        table.fixedHeader.disable();
    }

    Breakpoints.on('xs', 'leave', function () {
        table.fixedHeader.enable();
    });

    Breakpoints.on('sm', 'leave', function () {
        table.fixedHeader.disable();
    });

    $.leavePage = function(){
        table.fixedHeader.disable();
    };

})(window, document, jQuery);