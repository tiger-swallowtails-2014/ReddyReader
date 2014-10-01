ReddyReader.BookListView = function(bookListSelector, bookTemplate) {
  this.bookListSelector = bookListSelector;
  this.$bookList = $(bookListSelector);
  this.bookTemplate = bookTemplate;
}

ReddyReader.BookListView.prototype = {
  displayBooks: function(books) {
    this.clearList();
    this.buildList(books);
  },

  clearList: function() {
    this.$bookList.hide();
    this.$bookList.empty();
  },

  buildList: function(books) {
    this.addBooksToList(books);
    this.$bookList.show();
  },
  addBooksToList: function(books, numSlides) {
    books = books.slice(0, 4);
    for(var i = 0; i < books.length; i++) {
      this.addBookToList(books[i]);
    }
  },

  addBookToList: function(book) {
    this.$bookList.append(Mustache.render(this.bookTemplate, {books: book}));
  },

  bindBookClickListener: function(bookListController) {
    this.bookListController = bookListController;
    this.$bookList.on("click", ".book", this.handleBookClick.bind(this));
  },

  handleBookClick: function(evt) {
    $('#searchform').hide();
    this.clearList();
    var bookJSON = this.getBookJSON($(evt.currentTarget));
    this.bookListController.selectBook(bookJSON);
  },

  getBookJSON: function(elem) {
    var title = elem.find('.title').html();
    var author = elem.find('.author').html();
    var page_count = elem.find('.page_count').html();
    var image_url = elem.find('img').attr('src');

    return {
      "title": title,
      "author": author,
      "page_count": page_count,
      "image_url": image_url
    }
  }
}
