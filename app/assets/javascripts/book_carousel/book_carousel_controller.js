var BookCarouselController = function(view) {
  this.view = view;
}

BookCarouselController.prototype = {
  displayBooks: function(books) {
    this.view.displayBooks(books);
  }
}
