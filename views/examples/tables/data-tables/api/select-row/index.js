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
        $(this).toggleClass('selected');
    });

    $pageContent.on('click','#DTSelectRow',function () {
        toastr.info('选中了 ' + table.rows('.selected').data().length + ' 行数据');
    });
})(window, document, jQuery);

