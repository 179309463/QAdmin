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
            "url": "/employee/all/post",
            "crossDomain": true,
            "type": "POST",
            "dataType": "json"
        },
        "columns": [
            {"data": "name"},
            {"data": "title"},
            {"data": "base"},
            {"data": "age"},
            {"data": "hireDate"},
            {"data": "salary"}
        ]
    }));
})(window, document, jQuery);

