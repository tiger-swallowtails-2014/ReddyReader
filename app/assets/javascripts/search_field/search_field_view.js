ReddyReader.SearchFieldView = function(searchFieldSelector) {
  this.$searchField = $(searchFieldSelector);
  this.$searchField.focus();
}

ReddyReader.SearchFieldView.prototype = {
  bindKeyListener: function(controller) {
    this.$searchField.on("keyup", function(evt) {
      var query = this.$searchField.val();
      controller.getBooks(query, this.isEnterKeyPressed(evt));
    }.bind(this))
  },

  isEnterKeyPressed: function(evt) {
    return (evt.keyCode == 13 || evt.which == 13)
  }
}
