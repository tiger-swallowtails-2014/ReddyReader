var BookCarouselController = function(view, bookReceiverWidget) {
  this.view = view;
  this.bookReceiverWidget = bookReceiverWidget;

  if(bookReceiverWidget) {
  	this.view.bindBookClickListener(this);
  }
}

BookCarouselController.prototype = {
  handleBookList: function(books) {
    this.view.displayBooks(books);
  },

  selectBook: function(book) {
    this.bookReceiverWidget.receiveBook(book);
  }
}
