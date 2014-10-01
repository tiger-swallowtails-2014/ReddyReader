ReddyReader.ChartController = function(chartView, chartDataGrabber) {
  this.chartView = chartView;
  this.chartDataGrabber = chartDataGrabber;
}

ReddyReader.ChartController.prototype = {
  displayChart: function(speedTestResults) {
    this.chartDataGrabber.getChartData(speedTestResults, this);
  },

  renderChart: function(labels, chartData) {
    this.chartView.createChart(labels, chartData);
  },

  showTotalReadTime: function(totalReadTime) {
    this.chartView.showTotalReadTime(totalReadTime);
  }
}
