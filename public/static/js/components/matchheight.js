/**
 * QAdmin v1.2.0 (http://www.qadmin.com/)
 * Copyright 2015-2017 QAdmin Team
 * Licensed under the QAdmin License 1.0 (http://www.qadmin.com/about/#license)
 */
(function(window, document, $){
    "use strict";

    $.components.register("matchHeight", {
        mode: "init",
        defaults: {},
        init: function (context) {
            if (typeof $.fn.matchHeight === "undefined") {
                return;
            }
            var defaults = $.components.getDefaults('matchHeight');

            $('[data-plugin="matchHeight"]', context).each(function () {
                var $this = $(this),
                    options = $.extend(true, {}, defaults, $this.data()),
                    matchSelector = $this.data('matchSelector');

                if (matchSelector) {
                    $this.find(matchSelector).matchHeight(options);
                } else {
                    $this.children().matchHeight(options);
                }

            });
        }
    });
})(window, document, jQuery);