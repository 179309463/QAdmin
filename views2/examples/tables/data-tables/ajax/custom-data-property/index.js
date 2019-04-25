/**
 * QAdmin v1.2.0 (http://www.qadmin.com/)
 * Copyright 2015-2017 QAdmin Team
 * Licensed under the QAdmin License 1.0 (http://www.qadmin.com/about/#license)
 */
(function (window, document, $) {
    "use strict";

    $('#dataTableExample').DataTable($.po('dataTable', {
        "processing": true,
        "ajax": $.ctx + "/views/examples/tables/data-tables/ajax/custom-data-property/index.json",
        // 默认为data，这里定义为demo
        "dataSrc": "demo"
    }));
})(window, document, jQuery);

