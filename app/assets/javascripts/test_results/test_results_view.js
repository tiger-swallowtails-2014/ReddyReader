ReddyReader.TestResultsView = function(testResultsSelector) {
  this.$testResults = $(testResultsSelector);
}

ReddyReader.TestResultsView.prototype = {
  showResults: function(result) {
    $('#resultsarea').append(Mustache.render($('#test_results_template').html(), result));
    $('#resultsarea').show();
  }
}
