var baseUrl = "https://kodilla.com/pl/bootcamp-api";
var myHeaders = {
    "X-Client-Id": "2471",
    "X-Auth-Token": "2ec5f7108765e84c3b22189ad1dce548"
};

$.ajaxSetup({
    headers: myHeaders
});

$.ajax({
    url: baseUrl + "/board",
    method: "GET",
    success: function(response) {
        setupColumns(response.columns);
    }
});

function setupColumns(columns) {
    columns.forEach(function(column) {
        var col = new Column(column.id, column.name);
        board.createColumn(col);
        setupCards(col, column.cards);
    });
}

function setupCards(col, cards) {
    cards.forEach(function(card) {
        var card = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
        col.createCard(card);
    })
}

//NEW COLUMN CREATION

// var todoColumn = new Column("Not started");
// var doingColumn = new Column("In progress");
// var doneColumn = new Column("Done");
//
// // APPEND COLUMNS TO THE BOARD
// board.addColumn(todoColumn);
// board.addColumn(doingColumn);
// board.addColumn(doneColumn);
//
//
// // NEW CARDS
// var card1 = new Card("New task");
// var card2 = new Card("Create kanban boards");
// var card3 = new Card("Do something");
//
//
// // APPEND CARDS TO COLUMNS
// todoColumn.addCard(card1);
// doingColumn.addCard(card2);
// doneColumn.addCard(card3);
