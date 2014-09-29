var TestResults = function(testResultsSelector) {
  return new TestResultsController(new TestResultsView(testResultsSelector));
}
