ReddyReader.TestResults = function(testResultsSelector, chartWidgets) {
  return new ReddyReader.TestResultsController(new ReddyReader.TestResultsView(testResultsSelector), chartWidgets);
}
