(function (window, document, $) {
    'use strict';

    /**
     * 实现一个前端搜索插件（搜索内容以目标容器中的data-keyword为准）
     * 目标容器和搜索显示内容节点均需配置成参数
     * 对搜索出的内容进行排版。可自定义显示模板
     */

    const pluginName = 'search',
        defaults = {
            sContainer: '.search',
            vContainer: '.view',
            keyword: 'keywords'
        };

    /**
     *
     * @param el
     * @param options
     * @constructor
     */
    var Plugin = function (el, options) {
        var opts = this.opts = $.extend(true, {}, defaults, options);

        this.$searchInput = $(el);
        this.$sContainer = $(opts.sContainer);
        this.$vContainer = $(opts.vContainer);

        this.init();
    };

    Plugin.prototype = {
        init: function () {
            var self = this;

            this.$searchInput.on('keyup', function () {
                self.match(self._searchText());
            });
        },
        _searchText: function () {
            return this.$searchInput.val();
        },
        match: function (val) {
            var keyword = this.opts.keyword, existEle = [];

            if(!val) {
                this._render('');
                return;
            }

            this.$sContainer.find('[data-' + keyword + ']').each(function () {
                var $that = $(this),
                    keywords = $that.data(keyword).split(',');

                $.each(keywords, function (i, n) {
                    var result = new RegExp('^' + val, 'ig').test(n);

                    if (result) {
                        existEle.push($that);
                        return false;
                    }
                });
            });

            this._render(existEle);
        },
        _render: function (opts) {
            var $empty = $('#empty'),
                $vContainer = this.$vContainer, template = '';

            if(typeof opts === 'string' && opts === '') {
                $empty.stop().fadeOut();
                $empty.siblings().stop().fadeIn();
                $vContainer.stop().fadeOut();
            }else if(typeof opts === 'object') {
                if(opts.length > 0){
                    $vContainer.siblings().stop().fadeOut();

                    $.each(opts, function (i, n) {
                        template += n.prop('outerHTML');
                    });

                    if($vContainer.is(':visible')){
                        $vContainer.find('.row').html(template);
                    }else{
                        $vContainer.fadeIn().find('.row').html(template);
                    }

                }else{
                    $empty.siblings().stop().fadeOut();
                    $empty.stop().fadeIn();
                }
            }
        }
    };

    $.fn[pluginName] = function (options) {
        if (typeof options === 'string') {
            var method = options,
                method_arguments = Array.prototype.slice.call(arguments, 1);

            if (/^_/.test(method)) {
                console.warn('No such method:' + method);
            } else {
                return this.each(function () {
                    var api = $(this).data(pluginName);

                    if (api && typeof api[method] === 'function') {
                        api[method].apply(api, method_arguments);
                    }
                });
            }
        } else {
            return this.each(function () {
                if (!$(this).data(pluginName)) {
                    $(this).data(pluginName, new Plugin(this, options));
                } else {
                    $(this).data(pluginName).init();
                }
            });
        }
    };
})(window, document, jQuery);