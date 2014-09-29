var BookSearcher = function() {
  this.currentRequest = null;
  this.searchThread = null;
  this.searchDelay = 500;
}

BookSearcher.prototype = {
  getBooks: function(searchQuery, controller) {
    this.controller = controller;

    clearTimeout(this.searchThread);
    searchThread = setTimeout(function() {
                    this.makeServerRequest(searchQuery);
                  }.bind(this), this.searchDelay);
  },

  makeServerRequest: function(query){
    this.abortExistingRequest();

    if (query.length > 3){
      this.currentRequest = $.ajax({
        url: '/search_results',
        data: {"book_title": query}
      }).done(this.handleServerResponse.bind(this));
    }
  },

  abortExistingRequest: function() {
    if (this.currentRequest) {
      this.currentRequest.abort();
    }
  },

  handleServerResponse: function(serverData) {
    this.controller.displayBooks(serverData);
  }
}
