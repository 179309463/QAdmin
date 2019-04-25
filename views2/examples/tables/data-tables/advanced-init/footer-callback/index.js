/**
 * QAdmin v1.2.0 (http://www.qadmin.com/)
 * Copyright 2015-2017 QAdmin Team
 * Licensed under the QAdmin License 1.0 (http://www.qadmin.com/about/#license)
 */
(function (window, document, $) {
    "use strict";

    $('#dataTableExample').DataTable($.po('dataTable', {
        "footerCallback": function () {
            var api = this.api(),
                intVal = function (i) {
                    return typeof i === 'string' ?
                    i.replace(/[\¥,]/g, '') * 1 :
                        typeof i === 'number' ?
                            i : 0;
                };

            // 所有页
            var total = api
                .column(5)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            // 当前页
            var pageTotal = api
                .column(5, {page: 'current'})
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            // 更新foot
            $(api.column(5).footer()).html(
                '￥' + pageTotal + ' ( 共计：￥' + total + ')'
            );
        }
    }));
})(window, document, jQuery);

