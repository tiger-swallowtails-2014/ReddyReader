ReddyReader.SpeedTest = function() {
  this.startTime;
}

ReddyReader.SpeedTest.prototype = {
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
    this.sendResults(elapsedTime, wordCount);
  },

  sendResults: function(elapsedTime, wordCount) {
    $.ajax({
      url: '/speed_test_result',
      method: "post",
      data: {"time": elapsedTime, "word_count": wordCount}
    }).done(this.handleServerResponse.bind(this));
  },

  handleServerResponse: function(serverData) {
    serverData.result = serverData.result.toFixed(2);
    // CR leave the toFixed for display
    this.controller.displaySpeedTestResults(serverData)
  }
}
