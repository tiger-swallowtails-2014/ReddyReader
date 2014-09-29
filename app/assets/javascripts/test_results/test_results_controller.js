var TestResultsController = function(view) {
  this.view = view;
}

TestResultsController.prototype = {
  displaySpeedTestResults: function(results) {
    this.view.showResults(results);
  }
}