var SpeedTestController = function(speedTest, view) {
  this.speedTest = speedTest;
  this.view = view;
  this.view.bindEventListeners(this);
}

SpeedTestController.prototype = {
  receiveBook: function(book) {
    this.speedTest.requestSpeedTest(book, this);
  },

  receiveParagraph: function(paragraph) {
    this.view.showParagraph(paragraph);
  },

  startSpeedTest: function() {
    this.speedTest.startTimer();
  },

  stopSpeedTest: function(wordCount) {
    this.speedTest.stopTimer(wordCount);
  }
}
