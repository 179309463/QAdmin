var columnDefs = [
    {headerName: "运动员", field: "athlete", width: 150, rowGroupIndex: 0},
    {headerName: "年龄", field: "age", width: 90, rowGroupIndex: 1},
    {headerName: "国籍", field: "country", width: 120, rowGroupIndex: 2},
    {headerName: "年份", field: "year", width: 90},
    {headerName: "日期", field: "date", width: 110, rowGroupIndex: 2}
];

var gridOptions = {
    columnDefs: columnDefs,
    rowData: null,
    animateRows: false,
    groupUseEntireRow: true,
    onRowGroupOpened: function (event) {
        var rowNodeIndex = event.node.rowIndex;
        // factor in child nodes so we can scroll to correct position
        var childCount = event.node.childrenAfterSort ? event.node.childrenAfterSort.length : 0;
        var newIndex = rowNodeIndex + childCount;
        gridOptions.api.ensureIndexVisible(newIndex);
    }
};

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function() {
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);

    // do http request to get our sample data - not using any framework to keep the example self contained.
    // you will probably use a framework like JQuery, Angular or something else to do your HTTP calls.
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', '../static/api/olympicWinners.json');
    httpRequest.send();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var httpResult = JSON.parse(httpRequest.responseText);
            gridOptions.api.setRowData(httpResult);
        }
    };
});