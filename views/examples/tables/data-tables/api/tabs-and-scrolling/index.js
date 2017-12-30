/**
 * QAdmin v1.2.0 (http://www.qadmin.com/)
 * Copyright 2015-2017 QAdmin Team
 * Licensed under the QAdmin License 1.0 (http://www.qadmin.com/about/#license)
 */
(function (window, document, $) {
    "use strict";

    $('#qadmin-pageContent, body').on('shown.bs.tab', '#DTExample a[data-toggle="tab"]',function () {
        $.fn.dataTable.tables({visible: true, api: true}).columns.adjust();
    });

    $('#DTExample table.dataTable').DataTable($.po('dataTable', {
        ajax: $.ctx + '/views/examples/tables/dt-ajax.json',
        scrollY: 200,
        scrollCollapse: true,
        paging: false
    }));

    // 将搜索应用于第二个表格
    $('#myTable2').DataTable().search('北京').draw();
})(window, document, jQuery);

