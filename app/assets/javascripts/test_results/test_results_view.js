var TestResultsView = function(testResultsSelector) {
  this.$testResults = $(testResultsSelector);
}

TestResultsView.prototype = {
  showResults: function(result) {
    $('#resultsarea').append(Mustache.render(testResultsTemplate, result));
    // displayRandomBooks(result["wpm"]);
    $('#resultsarea').show();
  }
}
