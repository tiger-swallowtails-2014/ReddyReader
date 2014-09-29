var SearchFieldController = function(bookSearcher, view, displayWidget) {
  this.bookSearcher = bookSearcher;
  this.view = view;
  this.displayWidget = displayWidget;
  this.view.bindKeyListener(this);
}

SearchFieldController.prototype = {
  getBooks: function(query) {
    this.bookSearcher.getBooks(query, this);
  },

  displayBooks: function(books) {
    this.displayWidget.handleBookList(books);
  }
}
