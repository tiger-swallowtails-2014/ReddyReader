var SearchFieldView = function(searchFieldSelector) {
  this.$searchField = $(searchFieldSelector);
  this.$searchField.focus();
}

SearchFieldView.prototype = {
  bindKeyListener: function(controller) {
    this.$searchField.on("keyup", function(evt) {
      var query = this.$searchField.val();
      controller.getBooks(query);
    }.bind(this))
  }
}
