/**
 * QAdmin v1.2.0 (http://www.qadmin.com/)
 * Copyright 2015-2017 QAdmin Team
 * Licensed under the QAdmin License 1.0 (http://www.qadmin.com/about/#license)
 */
(function (window, document, $) {
    "use strict";

    $('#dataTableExample').dataTable($.po('dataTable', {
        "dom": '<"dt-dom-toolbar">frtip'
    }));

    $("div.dt-dom-toolbar").html('<b class="text-danger">自定义文字、图片等等</b>');
})(window, document, jQuery);

