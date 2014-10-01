ReddyReader.GoodreadsGrabber = function(displayWidget) {
  this.displayWidget = displayWidget;
  this.getToReadBooks();
}

ReddyReader.GoodreadsGrabber.prototype =  {
  getToReadBooks: function() {
    $.ajax({
      url: '/shelves'
    }).done(function(serverData){
      books = this.addWPMToBooks(serverData.books, serverData.time_per_page);
      this.displayWidget.handleBookList(books);
      $("#toreaddisplay").show();
    }.bind(this));
  },

  addWPMToBooks: function(books, time_per_page) {
    for(var i = 0; i < books.length; i++) {
      books[i].timeToRead = ((books[i].page_count * time_per_page)/60).toFixed(2);
      //in hours
    }
    return books;
  }
}
