var SearchField = function(searchFieldSelector, displayWidget) {
  return new SearchFieldController(new BookSearcher(), new SearchFieldView(searchFieldSelector), displayWidget);
}
