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
   
  skipSpeedTest: function() {
    this.server.ajax({
      url: '/skip_speed_test',
      method: 'get'
    }).done(function(data){
      this.sendResults(data.elapsedTime, false)
    }.bind(this))
  },

  sendResults: function(elapsedTime, skip) {
    this.server.ajax({
      url: '/speed_test_result',
      method: "post",
      data: {"time": elapsedTime, "skip": true || skip}
    }).done(this.handleServerResponse.bind(this));
  },

  handleServerResponse: function(serverData) {
    serverData.result = serverData.result.toFixed(2);
    this.controller.displaySpeedTestResults(serverData)
  }
}
