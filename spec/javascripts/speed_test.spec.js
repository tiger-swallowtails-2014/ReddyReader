describe("Speed Test specs", function(){
  beforeEach(function(){
    // speedTest = new ReddyReader.SpeedTest();
  });

  it("recieves a paragraph to display from the server", function(){
    var speedTest = new ReddyReader.SpeedTest();

  });

  it("starts a timer",function(){
    var speedTest = new ReddyReader.SpeedTest();
    speedTest.startTimer();
    expect(speedTest.startTime).toEqual(new Date().getTime())
  });

  it("gets elapsed time once timer is stopped",function(){
    var speedTest = new ReddyReader.SpeedTest();
    speedTest.startTimer();

  });

  it("sends elapsed time and word count to server",function(){

  });

  it("recieves speed test results back from server", function(){

  });
})
