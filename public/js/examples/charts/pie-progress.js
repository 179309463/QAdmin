/**
 * QAdmin v1.2.0 (http://www.qadmin.com/)
 * Copyright 2015-2017 QAdmin Team
 * Licensed under the QAdmin License 1.0 (http://www.qadmin.com/about/#license)
 */
(function (document, window, $) {
    'use strict';

    // API方法示例
    // -------------------
    var $pageContent = $('#qadmin-pageContent'),
        $example = $('#examplePieApi');

    $pageContent.on('click', '.pie-api-start', function () {
        $example.asPieProgress('start');
    });
    $pageContent.on('click', '.pie-api-finish', function () {
        $example.asPieProgress('finish');
    });
    $pageContent.on('click', '.pie-api-go', function () {
        $example.asPieProgress('go', 200);
    });
    $pageContent.on('click', '.pie-api-go_percentage', function () {
        $example.asPieProgress('go', '50%');
    });
    $pageContent.on('click', '.pie-api-stop', function () {
        $example.asPieProgress('stop');
    });
    $pageContent.on('click', '.pie-api-reset', function () {
        $example.asPieProgress('reset');
    });

})(document, window, jQuery);