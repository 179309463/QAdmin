/**
 * QAdmin v1.2.0 (http://www.qadmin.com/)
 * Copyright 2015-2017 QAdmin Team
 * Licensed under the QAdmin License 1.0 (http://www.qadmin.com/about/#license)
 */
(function (window, document, $) {
    "use strict";

    $('#dataTableExample').DataTable($.po('dataTable', {
        "processing": true,
        "serverSide": true,
        "ajax": {
            "url": "/employee/all",
            "dataType": "json",
            "data": function (d) {
                d.myKey = "myValue";
                // d.custom = $('#myInput').val();
                // ……
            }
        }
    }));
})(window, document, jQuery);
