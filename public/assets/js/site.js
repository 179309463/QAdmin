/**
 * QAdmin v1.2.0 (http://www.qadmin.com/)
 * Copyright 2015-2017 QAdmin Team
 * Licensed under the QAdmin License 1.0 (http://www.qadmin.com/about/#license)
 */
(function (docuemnt, window, $) {
    'use strict';
    
    $.parentFrame = $(window.top.document);
    
    $.leavePage = null; // 离开页面方法

    $.ctx = ''; // 项目名称

    $.configs = $.configs || {}; // 配置基本信息

    $.extend($.configs, {
        _data: {},
        get: function (name) {
            var data = this._data;

            for (var i = 0; i < arguments.length; i++) {
                name = arguments[i];

                data = data[name];
            }

            return data;
        },
        set: function (name, value) {
            this._data[name] = value;
        },
        extend: function (name, options) {
            var value = this.get(name);
            return $.extend(true, value, options);
        }
    });

    $.colors = function (name, level) { // 获取颜色配置信息
        if (!$.configs.colors && typeof $.configs.colors[name] === 'undefined') {
            return null;
        }

        if (level && typeof $.configs.colors[name][level] !== 'undefined') {
            return $.configs.colors[name][level];
        }else{
            return $.configs.colors[name];
        }
    };

    $.po = function (name, options) { // 3rd调用参数
        var defaults = $.components.getDefaults(name);
        return $.extend(true, {}, defaults, options);
    };

    $.objExtend = $.objExtend || {}; // 公用模块对象

    $.extend($.objExtend, {
        _queue: {
            prepare: [],
            run: [],
            complete: []
        },
        run: function () {
            var self = this;
            this.dequeue('prepare', function () {
                self.trigger('before.run', self);
            });

            this.dequeue('run', function () {
                self.dequeue('complete', function () {
                    self.trigger('after.run', self);
                });
            });
        },
        dequeue: function (name, done) { // 队列当前状态离队，进行下一步操作
            var self = this,
                queue = this.getQueue(name),
                fn = queue.shift(),
                next = function () {
                    self.dequeue(name, done);
                };

            if (fn) {
                fn.call(this, next);
            } else if ($.isFunction(done)) {
                done.call(this);
            }
        },
        getQueue: function (name) { // 获取队列状态信息
            if (!$.isArray(this._queue[name])) {
                this._queue[name] = [];
            }

            return this._queue[name];
        },
        extend: function (obj) { // 公用模块对象扩展方法
            $.each(this._queue, function (name, queue) {
                if ($.isFunction(obj[name])) {
                    queue.unshift(obj[name]);

                    delete obj[name];
                }
            });
            $.extend(this, obj);
            return this;
        },
        trigger: function (name, data, $el) { // 离队状态执行动作

            if (typeof name === 'undefined') {
                return;
            }
            if (typeof $el === 'undefined') {
                $el = $("#qadmin-pageContent");
            }

            $el.trigger(name + '.app', data);
        }
    });

    $.components = $.components || {}; // 实现插件的提前检测和调用

    $.extend($.components, {
        _components: {},
        register: function (name, obj) {
            this._components[name] = obj;
        },
        init: function (args, name,context) {
            var self = this, obj;
                args =  args || true;

            if (typeof name === 'undefined') {
                $.each(this._components, function (name) {
                    self.init(args, name);
                });
            } else {
                context = context || document;

                obj = this.get(name);

                if (!obj) {
                    return;
                }

                switch (obj.mode) {
                    case 'default':
                        return this._initDefault(name, context);
                    case 'init':
                        return this._initComponent(obj, context);
                    case 'api':
                        return this._initApi(obj, context,args);
                    default:
                        this._initApi(obj, context,args);
                        this._initComponent(obj, context);
                        return;
                }
            }
        },
        _initDefault: function (name, context) { // jquery 3rd的基本用法
            if (!$.fn[name]) {
                return;
            }

            var defaults = this.getDefaults(name);

            $('[data-plugin=' + name + ']', context).each(function () {
                var $this = $(this),
                    options = $.extend(true, {}, defaults, $this.data());

                $this[name](options);
            });
        },
        _initComponent: function (obj, context) { // jquery 3rd的高级用法
            if ($.isFunction(obj.init)) {
                obj.init.call(obj, context);
            }
        },
        _initApi: function (obj, context, args) { // 其他处理
            if (args && $.isFunction(obj.api)) {
                obj.api.call(obj, context);
            }
        },
        getDefaults: function (name) {
            var component = this.get(name);

            return component && typeof component.defaults !== "undefined" ? component.defaults : {};
        },
        get: function (name) {
            if (typeof this._components[name] !== "undefined") {
                return this._components[name];
            } else {
                console.error('component:' + name + ' 脚本文件没有注册任何信息！');
                return undefined;
            }
        }
    });

    $.sessionStorage = $.sessionStorage || {};
    $.extend($.sessionStorage, {
        'set': function(key, value) {
            if (!sessionStorage) {
                console.error('该浏览器不支持sessionStorage对象');
            }
            if (!key || !value) {
                return null;
            }
            if (typeof value === 'object') {
                value = JSON.stringify(value);
            }
            sessionStorage.setItem(key, value);
        },
        'get': function(key) {
            var value;
            if (!sessionStorage) {
                console.error('该浏览器不支持sessionStorage对象');
            }
            value = sessionStorage.getItem(key);
            if (!value) {
                return null;
            }
            if (typeof value === 'string') {
                value = JSON.parse(value);
            }
            return value;
        },
        'remove': function(key) {
            if (!sessionStorage) {
                console.error('该浏览器不支持sessionStorage对象');
            }
            sessionStorage.removeItem(key);
        }
    });
    /* globals Breakpoints, screenfull*/

    window.Content = $.extend({}, $.objExtend);

    $.site = $.site || {};

    $.extend($.site, {
        tab_style: '',
        run: function () {

            $.site.tab_style = ($(".page-frame").length>0 ? 'iframe' : 'pjax');

            if($.site.tab_style=="iframe"){
                var self = this,
                $content = this.$content = $('#qadmin-pageContent');
                $.content = $.content || {};
                $.extend($.content, {
                    window: function() {
                        var name = $content.find('iframe.active').attr('name');
                        return window.frames[name];
                    },
                    document: function() {
                        var name = $content.find('iframe.active').attr('name');
                        return window.frames[name].document;
                    }
                });
                this.iframeDocument = null;
            }

            $.ctx = $('#qadmin-signOut').data('ctx') || $.ctx;

            function hideNavbar(){
                var $body = $('body');

                $body.addClass('site-navbar-collapsing');
                $('#qadmin-navbarCollapse').collapse('hide');

                setTimeout(function () {
                    $body.removeClass('site-navbar-collapsing');
                }, 10);

                $body.removeClass('site-navbar-collapse-show');
            }

            if (typeof $.site.menu !== 'undefined') {
                $.site.menu.init();
            }

            if (typeof $.site.contentTabs !== 'undefined') {
                $.site.contentTabs.init();
            }

            $('#qadmin-navMenu').responsiveHorizontalTabs({ // 导航条响应式
                tabParentSelector: '#qadmin-navTabs',
                fnCallback: function (el) {
                    if($('#qadmin-navMenu').is(':visible')) {
                        el.removeClass('is-load');
                    }
                }
            });

            if (typeof $.site.menubar !== 'undefined') { // 导航条&菜单的响应式工作
                $('.site-menubar').on('changing.site.menubar', function () {
                    var $menubar = $('[data-toggle="menubar"]');

                    $menubar.toggleClass('hided', !$.site.menubar.opened);
                    $menubar.toggleClass('unfolded', !$.site.menubar.folded);
                });

                $.site.menubar.init();

                Breakpoints.on('change', function () {
                    $.site.menubar.change();
                });

                /*
                 *  小屏幕下导航条展开 | 收起按钮
                 *  搜索按钮（href）
                 * */
                $(document).on('click', '[data-toggle="collapse"]', function (e) {
                    var $trigger = $(e.target),
                        href, target, $target;

                    if (!$trigger.is('[data-toggle="collapse"]')) {
                        $trigger = $trigger.parents('[data-toggle="collapse"]');
                    }

                    target = $trigger.attr('data-target') || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '');
                    $target = $(target);

                    if ($target.hasClass('navbar-search-overlap')) {
                        $target.find('input').focus();

                        e.preventDefault();
                    } else if ($target.attr('id') === 'qadmin-navbarCollapse') {
                        var isOpen = !$trigger.hasClass('collapsed'),
                            $body = $(document.body);

                        $body.addClass('site-navbar-collapsing');
                        $body.toggleClass('site-navbar-collapse-show', isOpen);

                        $('#qadmin-navMenu').responsiveHorizontalTabs({
                            tabParentSelector: '#qadmin-navTabs',
                            fnCallback: function (el) {
                                el.removeClass('is-load');
                            }
                        });

                        setTimeout(function () {
                            $body.removeClass('site-navbar-collapsing');
                        }, 350);
                    }
                });

                $(document).on('click', '[data-toggle="menubar"]', function () { // 菜单展开|收起控制按钮
                    if (Breakpoints.is('xs') && $('body').hasClass('site-menubar-open')){
                        hideNavbar();
                    }

                    $.site.menubar.toggle();
                });

                /*
                 *  菜单收起
                 *  导航条收起
                 * */

                $('.site-page').on('click', '#qadmin-pageContent', function () {
                    if (Breakpoints.is('xs') && $('body').hasClass('site-menubar-open')){
                        $.site.menubar.hide();

                        hideNavbar();
                    }
                });

                // 图标对应菜单展开
                $('#qadmin-navMenu >.nav-tabs >li:not(.no-menu)').on('click', function (e) {
                    if ($(e.target).closest('li').is('.dropdown')) {
                        return;
                    }

                    if (Breakpoints.is('xs')) {
                        $.site.menubar.open();
                    }
                });
            }

            if (typeof screenfull !== 'undefined') { // 全屏模式操作
                $(document).on('click', '[data-toggle="fullscreen"]', function () {
                    if (screenfull.enabled) {
                        screenfull.toggle();
                    }

                    return false;
                });
                if (screenfull.enabled) {
                    document.addEventListener(screenfull.raw.fullscreenchange, function () {
                        $('[data-toggle="fullscreen"]').toggleClass('active', screenfull.isFullscreen);
                    });
                }
            }

            /* 对下拉列表的其他功能 */
            $(document).on('show.bs.dropdown', function (e) {
                var $target = $(e.target), $menu,
                $trigger = e.relatedTarget ? $(e.relatedTarget) : $target.children('[data-toggle="dropdown"]'),
                animation = $trigger.data('animation');

                if (animation) {
                    $menu = $target.children('.dropdown-menu');

                    $menu.addClass('animation-' + animation);

                    $menu.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                        $menu.removeClass('animation-' + animation);
                    });
                }
            });

            $('[data-toggle="tooltip"]').tooltip({trigger: 'hover'});
            $('[data-toggle="popover"]').popover();

            if($.site.tab_style!="iframe"){
                $.components.init();
                window.Content.run();

                this.theme();
                this.pjaxFun();
            }else{
                if (window.localStorage) {
                    this.theme();
                    this.tabsDraw();
                }
                $.components.init();
            }
        },

        theme: function () { // 主题渲染
            if (!window.localStorage) {
                return;
            }

            var $body = $('body'),
                settingsName = 'qadmin.base.skinTools',
                $link = $('#qadmin-siteStyle', $('head')),
                settings = localStorage.getItem(settingsName),
                etx = $link.prop('href').indexOf('?v=') === -1 ? '' : '.min' ;

            if (!settings) {
                return;
            }

            settings = JSON.parse(settings);

            if (settings.themeColor && settings.themeColor !== 'primary') {
                $link.attr('href', '/assets/skins/' + settings.themeColor + etx + '.css');
            }

            if (settings.sidebar && settings.sidebar === 'site-menubar-light') {
                $('nav.site-menubar').addClass('site-menubar-light');
            }

            if (settings.navbar && settings.navbar !== ''){
                $('.site-navbar').addClass(settings.navbar);
            }

            if (settings.navbarInverse === ''){
                $('.site-navbar').removeClass('navbar-inverse');
            }

            if (settings.menuDisplay && settings.menuDisplay === 'site-menubar-fold') {
                $.site.menubar.fold();

                if (settings.menuTxtIcon && settings.menuTxtIcon === 'site-menubar-keep'){
                    $body.addClass('site-menubar-keep');
                }else{
                    $body.addClass('site-menubar-fold-alt');
                }
            }

            if (settings.tabFlag === '') {
                $body.removeClass('site-contabs-open');
            }

        },

        pjaxFun: function () {
            var $body = $('body');

            $(document).pjax('a[data-pjax]', {replace: true});

            $(document).on('submit', 'form[data-pjax]', function (event) {
                var container = $(this).attr("data-pjax");
                $.pjax.submit(event, container, {replace: true});
            });

            $(document).on('pjax:start', function () {
                window.onresize = null;
                //window.App = null;
                window.Content = $.extend({}, $.objExtend);

                $("#qadmin-pageContent").off();
                $(window).off('resize');
                $('#qadmin-navMenu').responsiveHorizontalTabs({ // 导航条响应式
                    tabParentSelector: '#qadmin-navTabs',
                    fnCallback: function (el) {
                        if($('#qadmin-navMenu').is(':visible')) {
                            el.removeClass('is-load');
                        }
                    }
                });
                $(window).on('resize', $.site.contentTabs.resize);

                $('head').find('script[pjax-script]').remove();
                $body.addClass("site-page-loading");
                $body.find('script:last').nextAll().remove();
                $body.find('nav:first').prevAll(':not(script)').remove();
                $(document).off('click.site.bootbox', '[data-plugin="bootbox"]');
                $(document).off('click.site.alertify', '[data-plugin="alertify"]');

                //清除body标签上新添加的内联样式
                $('body').removeAttr('style');
                $('html').removeAttr('style');

                if($.isFunction($.leavePage)){
                    $.leavePage();
                    $.leavePage = null;
                }

            });

            $(document).on('pjax:callback', function () {
                $.components.init();
                if (window.Content !== null) {
                    window.Content.run();
                }

                $body.removeClass("site-page-loading");

            });

            $(document).on('pjax:success', function () {
                $('[data-toggle="tooltip"]').tooltip();
                $('[data-toggle="popover"]').popover();

                // 清除控制台console信息
                //console.clear();

                // 给标签也换title
                var $labelNav = $(".con-tabs"),
                    title = $.trim($('title').text()),
                    labelTitle = $.trim($labelNav.find('li.active').text());

                if (title !== labelTitle) {
                    $labelNav.find("li.active span").text(title);
                }

            });
        },

        tabsDraw: function() {
            var self = this;
            var targetUrl;
            var hash = location.hash.substring(2);
            var loadIframe = function(key, checked, url) {
                var iframe = self.$content.find('iframe:first');
                if (key === checked || !hash) {
                    targetUrl = url;
                    $('.con-tabs').find('li:first').addClass('active');
                    iframe.attr('src', url);
                    self.iframeEvents(iframe);
                } else {
                    iframe.removeClass('active');
                }
            };
            var setting = $.sessionStorage.get('qadmin.base.contentTabs');
            var checked = setting.checked;
            for (var key in setting) {
                var option = setting[key];
                if (key === 'checked' || key === 'tabId') {
                    continue;
                } else if (key === 'iframe-0') {
                    loadIframe(key, checked, option.url);
                    continue;
                }
                var url = option.url;
                var name = option.name;
                var labelHtml = '<a href="' + url + '" ' + 'target="' + key + '"' + '" title="' + name + '' + '" rel="contents"><span>' + name + '</span><i class="icon' + ' wb-close-mini">' + '</i></a></li>';
                var iframeHtml;
                if (key === checked && hash) {
                    targetUrl = url;
                    labelHtml = '<li class="active">' + labelHtml;
                    iframeHtml = '<iframe src="' + url + '" frameborder="0" name="' + key + '" class="page-frame animation-fade active"></iframe>';
                } else {
                    labelHtml = '<li>' + labelHtml;
                    iframeHtml = '<iframe src="" frameborder="0" name="' + key + '" class="page-frame animation-fade"></iframe>';
                }
                $('.con-tabs').append(labelHtml);
                self.$content.append(iframeHtml);
            }
            if (hash !== targetUrl && hash) {
                var title = '未知页面';
                $('.site-menu a').each(function() {
                    var that = $(this);
                    if (that.attr('href') === hash) {
                        title = $.trim(that.attr('title') || that.text());
                        return ! [];
                    }
                });
                $.site.contentTabs.buildTag({
                    'name': title,
                    'url': hash
                });
            }
            $.site.contentTabs.enable($('.con-tabs').find('.active'));
            if (Object.keys(setting).length >= 0x13) {
                $.site.contentTabs.labelSize();
                $.site.contentTabs.labelEvent($('.con-tabs'), 'media');
            }
        },
        
        iframeEvents: function(iframe) {
            var self = this,
            loadStyles = function(iframeDocument) {
                $('#qadmin-siteStyle', iframeDocument).load(function() {
                    var style = $('#qadmin-siteStyle', self.iframeDocument);
                    var min = style.prop('href').indexOf('?v=') === -1 ? '': '.min';
                    if (self.themeColor && self.themeColor !== 'primary') {
                        style.attr('href', '/public/assets/skins/' + self.themeColor + '/site' + min + '.css');
                    }
                });
            };
            iframe.load(function() {
                var iframeDocument = self.iframeDocument = $.content.document();
                $(iframeDocument).on('click', function() {
                    if (Breakpoints.is('xs') && $('body').hasClass('site-menubar-open')) {
                        $.site.menubar.hide();
                        self._hideNavbar();
                    }
                    $('.dropdown-menu.show').removeClass('show');
                });
                loadStyles(iframeDocument);
            });
        }
    });

    $(document).ready(function () {
        $.site.run();
    });

    $.configs.set('site', {
        fontFamily: '"Helvetica Neue", Helvetica, Tahoma, Arial, "Microsoft Yahei", "Hiragino Sans GB", "WenQuanYi Micro Hei", sans-serif'
    });

    $.configs.colors = {
        "red": {
            "100": "#ffeaea",
            "200": "#fad3d3",
            "300": "#fab4b4",
            "400": "#fa9898",
            "500": "#fa7a7a",
            "600": "#f96868",
            "700": "#e9595b",
            "800": "#d6494b"
        },
        "pink": {
            "100": "#fce4ec",
            "200": "#ffccde",
            "300": "#fba9c6",
            "400": "#fb8db4",
            "500": "#f978a6",
            "600": "#f96197",
            "700": "#f44c87",
            "800": "#e53b75"
        },
        "purple": {
            "100": "#f6f2ff",
            "200": "#e3dbf4",
            "300": "#d2c5ec",
            "400": "#bba7e4",
            "500": "#a58add",
            "600": "#926dde",
            "700": "#7c51d1",
            "800": "#6d45bc"
        },
        "indigo": {
            "100": "#edeff9",
            "200": "#dadef5",
            "300": "#bcc5f4",
            "400": "#9daaf3",
            "500": "#8897ec",
            "600": "#677ae4",
            "700": "#5166d6",
            "800": "#465bd4"
        },
        "blue": {
            "100": "#e8f1f8",
            "200": "#d5e4f1",
            "300": "#bcd8f1",
            "400": "#a2caee",
            "500": "#89bceb",
            "600": "#62a8ea",
            "700": "#4e97d9",
            "800": "#3583ca"
        },
        "cyan": {
            "100": "#ecf9fa",
            "200": "#d3eff2",
            "300": "#baeaef",
            "400": "#9ae1e9",
            "500": "#77d6e1",
            "600": "#57c7d4",
            "700": "#47b8c6",
            "800": "#37a9b7"
        },
        "teal": {
            "100": "#ecfdfc",
            "200": "#cdf4f1",
            "300": "#99e1da",
            "400": "#79d1c9",
            "500": "#56bfb5",
            "600": "#3aa99e",
            "700": "#269b8f",
            "800": "#178d81"
        },
        "green": {
            "100": "#e7faf2",
            "200": "#bfedd8",
            "300": "#9fe5c5",
            "400": "#7dd3ae",
            "500": "#5cd29d",
            "600": "#46be8a",
            "700": "#36ab7a",
            "800": "#279566"
        },
        "light-green": {
            "100": "#f1f7ea",
            "200": "#e0ecd1",
            "300": "#cadfb1",
            "400": "#bad896",
            "500": "#acd57c",
            "600": "#9ece67",
            "700": "#83b944",
            "800": "#70a532"
        },
        "yellow": {
            "100": "#fffae7",
            "200": "#f9eec1",
            "300": "#f6e7a9",
            "400": "#f8e59b",
            "500": "#f7e083",
            "600": "#f7da64",
            "700": "#f9cd48",
            "800": "#fbc02d"
        },
        "orange": {
            "100": "#fff3e6",
            "200": "#ffddb9",
            "300": "#fbce9d",
            "400": "#f6be80",
            "500": "#f4b066",
            "600": "#f2a654",
            "700": "#ec9940",
            "800": "#e98f2e"
        },
        "brown": {
            "100": "#fae6df",
            "200": "#e2bdaf",
            "300": "#d3aa9c",
            "400": "#b98e7e",
            "500": "#a17768",
            "600": "#8d6658",
            "700": "#7d5b4f",
            "800": "#715146"
        },
        "grey": {
            "100": "#fafafa",
            "200": "#eeeeee",
            "300": "#e0e0e0",
            "400": "#bdbdbd",
            "500": "#9e9e9e",
            "600": "#757575",
            "700": "#616161",
            "800": "#424242"
        },
        "blue-grey": {
            "100": "#f3f7f9",
            "200": "#e4eaec",
            "300": "#ccd5db",
            "400": "#a3afb7",
            "500": "#76838f",
            "600": "#526069",
            "700": "#37474f",
            "800": "#263238"
        }
    };

    var isIE = (function () { // 检查IE
        if (!!window.ActiveXObject || "ActiveXObject" in window){
            return true;
        }else{
            return false;
        }
    });

    if(isIE){
        $.ajaxSetup({
            cache: false
        });
    }

    var $content = $("#qadmin-pageContent");
    
    /*公用模块对象*/
    window.app = {
        handleSlidePanel: function () {
            if (typeof $.slidePanel === 'undefined') {
                return;
            }

            $content.on('click', '[data-toggle=slidePanel]', function (e) {
                $.slidePanel.show({
                    url: $(this).data('url'),
                    settings: {
                        cache: false
                    }
                }, $.po('slidePanel', {
                    template: function (options) {
                        return '<div class="' + options.classes.base + ' ' + options.classes.base + '-' + options.direction + '">' +
                            '<div class="' + options.classes.base + '-scrollable"><div>' +
                            '<div class="' + options.classes.content + '"></div>' +
                            '</div></div>' +
                            '<div class="' + options.classes.base + '-handler"></div>' +
                            '</div>';
                    },
                    afterLoad: function () {
                        this.$panel.find('.' + this.options.classes.base + '-scrollable')
                            .slimScroll($.po('slimScroll'));
                    }
                }));

                e.stopPropagation();
            });
        },
        handleMultiSelect: function () {
            var $all = $('.select-all');

            $content.on('change', '.multi-select', function (e, isSelectAll) {
                if (isSelectAll) {
                    return;
                }

                var $select = $('.multi-select'),
                    total = $select.length,
                    checked = $select.find('input:checked').length;
                if (total === checked) {
                    $all.find('input').prop('checked', true);
                } else {
                    $all.find('input').prop('checked', false);
                }
            });

            $all.on('change', function () {
                var checked = $(this).find('input').prop('checked');

                $('.multi-select input').each(function () {
                    $(this).prop('checked', checked).trigger('change', [true]);
                });

            });
        },
        handleListActions: function () { // 操作主体部分，左侧菜单编辑
            $content.on('keydown', '.list-editable [data-bind]', function (event) {
                var keycode = (event.keyCode ? event.keyCode : event.which);

                if (keycode === 13 || keycode === 27) {
                    var $input = $(this),
                        bind = $input.data('bind'),
                        $list = $input.parents('.list-group-item'),
                        $content = $list.find('.list-content'),
                        $editable = $list.find('.list-editable'),
                        $update = bind ? $list.find(bind) : $list.find('.list-text');

                    if (keycode === 13) {
                        $update.html($input.val());
                    } else {
                        $input.val($update.text());
                    }

                    $content.show();
                    $editable.hide();
                }
            });

            $content.on('click', '[data-toggle="list-editable-close"]', function () {
                var $btn = $(this),
                    $list = $btn.parents('.list-group-item'),
                    $content = $list.find('.list-content'),
                    $editable = $list.find('.list-editable');

                $content.show();
                $editable.hide();
            });
        },
        pageAside: function () {
            var pageAside = $(".page-aside"),
                isOpen = pageAside.hasClass('open');

            pageAside.toggleClass('open', !isOpen);
        },
        run: function () {
            var self = this;

            // 小屏下侧边栏滚动
            $content.on('click', '.page-aside-switch', function (e) {
                self.pageAside();
                e.stopPropagation();
            });

        }
    };

    window.App = $.extend({}, $.objExtend);
    window.App.extend(window.app);
})(document, window, jQuery);