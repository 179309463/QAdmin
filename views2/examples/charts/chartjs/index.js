/**
 * QAdmin v1.2.0 (http://www.qadmin.com/)
 * Copyright 2015-2017 QAdmin Team
 * Licensed under the QAdmin License 1.0 (http://www.qadmin.com/about/#license)
 */
(function (document, window, $) {
    'use strict';

    Chart.defaults.global.responsive = true;

    // 曲线图示例
    var lineChart = (function () {
        return new Chart($("#exampleChartjsLine"), {
            type:"line", 
            data: {
                labels: ["1月", "2", "3月", "4月", "5月", "6月", "7月"],
                scaleShowGridLines: true,
                scaleShowVerticalLines: false,
                scaleGridLineColor: "#ebedf0",
                datasets: [{
                    label: '分类1',
                    backgroundColor: "rgba(204, 213, 219, .1)",
                    borderColor: $.colors("blue-grey", 300),
                    pointBackgroundColor: $.colors("blue-grey", 300),
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: $.colors("blue-grey", 300),
                    data: [65, 59, 80, 81, 56, 55, 40]
                }, {
                    label: '分类2',
                    backgroundColor: "rgba(98, 168, 234, .1)",
                    borderColor: $.colors("purple", 600),
                    pointBackgroundColor: $.colors("purple", 600),
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: $.colors("purple", 600),
                    data: [28, 48, 40, 19, 86, 27, 90]
                }]
            }
        });
    })();

    // 柱状图示例
    var barChart = (function () {
        return new Chart($("#exampleChartjsBar"), {
            type: 'bar', 
            data: {
                labels: ["1月", "2", "3月", "4月", "5月"],
                scaleShowGridLines: true,
                scaleShowVerticalLines: false,
                scaleGridLineColor: "#ebedf0",
                barShowStroke: false,
                datasets: [{
                    label: '分类1',
                    backgroundColor: $.colors("blue", 500),
                    borderColor: $.colors("blue", 500),
                    hoverBorderColor: $.colors("blue", 500),
                    hoverBackgroundColor: $.colors("blue", 500),
                    data: [65, 45, 75, 50, 60]
                }, {
                    label: '分类2',
                    backgroundColor: $.colors("blue-grey", 300),
                    borderColor: $.colors("blue-grey", 300),
                    hoverBorderColor: $.colors("blue-grey", 300),
                    hoverBackgroundColor: $.colors("blue-grey", 300),
                    data: [30, 20, 40, 25, 45]
                }]
            }
        });
    })();

    // 雷达图示例
    var radarChart = (function () {
        return new Chart($("#exampleChartjsRadar"), 
            {type: 'radar', 
             data: {
                labels: ["吃饭", "喝水", "睡觉", "设计", "编码", "娱乐", "跑步"],
                pointLabelFontSize: 14,
                datasets: [{
                    label: '分类1',
                    backgroundColor: "rgba(204,213,219,0.35)",
                    borderColor: "rgba(0,0,0,0)",
                    pointBackgroundColor: $.colors("blue-grey", 300),
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: $.colors("blue-grey", 300),
                    data: [65, 59, 90, 81, 56, 55, 40]
                }, {
                    label: '分类2',
                    backgroundColor: "rgba(250,122,122,0.25)",
                    borderColor: "rgba(0,0,0,0)",
                    pointBackgroundColor: $.colors("red", 500),
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: $.colors("red", 500),
                    data: [28, 48, 40, 19, 96, 27, 100]
                }]
             }, 
             options: {
                scaleShowLabels: false,
                pointLabelFontSize: 10
             }
            });
    })();

    // 极地区域图示例
    var polarChart =(function () {
        return new Chart($("#exampleChartjsPloarArea"), {
            type: 'polarArea', 
            data: {
                labels: [
                    "红色",
                    "蓝色",
                    "蓝灰色",
                    "深蓝灰色"
                ],
                datasets: [{
                    data: [300, 200, 100, 50],
                    backgroundColor: [
                        $.colors("red", 600),
                        $.colors("purple", 500),
                        $.colors("blue-grey", 200),
                        $.colors("blue-grey", 300)
                    ]
                }]
            }
        });
    })();

    // 饼状图示例
    var pieChart = (function () {
        return new Chart($("#exampleChartjsPie"), {
            type: 'pie', 
            data: {
                labels: [
                    "蓝色",
                    "蓝灰色"
                ],
                datasets: [{
                    data: [50, 50],
                    backgroundColor: [
                        $.colors("purple", 500),
                        $.colors("blue-grey", 200)
                    ]
                }]
            }
        });
    })();

    // 环形图示例
    var dougChart = (function () {
        return new Chart($("#exampleChartjsDonut"), {
            type: 'doughnut', 
            data: {
                labels: [
                    "红色", 
                    "蓝灰色",
                    "蓝色"
                ],
                datasets: [{
                    data: [45, 15, 60],
                    backgroundColor: [
                        $.colors("red", 500),
                        $.colors("blue-grey", 200),
                        $.colors("purple", 500)
                    ]
                }]
            }
        });
    })();

    $.leavePage = function () {
        lineChart.destroy();
        barChart.destroy();
        radarChart.destroy();
        polarChart.destroy();
        pieChart.destroy();
        dougChart.destroy();
    };

})(document, window, jQuery);