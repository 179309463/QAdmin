/**
 * QAdmin v1.2.0 (http://www.qadmin.com/)
 * Copyright 2015-2017 QAdmin Team
 * Licensed under the QAdmin License 1.0 (http://www.qadmin.com/about/#license)
 */
(function (window, document, $) {
    "use strict";

    var table = $('#dataTableExample').DataTable($.po('dataTable'));
    $('#qadmin-pageContent').on('click', '#DTSubmitBtn', function () {
        console.log(table.$('input, select').serializeArray())
        var data = table.$('input, select').serialize();
        console.log(data.toString())
        toastr.info("将向服务器提交以下数据：<br>" + data.substr(0, 120) + '...');
    });
})(window, document, jQuery);

