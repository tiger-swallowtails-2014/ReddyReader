var SpeedTester = function(speedTestSelector, resultsWidget, randomBooksWidget) {
  return new SpeedTestController(new SpeedTest(), new SpeedTestView(speedTestSelector), resultsWidget, randomBooksWidget);
}
