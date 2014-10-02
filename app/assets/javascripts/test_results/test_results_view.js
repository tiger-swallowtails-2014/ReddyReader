ReddyReader.TestResultsView = function(testResultsSelector) {
  this.$testResults = $(testResultsSelector);
}

ReddyReader.TestResultsView.prototype = {
  showResults: function(result) {
    $("#wpm_result").text(result.wpm);
    $(".modal-body #wpm").html("Your WPM: " + result.wpm)
    $('#testresults').append(Mustache.render($('#test_results_template').html(), result));
    $('#resultsarea').show();
  }
}
