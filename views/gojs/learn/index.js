/**
 * QAdmin v1.2.0 (http://www.qadmin.com/)
 * Copyright 2015-2017 QAdmin Team
 * Licensed under the QAdmin License 1.0 (http://www.qadmin.com/about/#license)
 */
(function () {
    "use strict";

    window.Content = {
        run: function () {
            this.script1();
            this.script2();
            this.script3();
            this.script4();
            this.script5();
            this.script6();
            this.script7();
        },
        script1: function(){
            var vers = go.version || "9.8.7";
            var hyphen = vers.indexOf("-");
            if (hyphen > 0) vers = vers.substring(0, hyphen);
            var code = document.getElementById("cdnscript");
            code.textContent = '<script src="https://cdnjs.cloudflare.com/ajax/libs/gojs/'+ vers + '/go-debug.js"\>\<\/script>';
        },
        script2: function(){
            var $ = go.GraphObject.make;
            var myDiagram = $(go.Diagram, "myDiagramDiv");
        },
        script3: function(){
            var $ = go.GraphObject.make;
            var myDiagram =
              $(go.Diagram, "myDiagramDiv2",
                {
                  initialContentAlignment: go.Spot.Center, // center Diagram contents
                  "undoManager.isEnabled": true // enable Ctrl-Z to undo and Ctrl-Y to redo
                });

            var myModel = $(go.Model);
            // in the model data, each node is represented by a JavaScript object:
            myModel.nodeDataArray = [
              { key: "Alpha" },
              { key: "Beta" },
              { key: "Gamma" }
            ];
            myDiagram.model = myModel;
        },
        script4: function(){
            var $ = go.GraphObject.make;
            var myDiagram =
              $(go.Diagram, "myDiagramDiv3",
                {
                  initialContentAlignment: go.Spot.Center, // center Diagram contents
                  "undoManager.isEnabled": true // enable Ctrl-Z to undo and Ctrl-Y to redo
                });

            // define a simple Node template
            myDiagram.nodeTemplate =
              $(go.Node, "Horizontal",
                // the entire node will have a light-blue background
                { background: "#44CCFF" },
                $(go.Picture,
                  // the picture has a red background, only visible when there is no source set
                  // or when the image is partially transparent
                  { margin: 10, width: 50, height: 50, background: "red" },
                  // Picture.source is data bound to the "source" attribute of model data:
                  new go.Binding("source")),
                $(go.TextBlock,
                  "Default Text",  // the initial value for TextBlock.text
                  // some room around the text, a larger font, and a white stroke
                  { margin: 12, stroke: "white", font: "bold 16px sans-serif" },
                  // TextBlock.text is data bound to the "name" attribute of model data:
                  new go.Binding("text", "name"))
              );

            var model = $(go.Model);
            model.nodeDataArray =
            [ // note that each node data object holds whatever properties it needs;
              // for this app we add the "name" and "source" properties
              { name: "Don Meow",  source: "/vendor/gojs/learn/cat1.png" },
              { name: "Copricat", source: "/vendor/gojs/learn/cat2.png" },
              { name: "Demeter", source: "/vendor/gojs/learn/cat3.png" },
              { /* Empty node data */  }
            ];
            myDiagram.model = model;
        },
        script5: function(){
            var $ = go.GraphObject.make;
            var myDiagram =
              $(go.Diagram, "myDiagramDiv4",
                {
                  initialContentAlignment: go.Spot.Center, // center Diagram contents
                  "undoManager.isEnabled": true // enable Ctrl-Z to undo and Ctrl-Y to redo
                });

            // the template we defined earlier
            myDiagram.nodeTemplate =
              $(go.Node, "Horizontal",
                { background: "#44CCFF" },
                $(go.Picture,
                  { margin: 10, width: 50, height: 50, background: "red" },
                  new go.Binding("source")),
                $(go.TextBlock, "Default Text",
                  { margin: 12, stroke: "white", font: "bold 16px sans-serif" },
                  new go.Binding("text", "name"))
              );

            var model = $(go.TreeModel);
            model.nodeDataArray =
            [
              { key: "1",              name: "Don Meow",   source: "/vendor/gojs/learn/cat1.png" },
              { key: "2", parent: "1", name: "Demeter",    source: "/vendor/gojs/learn/cat2.png" },
              { key: "3", parent: "1", name: "Copricat",   source: "/vendor/gojs/learn/cat3.png" },
              { key: "4", parent: "3", name: "Jellylorum", source: "/vendor/gojs/learn/cat4.png" },
              { key: "5", parent: "3", name: "Alonzo",     source: "/vendor/gojs/learn/cat5.png" },
              { key: "6", parent: "2", name: "Munkustrap", source: "/vendor/gojs/learn/cat6.png" }
            ];
            myDiagram.model = model;
        },
        script6: function(){
            var $ = go.GraphObject.make;
            var myDiagram =
              $(go.Diagram, "myDiagramDiv5",
                {
                  initialContentAlignment: go.Spot.Center, // center Diagram contents
                  "undoManager.isEnabled": true, // enable Ctrl-Z to undo and Ctrl-Y to redo
                  layout: $(go.TreeLayout, // specify a Diagram.layout that arranges trees
                            { angle: 90, layerSpacing: 35 })
                });

            // the template we defined earlier
            myDiagram.nodeTemplate =
              $(go.Node, "Horizontal",
                { background: "#44CCFF" },
                $(go.Picture,
                  { margin: 10, width: 50, height: 50, background: "red" },
                  new go.Binding("source")),
                $(go.TextBlock, "Default Text",
                  { margin: 12, stroke: "white", font: "bold 16px sans-serif" },
                  new go.Binding("text", "name"))
              );

            var model = $(go.TreeModel);
            model.nodeDataArray =
            [
              { key: "1",              name: "Don Meow",   source: "/vendor/gojs/learn/cat1.png" },
              { key: "2", parent: "1", name: "Demeter",    source: "/vendor/gojs/learn/cat2.png" },
              { key: "3", parent: "1", name: "Copricat",   source: "/vendor/gojs/learn/cat3.png" },
              { key: "4", parent: "3", name: "Jellylorum", source: "/vendor/gojs/learn/cat4.png" },
              { key: "5", parent: "3", name: "Alonzo",     source: "/vendor/gojs/learn/cat5.png" },
              { key: "6", parent: "2", name: "Munkustrap", source: "/vendor/gojs/learn/cat6.png" }
            ];
            myDiagram.model = model;
        },
        script7: function(){
            var $ = go.GraphObject.make;
            var myDiagram =
              $(go.Diagram, "myDiagramDiv6",
                {
                  initialContentAlignment: go.Spot.Center, // center Diagram contents
                  "undoManager.isEnabled": true, // enable Ctrl-Z to undo and Ctrl-Y to redo
                  layout: $(go.TreeLayout,
                            { angle: 90, layerSpacing: 35 })
                });

            // the template we defined earlier
            myDiagram.nodeTemplate =
              $(go.Node, "Horizontal",
                { background: "#44CCFF" },
                $(go.Picture,
                  { margin: 10, width: 50, height: 50, background: "red" },
                  new go.Binding("source")),
                $(go.TextBlock, "Default Text",
                  { margin: 12, stroke: "white", font: "bold 16px sans-serif" },
                  new go.Binding("text", "name"))
              );

            // define a Link template that routes orthogonally, with no arrowhead
            myDiagram.linkTemplate =
              $(go.Link,
                { routing: go.Link.Orthogonal, corner: 5 },
                $(go.Shape, { strokeWidth: 3, stroke: "#555" })); // the link shape

            var model = $(go.TreeModel);
            model.nodeDataArray =
            [
              { key: "1",              name: "Don Meow",   source: "/vendor/gojs/learn/cat1.png" },
              { key: "2", parent: "1", name: "Demeter",    source: "/vendor/gojs/learn/cat2.png" },
              { key: "3", parent: "1", name: "Copricat",   source: "/vendor/gojs/learn/cat3.png" },
              { key: "4", parent: "3", name: "Jellylorum", source: "/vendor/gojs/learn/cat4.png" },
              { key: "5", parent: "3", name: "Alonzo",     source: "/vendor/gojs/learn/cat5.png" },
              { key: "6", parent: "2", name: "Munkustrap", source: "/vendor/gojs/learn/cat6.png" }
            ];
            myDiagram.model = model;
        }
    };

})();