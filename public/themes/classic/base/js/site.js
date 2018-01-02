/**
 * QAdmin v1.2.0 (http://www.qadmin.com/)
 * Copyright 2015-2017 QAdmin Team
 * Licensed under the QAdmin License 1.0 (http://www.qadmin.com/about/#license)
 */
(function (docuemnt, window, $) {
    'use strict';

    /* globals Breakpoints, screenfull*/

    window.Content = $.extend({}, $.objExtend);

    if(window.top && window.top.$.site){
        $.site = window.top.$.site;
        return;
    }
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
                $link.attr('href', '/themes/classic/base/skins/' + settings.themeColor + etx + '.css');
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
                window.App = null;
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
                        style.attr('href', '/public/themes/classic/base/skins/' + self.themeColor + '/site' + min + '.css');
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
                    $('[data-toggle="dropdown"]').parent().removeClass('open');
                });
                loadStyles(iframeDocument);
            });
        }
    });

    $(document).ready(function () {
        $.site.run();
    });

})(document, window, jQuery);