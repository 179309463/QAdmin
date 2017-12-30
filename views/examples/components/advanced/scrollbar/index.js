/**
 * QAdmin v1.2.0 (http://www.qadmin.com/)
 * Copyright 2015-2017 QAdmin Team
 * Licensed under the QAdmin License 1.0 (http://www.qadmin.com/about/#license)
 */
(function (document, window, $) {
    'use strict';

    // 动态添加内容
    // ----------------------------------
    (function () {
        $('#btnExampleDynamicAppend').on('click', function () {
            $('#exampleDynamic').append("<p>互联网生态保险平台——“海绵保”宣布完成数千万元A轮融资，投资方为海尔资本。华兴阿尔法担任此次融资的独家财务顾问。数月前海绵保曾获得纽信创投的天使投资。海绵保CEO许贵生（Seb）表示：“融资后，一方面将进一步强化技术能力，提升平台的开放能力；另一方面将紧密结合客户场景，深入分析消费金融需求，加快市场挖掘拓展速度”。提供服务，直到今年年底。在免费期过后，其数据流量月资费也低至每月149卢比（约合15元人民币）。</p><p>作为2020年夏季奥运会的举办地，日本东京承诺将会成为最具技术感的奥运盛会。为了能够让自动驾驶汽车上路，东京已经启动了Dynamic Map Planning计划。援引日媒Nikkei报道，该项目由汽车零件提供商三菱电子、地图厂商Zenrin和九家汽车厂商共同参与，有望在2020年实现3D地图，从而为奥运会和公共自动驾驶服务。</p><p>印度首富穆克什·安巴尼创立的新公司“Reliance Jio”投入运营。从9月5日起，将向全印度数亿人民提供高速廉价的4G网络服务。该公司的4G网络已经覆盖全印度80%的地区。在试运营期间，Jio将向全印度人免费提供服务，直到今年年底。在免费期过后，其数据流量月资费也低至每月149卢比（约合15元人民币）。</p><p>互联网生态保险平台——“海绵保”宣布完成数千万元A轮融资，投资方为海尔资本。华兴阿尔法担任此次融资的独家财务顾问。数月前海绵保曾获得纽信创投的天使投资。海绵保CEO许贵生（Seb）表示：“融资后，一方面将进一步强化技术能力，提升平台的开放能力；另一方面将紧密结合客户场景，深入分析消费金融需求，加快市场挖掘拓展速度”。提供服务，直到今年年底。在免费期过后，其数据流量月资费也低至每月149卢比（约合15元人民币）。</p><p>作为2020年夏季奥运会的举办地，日本东京承诺将会成为最具技术感的奥运盛会。为了能够让自动驾驶汽车上路，东京已经启动了Dynamic Map Planning计划。援引日媒Nikkei报道，该项目由汽车零件提供商三菱电子、地图厂商Zenrin和九家汽车厂商共同参与，有望在2020年实现3D地图，从而为奥运会和公共自动驾驶服务。</p><p>印度首富穆克什·安巴尼创立的新公司“Reliance Jio”投入运营。从9月5日起，将向全印度数亿人民提供高速廉价的4G网络服务。该公司的4G网络已经覆盖全印度80%的地区。在试运营期间，Jio将向全印度人免费提供服务，直到今年年底。在免费期过后，其数据流量月资费也低至每月149卢比（约合15元人民币）。</p>"
            );
        });
    })();


    // API 示例
    // -----------------------------
    (function () {
        // 滚动到
        $('#qadmin-pageContent, body').on('click', '.api-scroll-to', function () {
            var to = $(this).data('to');
            $('#exampleScollableApi').slimScroll({scrollTo: to});
        });

        // 滚动
        $('#qadmin-pageContent, body').on('click', '.api-scroll-by', function () {
            var to = $(this).data('by');
            $('#exampleScollableApi').slimScroll({scrollBy: to});
        });
    })();

})(document, window, jQuery);