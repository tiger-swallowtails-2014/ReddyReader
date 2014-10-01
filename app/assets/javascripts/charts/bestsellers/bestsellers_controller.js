ReddyReader.BestsellersController = function(chartView, bestsellersGrabber) {
  this.chartView = chartView;
  this.bestsellersGrabber = bestsellersGrabber;
}

ReddyReader.BestsellersController.prototype = {
  displayChart: function(speedTestResults) {
    this.bestsellersGrabber.getChartData(speedTestResults, this);
  },

  renderChart: function(labels, chartData) {
    this.chartView.createChart(labels, chartData);
  },

  showTotalReadTime: function(totalReadTime) {
    this.chartView.showTotalReadTime(totalReadTime);
  }
}
