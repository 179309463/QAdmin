/**
 * QAdmin v1.2.0 (http://www.qadmin.com/)
 * Copyright 2015-2017 QAdmin Team
 * Licensed under the QAdmin License 1.0 (http://www.qadmin.com/about/#license)
 */
(function (window, document, $) {
    "use strict";

    var table = $('#dataTableExample').DataTable($.po('dataTable'));
    $('#qadmin-pageContent').on('click', '#dataTableExample tbody tr', function () {
        var data = table.row(this).data();
        toastr.info('您单击了"' + data[0] + '"的行');
    });
})(window, document, jQuery);

