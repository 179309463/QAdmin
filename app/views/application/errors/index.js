/**
 * QAdmin v1.2.0 (http://www.qadmin.com/)
 * Copyright 2015-2017 QAdmin Team
 * Licensed under the QAdmin License 1.0 (http://www.qadmin.com/about/#license)
 */
(function () {
    'use strict';

    var btn;
    if (typeof $ === 'undefined') {
        btn = document.getElementById('closeTab');

        btn.innerHTML = '退回上一页';

        btn.onclick = function () {
            history.go(-1);
        };
    } else {
        window.Content = {
            run: function () {
                if (typeof $.site.contentTabs !== 'undefined') {
                    $('#qadmin-pageContent').on('click', '#closeTab', function () {
                        $.site.contentTabs.closeTab();
                    });
                }
            }
        };
    }
})();
