/**
 * QAdmin v1.2.0 (http://www.qadmin.com/)
 * Copyright 2015-2017 QAdmin Team
 * Licensed under the QAdmin License 1.0 (http://www.qadmin.com/about/#license)
 */
(function (window, document, $) {
    "use strict";

    var lastIdx = null;
    var table = $('#dataTableExample').DataTable($.po('dataTable'));
    $('#qadmin-pageContent, body')
        .on('mouseover', '#dataTableExample tbody td', function () {
            var colIdx = table.cell(this).index().column;
            if (colIdx !== lastIdx) {
                $(table.cells().nodes()).removeClass('highlight');
                $(table.column(colIdx).nodes()).addClass('highlight');
            }
        })
        .on('mouseleave', '#dataTableExample tbody', function () {
            $(table.cells().nodes()).removeClass('highlight');
        });
})(window, document, jQuery);

