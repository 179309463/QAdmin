/**
 * QAdmin v1.2.0 (http://www.qadmin.com/)
 * Copyright 2015-2017 QAdmin Team
 * Licensed under the QAdmin License 1.0 (http://www.qadmin.com/about/#license)
 */
(function (document, window, $) {
    'use strict';

    window.Content = {
 
        inputTokenfieldTypeahead: function () { // Tokenfield 和 Typeahead 结合使用
            var engine = new Bloodhound({
                local: [{
                    value: 'red-红色'
                }, {
                    value: 'blue-蓝色'
                }, {
                    value: 'green-绿色'
                }, {
                    value: 'yellow-黄色'
                }, {
                    value: 'violet-紫罗兰'
                }, {
                    value: 'brown-棕色'
                }, {
                    value: 'purple-紫色'
                }, {
                    value: 'black-黑色'
                }, {
                    value: 'white-白色'
                }],
                datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
                queryTokenizer: Bloodhound.tokenizers.whitespace
            });

            // engine.initialize();

            $('#inputTokenfieldTypeahead').tokenfield({
                typeahead: [null, {
                    name: 'engine',
                    displayKey: 'value',
                    source: engine.ttAdapter()
                }]
            });
        },
        inputTokenfieldEvents: function () {  // Tokenfield 事件
            $('#inputTokenfieldEvents')
                .on('tokenfield:createtoken', function (e) {
                    var data = e.attrs.value.split('|');
                    e.attrs.value = data[1] || data[0];
                    e.attrs.label = data[1] ? data[0] + ' (' + data[1] + ')' : data[0];
                })
                .on('tokenfield:createdtoken', function (e) {
                    // 邮件验证
                    var re = /\S+@\S+\.\S+/;
                    var valid = re.test(e.attrs.value);
                    if (!valid) {
                        $(e.relatedTarget).addClass('invalid');
                    }
                })
                .on('tokenfield:edittoken', function (e) {
                    if (e.attrs.label !== e.attrs.value) {
                        var label = e.attrs.label.split(' (');
                        e.attrs.value = label[0] + '|' + e.attrs.value;
                    }
                })
                .on('tokenfield:removedtoken', function (e) {
                    if (e.attrs.length > 1) {
                        var values = $.map(e.attrs, function (attrs) {
                            return attrs.value;
                        });
                        toastr.info(e.attrs.length + '已删除：' + values.join(', '));
                    } else {
                        toastr.info('已删除：' + e.attrs.value);
                    }
                })
                .tokenfield();
        },
        tagsObj: function () { // 标签使用对象
            var cities = new Bloodhound({
                datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                prefetch: $.ctx + '/views/examples/forms/advanced/index.cities.json'
            });
            cities.initialize();

            var $input = $('#inputTagsObject');
            $input.tagsinput($.po('tagsinput',{
                itemValue: 'value',
                itemText: 'text',
                typeaheadjs: [{
                    hint: true,
                    highlight: true,
                    minLength: 1
                }, {
                    name: 'cities',
                    displayKey: 'text',
                    source: cities.ttAdapter()
                }]
            }));

            $input.tagsinput('add', {
                "value": 1,
                "text": "北京",
                "continent": "北京"
            });
            $input.tagsinput('add', {
                "value": 2,
                "text": "广州",
                "continent": "广东"
            });
            $input.tagsinput('add', {
                "value": 3,
                "text": "韶关",
                "continent": "广东"
            });
            $input.tagsinput('add', {
                "value": 4,
                "text": "深圳",
                "continent": "广东"
            });
            $input.tagsinput('add', {
                "value": 5,
                "text": "珠海",
                "continent": "广东"
            });
        },
        tagsSort: function () { //标签分类
            var cities = new Bloodhound({
                datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                prefetch: $.ctx + '/views/examples/forms/advanced/index.cities.json'
            });
            cities.initialize();

            var $input = $('#inputTagsCategorizing');

            $input.tagsinput($.po('tagsinput',{
                tagClass: function (item) {
                    switch (item.continent) {
                        case '北京':
                            return 'badge badge-primary';
                        case '广东':
                            return 'badge badge-danger';
                        case '浙江':
                            return 'badge badge-success';
                        case '新疆':
                            return 'badge badge-default';
                        case '江苏':
                            return 'badge badge-warning';
                    }
                },
                itemValue: 'value',
                itemText: 'text',
                typeaheadjs: [{
                    hint: true,
                    highlight: true,
                    minLength: 1
                }, {
                    name: 'cities',
                    displayKey: 'text',
                    source: cities.ttAdapter()
                }]
            }));

            $input.tagsinput('add', {
                "value": 1,
                "text": "北京",
                "continent": "北京"
            });
            $input.tagsinput('add', {
                "value": 2,
                "text": "广州",
                "continent": "广东"
            });
            $input.tagsinput('add', {
                "value": 3,
                "text": "韶关",
                "continent": "广东"
            });
            $input.tagsinput('add', {
                "value": 4,
                "text": "深圳",
                "continent": "广东"
            });
            $input.tagsinput('add', {
                "value": 5,
                "text": "珠海",
                "continent": "广东"
            });

        },
        run: function () {
            this.inputTokenfieldEvents();
            this.inputTokenfieldTypeahead();
            this.tagsObj();
            this.tagsSort();
        }
    };

})(document, window, jQuery);
