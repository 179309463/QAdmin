/**
 * QAdmin v1.2.0 (http://www.qadmin.com/)
 * Copyright 2015-2017 QAdmin Team
 * Licensed under the QAdmin License 1.0 (http://www.qadmin.com/about/#license)
 */
(function (window, document, $) {
    "use strict";

    $('#dataTableExample').DataTable($.po('dataTable', {
        "processing": true,
        "ajax": $.ctx + "/data/examples/tables/dt-ajax-4.json",
        columns: [
            {data: "name"},
            {data: "position"},
            {data: "office"},
            {data: "extn"},
            {
                data: {
                    _: "start_date.display",
                    sort: "start_date.timestamp"
                }
            },
            {data: "salary"}
        ]
    }));
})(window, document, jQuery);

