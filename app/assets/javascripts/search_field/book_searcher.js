ReddyReader.BookSearcher = function() {
  this.currentRequest = null;
  this.searchThread = null;
  this.searchDelay = 500;
}

ReddyReader.BookSearcher.prototype = {
  getBooks: function(searchQuery, forceSearch, controller) {
    this.controller = controller;

    clearTimeout(this.searchThread);
    this.searchThread = setTimeout(function() {
                    this.makeServerRequest(searchQuery, forceSearch);
                  }.bind(this), this.searchDelay);
  },

  makeServerRequest: function(query, forceSearch){
    this.abortExistingRequest();

    if (query.length > 3 || forceSearch){
      this.currentRequest = $.ajax({
        url: '/search_results',
        data: {"book_title": query}
      }).done(this.handleServerResponse.bind(this));
    }
  },
// CR add solid tests around this to reduce the amount of information / code flow that is only in your head
  abortExistingRequest: function() {
    if (this.currentRequest) {
      this.currentRequest.abort();
    }
  },

  handleServerResponse: function(serverData) {
    this.controller.displayBooks(serverData);
  }
}
