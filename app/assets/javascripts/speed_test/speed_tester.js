ReddyReader.SpeedTester = function(speedTestSelector, resultsWidget, randomBooksWidget) {
  return new ReddyReader.SpeedTestController(new ReddyReader.SpeedTest(), new ReddyReader.SpeedTestView(speedTestSelector), resultsWidget, randomBooksWidget);
}
