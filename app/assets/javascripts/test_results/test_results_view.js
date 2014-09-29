ReddyReader.TestResultsView = function(testResultsSelector) {
  this.$testResults = $(testResultsSelector);
}

ReddyReader.TestResultsView.prototype = {
  showResults: function(result) {
    $('#resultsarea').append(Mustache.render(testResultsTemplate, result));
    // displayRandomBooks(result["wpm"]);
    $('#resultsarea').show();
  }
}
