/**
 * QAdmin v1.2.0 (http://www.qadmin.com/)
 * Copyright 2015-2017 QAdmin Team
 * Licensed under the QAdmin License 1.0 (http://www.qadmin.com/about/#license)
 */
(function (document, window, $) {
    'use strict';

    window.Content = {
        colorpickerEvent: function () {
            $('#colorpickerEvent').colorpicker().on('changeColor', function(e) {
                toastr.info('颜色值已改变');
                e.stopPropagation();
            });
        },
        run: function () {
            this.colorpickerEvent();

            $('#definedIcon1').iconpicker({
                title: '自定义配置',
                icons: [
                    {title:'fa-github',searchTerms:['fa-github']},
                    {title:'fa-heart',searchTerms:['fa-heart']},
                    {title:'fa-html5',searchTerms:['fa-html5']},
                    {title:'fa-css3',searchTerms:['fa-css3']}
                ],
                fullClassFormatter: function(value) {
                    return "icon fa " + value;
                },
                templates: {
                    popover: '<div class="iconpicker-popover popover"><div class="arrow"></div>' + '<div class="popover-title"></div><div class="popover-content"></div></div>',
                    footer: '<div class="popover-footer"></div>',
                    buttons: '<button class="iconpicker-btn iconpicker-btn-cancel btn btn-default btn-sm">取消</button>' + ' <button class="iconpicker-btn iconpicker-btn-accept btn btn-primary btn-sm">确认</button>',
                    search: '<input type="search" class="form-control iconpicker-search" placeholder="查找图标">',
                    iconpicker: '<div class="iconpicker"><div class="iconpicker-items"></div></div>',
                    iconpickerItem: '<a role="button" href="#" class="iconpicker-item"><i></i></a>'
                },
                selectedCustomClass: 'badge badge-success',
                mustAccept:true,
                placement:'bottomRight',
                showFooter:true
            });
            $('#definedIcon2').iconpicker({
                title: '使用 glypghicons',
                icons: $.merge([
                    {title:'glyphicon-home',searchTerms:['glyphicon-home']},
                    {title:'glyphicon-repeat',searchTerms:['glyphicon-repeat']},
                    {title:'glyphicon-search',searchTerms:['glyphicon-search']},
                    {title:'glyphicon-arrow-left',searchTerms:['glyphicon-arrow-left']},
                    {title:'glyphicon-arrow-right',searchTerms:['glyphicon-arrow-right']},
                    {title:'glyphicon-star',searchTerms:['glyphicon-star']}
                ], []),//$.iconpicker.defaultOptions.icons),
                fullClassFormatter: function(value) {
                    if(value.match(/^fab fa-/)){
                        return 'icon fa '+value;
                    }else{
                        return 'icon glyphicon '+value;
                    }
                },
                templates: {
                    popover: '<div class="iconpicker-popover popover"><div class="arrow"></div>' + '<div class="popover-title"></div><div class="popover-content"></div></div>',
                    footer: '<div class="popover-footer"></div>',
                    buttons: '<button class="iconpicker-btn iconpicker-btn-cancel btn btn-default btn-sm">取消</button>' + ' <button class="iconpicker-btn iconpicker-btn-accept btn btn-primary btn-sm">确认</button>',
                    search: '<input type="search" class="form-control iconpicker-search" placeholder="查找图标">',
                    iconpicker: '<div class="iconpicker"><div class="iconpicker-items"></div></div>',
                    iconpickerItem: '<a role="button" href="#" class="iconpicker-item"><i></i></a>'
                }
            });
        }
    };

})(document, window, jQuery);
