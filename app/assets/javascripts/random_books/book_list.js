ReddyReader.BookList = function(bookListSelector, bookTemplate) {
  return new ReddyReader.BookListController(new ReddyReader.BookListView(bookListSelector, bookTemplate));
}
