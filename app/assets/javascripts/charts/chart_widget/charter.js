ReddyReader.Charter = function(containerSelector, chartID, chartTemplateID, chartDataGrabber) {
  var chartView = new ReddyReader.ChartView(containerSelector, chartID, chartTemplateID);
  return new ReddyReader.ChartController(chartView, chartDataGrabber);
}
