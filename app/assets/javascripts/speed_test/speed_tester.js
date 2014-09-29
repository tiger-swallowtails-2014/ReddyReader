var SpeedTester = function(speedTestSelector) {
  return new SpeedTestController(new SpeedTest(), new SpeedTestView(speedTestSelector));
}
