ReddyReader.TestResultsController = function(view) {
  this.view = view;
}

ReddyReader.TestResultsController.prototype = {
  displaySpeedTestResults: function(results) {
    this.view.showResults(results);
  }
}
