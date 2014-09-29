ReddyReader.SearchField = function(searchFieldSelector, displayWidget) {
  return new ReddyReader.SearchFieldController(new ReddyReader.BookSearcher(), new ReddyReader.SearchFieldView(searchFieldSelector), displayWidget);
}
