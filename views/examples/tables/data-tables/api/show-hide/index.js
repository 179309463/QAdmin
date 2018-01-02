/**
 * QAdmin v1.2.0 (http://www.qadmin.com/)
 * Copyright 2015-2017 QAdmin Team
 * Licensed under the QAdmin License 1.0 (http://www.qadmin.com/about/#license)
 */
(function (window, document, $) {
    "use strict";

    var table = $('#dataTableExample').DataTable($.po('dataTable', {
        "scrollY": "200px",
        "paging": false
    }));

    $('#qadmin-pageContent').on('click', '#DTToggleBtn .btn', function () {
        // 获取 API 对象
        var column = table.column($(this).attr('data-column'));

        // 显示切换
        column.visible(!column.visible());
    });
})(window, document, jQuery);

