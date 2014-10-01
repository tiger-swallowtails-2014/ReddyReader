ReddyReader.Bestsellers = function(containerSelector, chartID) {
  var chartView = new ReddyReader.BestsellersView(containerSelector, chartID);
  var bestsellersGrabber = new ReddyReader.BestsellersGrabber();
  return new ReddyReader.BestsellersController(chartView, bestsellersGrabber);
}
