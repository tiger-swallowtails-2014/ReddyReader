describe ("TestResultsView", function() {
  it("should have a testResults JQuery object", function() {
    var testResultsView = new ReddyReader.TestResultsView("#resultsarea");
    expect(testResultsView.$testResults).toBeDefined();
  });
});
