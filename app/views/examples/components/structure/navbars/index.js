/**
 * QAdmin v1.2.0 (http://www.qadmin.com/)
 * Copyright 2015-2017 QAdmin Team
 * Licensed under the QAdmin License 1.0 (http://www.qadmin.com/about/#license)
 */
(function (document, window, $) {
    'use strict';

    window.Content = {
        run: function () {
            $('.scrollspy-example[data-spy="scroll"]').each(function () {
                var $spy = $(this)
                $spy.scrollspy($spy.data())
            })
        }
    };

})(document, window, jQuery);