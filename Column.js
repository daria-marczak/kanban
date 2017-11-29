function Column(id, name) {
    this.id = id;
    this.name = name || "To do";
    var self = this;
    var cardName;

    this.$element = createColumn();


    function createColumn() {
        var $column = $("<div>").addClass("column");
        var $columnTitle = $("<h2>").addClass("column-title").text(self.name);
        var $columnCardList = $("<ul>").addClass("column-card-list");
        var $columnDelete = $("<button>").addClass("btn-delete").text("Remove");
        var $columnAddCard = $("<button>").addClass("add-card").text("Add");

        $columnDelete.click(function() {
            self.removeColumn();
        });

        $columnAddCard.click(function(event) {
            var cardName = prompt("Enter a card's name");

            if (cardName === null) {
                return false;
            }
            if (cardName === "") {
                cardName = "Task";
            }

            $.ajax({
                url: baseUrl + "/card",
                method: "POST",
                data: {
                    name: cardName,
                    bootcamp_kanban_column_id: self.id
                },
                success: function(response) {
                    self.addCard(new Card(response.id, cardName));
                }
            });
        });
        $column.append($columnTitle)
            .append($columnDelete)
            .append($columnAddCard)
            .append($columnCardList);

        return $column;
    };


};

Column.prototype.addCard = function(card) {
    this.$element.children("ul").append(card.$element);
};
Column.prototype.removeColumn = function() {
    var self = this;

    $.ajax({
        url: baseUrl + "/column/" + self.id,
        method: 'DELETE',
        success: function(response) {
            self.$element.remove();
        }
    });
};
