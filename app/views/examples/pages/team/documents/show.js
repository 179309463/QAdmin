/**
 * QAdmin v1.2.0 (http://www.qadmin.com/)
 * Copyright 2015-2017 QAdmin Team
 * Licensed under the QAdmin License 1.0 (http://www.qadmin.com/about/#license)
 */
(function (document, window, $) {
    'use strict';

    window.Content = {
        scrollHandle: function () {
            $('.page-documents').scrollspy({
                target: '#articleAffix',
                offset: 200
            });
        },
        run: function () {
            this.scrollHandle();
        }
    };

})(document, window, jQuery);
