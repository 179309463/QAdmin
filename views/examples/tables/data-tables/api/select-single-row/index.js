/**
 * QAdmin v1.2.0 (http://www.qadmin.com/)
 * Copyright 2015-2017 QAdmin Team
 * Licensed under the QAdmin License 1.0 (http://www.qadmin.com/about/#license)
 */
(function (window, document, $) {
    "use strict";

    var table = $('#dataTableExample').DataTable($.po('dataTable')),
        $pageContent = $('#qadmin-pageContent, body');

    $pageContent.on('click', '#dataTableExample tbody tr', function () {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        }
        else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    });

    $pageContent.on('click', '#DTDelRow',function () {
        table.row('.selected').remove().draw(false);
    });
})(window, document, jQuery);

