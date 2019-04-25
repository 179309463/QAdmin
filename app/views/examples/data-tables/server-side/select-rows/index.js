/**
 * QAdmin v1.2.0 (http://www.qadmin.com/)
 * Copyright 2015-2017 QAdmin Team
 * Licensed under the QAdmin License 1.0 (http://www.qadmin.com/about/#license)
 */
(function (window, document, $) {
    "use strict";

        var selected = [0, 2, 4, 7, 9, 12, 13, 15, 19, 26,34,37, 44, 47];

        $("#dataTableExample").DataTable($.po('dataTable', {
            "processing": true,
            "serverSide": true,
            "ajax": {
                "url": "/employee/all/get",
                "dataType": "json"
            },
            "columns": [
                {"data": "name"},
                {"data": "title"},
                {"data": "base"},
                {"data": "age"},
                {"data": "hireDate"},
                {"data": "salary"}
            ],
            "rowCallback": function (row, data) {
                if ($.inArray(data.DT_RowId, selected) !== -1) {
                    $(row).addClass('selected');
                }
            }
        }));

        $('#qadmin-pageContent').on('click', '#dataTableExample tbody tr', function () {
            var id = this.id;
            var index = $.inArray(id, selected);

            if (index === -1) {
                selected.push(id);
            } else {
                selected.splice(index, 1);
            }

            $(this).toggleClass('selected');
        });
})(window, document, jQuery);

