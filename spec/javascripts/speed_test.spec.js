if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== "function") {
      throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    }
    var aArgs = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP = function () {},
        fBound = function () {
          return fToBind.apply(this instanceof fNOP && oThis
                 ? this
                 : oThis,
                 aArgs.concat(Array.prototype.slice.call(arguments)));
        };
    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
  };
}

describe("Speed Test specs", function(){
  beforeEach(function(){
    speedTest = new ReddyReader.SpeedTest();
  });

  it("recieves a paragraph to display from the server", function(){

  });

  it("starts a timer",function() {
    spyOn(Date.prototype, "getTime").and.returnValue(12345)
    var speedTest = new ReddyReader.SpeedTest();
    speedTest.startTimer();
    expect(speedTest.startTime).toEqual(12345);
  });

  it("stops a timer",function(){
    spyOn(Date.prototype, "getTime").and.returnValue(5)
    var speedTest = new ReddyReader.SpeedTest();
    spyOn(speedTest, "sendResults");
    speedTest.startTime = 3
    speedTest.stopTimer();
    expect(speedTest.sendResults).toHaveBeenCalledWith(2);
  });

  it("sends elapsed time and word count to server",function(){
    var speedTest = new ReddyReader.SpeedTest();
    promise = jasmine.createSpyObj("promise", ["done"]);
    spyOn(speedTest.server, "ajax").and.returnValue(promise);
    spyOn(speedTest.handleServerResponse, "bind").and.returnValue("some-function");
    speedTest.sendResults(12345);
    expect(speedTest.server.ajax).toHaveBeenCalledWith({
      url: "/speed_test_result",
      method: "post",
      data: {"time": 12345, "give_user_wpm": true || give_user_wpm}
    })
    expect(speedTest.handleServerResponse.bind).toHaveBeenCalledWith(speedTest);
    expect(promise.done).toHaveBeenCalledWith("some-function");
  });
})
