var SearchField = function(searchFieldSelector, displayWidget) {
  new SearchFieldController(new BookSearcher(), new SearchFieldView(searchFieldSelector), displayWidget);
}
