ReddyReader.SpeedTest = function() {
  this.startTime;
  this.server = $;
}

ReddyReader.SpeedTest.prototype = {
  requestSpeedTest: function(book, difficulty, controller) {
    this.controller = controller;
    var data = {book: book, difficulty: difficulty};

    $.ajax({
      url: '/speed_test',
      data: data
    }).done(function(serverData) {
      this.handleReceiveSpeedTest(serverData);
    }.bind(this));
  },

  handleReceiveSpeedTest: function(serverData) {
    this.controller.receiveParagraph(serverData.content);
  },

  startTimer: function() {
    this.startTime = new Date().getTime();
  },

  stopTimer: function() {
    var elapsedTime = new Date().getTime() - this.startTime;

    // if(elapsedTime > 5000) {
    this.sendResults(elapsedTime);
    return true;
    // }
    // else {
    //   return false;
    // }
  },

  sendResults: function(elapsedTime) {
    this.server.ajax({
      url: '/speed_test_result',
      method: "post",
      data: {"time": elapsedTime}
    }).done(this.handleServerResponse.bind(this));
  },

  handleServerResponse: function(serverData) {
    serverData.result = serverData.result.toFixed(2);
    this.controller.displaySpeedTestResults(serverData)
  }
}
