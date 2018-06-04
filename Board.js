var board = {
    name: "Kanban Board",
    addColumn: function(column) {
        this.$element.append(column.$element);
        initSortable();
    },
    $element: $("#board .column-container")
};

$(".create-column").click(function() {
    var columnName = prompt("Enter a column name");

    if (columnName == null) {
        return false;
    }
    if (columnName === "") {
        columnName = "Task name";
    };

    $.ajax({
        url: baseUrl + "/column",
        method: "POST",
        data: {
            name: columnName,
        },
        success: function(response) {
            board.addColumn(new Column(response.id, columnName));
        }
    });
});

function initSortable() {
    $(".column-card-list").sortable({
        connectWith: ".column-card-list",
        placeholder: "card-placeholder"
    }).disableSelection();
    $(".column-container").sortable({
        connectWith: "column"
    }).disableSelection();
}
