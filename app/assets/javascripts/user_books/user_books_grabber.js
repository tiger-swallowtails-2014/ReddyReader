ReddyReader.UserBooksGrabber = function(displayWidget) {
  this.displayWidget = displayWidget;
  this.getUserBooks();
}

ReddyReader.UserBooksGrabber.prototype =  {
  getUserBooks: function() {
    $.ajax({
      url: '/user_book_display'
    }).done(function(books){
      this.displayWidget.handleBookList(books);
      $("#userbookdisplay").show();
    }.bind(this));
  }
}