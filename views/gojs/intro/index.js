/**
 * QAdmin v1.2.0 (http://www.qadmin.com/)
 * Copyright 2015-2017 QAdmin Team
 * Licensed under the QAdmin License 1.0 (http://www.qadmin.com/about/#license)
 */
(function () {
    "use strict";

    window.Content = {
        run: function () {
            this.goCode("minimal", 400, 150);
            this.script2();
        },
        goCode: function(pre, w, h, diagramclass) {
          if (diagramclass === undefined) diagramclass = go.Diagram;

          var div = document.getElementById(pre+"-result");
          div.style.width = w + "px";
          div.style.height = h + "px";
          div.className = "diagramStyling";

          pre = document.getElementById(pre);

          // temporarily bind "diagram" to the main Diagram for the DIV, and "$" to go.GraphObject.make
          var f = eval("(function (diagram, $) {" + pre.textContent + "})");
          f(new diagramclass(div), go.GraphObject.make);
        },
        script2: function(){
          var diagram = new go.Diagram("myDiagramDiv");
          diagram.model = new go.GraphLinksModel(
            [{ key: "Hello" },   // two node data, in an Array
             { key: "World!" }],
            [{ from: "Hello", to: "World!" }]  // one link data, in an Array
          );
        }
    };

})();