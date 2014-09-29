var SearchFieldView = function(searchFieldSelector) {
  this.$searchField = $(searchFieldSelector);
  this.$searchField.focus();
}

SearchFieldView.prototype = {
  bindKeyListener: function(controller) {
    this.$searchField.on("keyup", function(evt) {
      console.log(evt);
      var query = this.$searchField.val();
      controller.getBooks(query, this.isEnterKeyPressed(evt));
    }.bind(this))
  },

  isEnterKeyPressed: function(evt) {
    return (evt.keyCode == 13 || evt.which == 13)
  }
}
