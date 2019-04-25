/**
 * QAdmin v1.2.0 (http://www.qadmin.com/)
 * Copyright 2015-2017 QAdmin Team
 * Licensed under the QAdmin License 1.0 (http://www.qadmin.com/about/#license)
 */
(function (document, window, $) {
    'use strict';

    window.Content = {
        timeButton: function () { // 重置时间
            $('#exampleTimeButton').on('click', function () {
                $('#inputTextCurrent').timepicker('setTime', new Date());
            });
        },
        inlineDatepicker: function () { // 内嵌日期选择器
            var $inlineDatepicker = $('#inlineDatepicker');
            $inlineDatepicker.datepicker($.po('datepicker',{
                language: 'zh-CN'
            }));
            $inlineDatepicker.on("changeDate", function () {
                $("#inputHiddenInline").val(
                    $("#inlineDatepicker").datepicker('getFormattedDate')
                );
            });
        },
        run: function () {
            this.inlineDatepicker();
            this.timeButton();
        }
    };

})(document, window, jQuery);
