/**
 * QAdmin v1.2.0 (http://www.qadmin.com/)
 * Copyright 2015-2017 QAdmin Team
 * Licensed under the QAdmin License 1.0 (http://www.qadmin.com/about/#license)
 */
(function (window, document, $) {
    "use strict";

    $('#dataTableExample').DataTable($.po('dataTable', {
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
    }));
})(window, document, jQuery);

