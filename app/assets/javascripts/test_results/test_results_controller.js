ReddyReader.TestResultsController = function(view, chartWidgets) {
  this.view = view;
  this.chartWidgets = chartWidgets;
}

ReddyReader.TestResultsController.prototype = {
  displaySpeedTestResults: function(results) {
    this.view.showResults(results);
    this.showChartWidgets(results);
  },

  showChartWidgets: function(results) {
    for(var i = 0; i < this.chartWidgets.length; i++) {
      this.chartWidgets[i].displayChart(results);
    }
  }
}
