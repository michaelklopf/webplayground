var myApp = new Backbone.Marionette.Application();

var fileLoader = (function (myApp) {
    "use strict";

    var file,
        reader,
        fileContent = "",
        fn = {};

    fn = {
        handleFileSelect : function (evt) {
            file = evt.target.files[0]; // FileList object
            reader = new FileReader();

            reader.onload = function (e) {
                fileContent = reader.result;
                myApp.trigger("show:list");
            };

            reader.readAsText(file, "UTF-8");
        },

        getFileContent : function () {
            return fileContent;
        }
    };

    return fn;
})(myApp);

var myListManager = (function (fileLoader, listCreator, myApp) {
    "use strict";

    var list,
        fn = {};

    fn = {
        initialize : function () {
            myApp.bind("show:list", this.showList, this);
        },

        showList : function () {
            myApp.trigger("draw:list", fileLoader.getFileContent());
        }
    };

    return fn;
})(fileLoader, listCreator, myApp);

var listCreator = (function (myApp) {
    "use strict";

    var list,
        fn = {},
        listToArray = {},
        transformToTable = {},
        fillHeaderInfo = {},
        fillTableRows = {},
        headerText = ["Customer ID", "List number", "Position", "Price", "Seller profit"];

    listToArray = function(rawdata) {
        var finalList = [];
        var separatedInLines = rawdata.split('\n');

        for (var i=0, maxLength=separatedInLines.length; i<maxLength; i++) {
            finalList.push(separatedInLines[i].split('\t'));
        }

        return finalList;
    };

    transformToTable = function(list) {
        var table = document.getElementById("table_list");
        var header = table.createTHead();
        fillHeaderInfo(header);
        fillTableRows(table, list);
    };

    fillHeaderInfo = function(table_header) {
        var row = table_header.insertRow(0);
        for (var i = 0, maxLength=headerText.length; i<maxLength; i++) {
            var cell = row.insertCell(i);
            cell.innerHTML = "<b>" + headerText[i] + "</b>";
        }
    };

    fillTableRows = function(table, list) {
        for (var i = 1, maxLength=list.length; i<maxLength; i++) {
            var row = table.insertRow(i);
            for (var j = 0, rowLength=list[i].length; j<rowLength; j++) {
                var cell = row.insertCell(j);
                cell.innerHTML = list[i][j];
            }
        }
    };

    fn = {
        initialize : function () {
            myApp.bind("draw:list", this.drawList, this);
        },

        drawList : function (rawdata) {
            var list = listToArray(rawdata);
            transformToTable(list);
        }
    };

    return fn;
})(myApp);

myListManager.initialize();
listCreator.initialize();

document.getElementById('data-file').addEventListener('change', fileLoader.handleFileSelect, false);
