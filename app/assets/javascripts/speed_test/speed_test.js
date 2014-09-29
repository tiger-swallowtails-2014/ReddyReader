var SpeedTest = function() {
  this.startTime;
}

SpeedTest.prototype = {
  requestSpeedTest: function(book, controller) {
    this.controller = controller;

    $.ajax({
      url: '/speed_test',
      data: book
    }).done(function(serverData) {
      this.handleReceiveSpeedTest(serverData);
    }.bind(this));
  },

  handleReceiveSpeedTest: function(serverData) {
    this.controller.receiveParagraph(serverData.test);
  },

  startTimer: function() {
    this.startTime = new Date().getTime();
  },

  stopTimer: function(wordCount) {
    var elapsedTime = new Date().getTime() - this.startTime;
    console.log(wordCount);
  }
}
