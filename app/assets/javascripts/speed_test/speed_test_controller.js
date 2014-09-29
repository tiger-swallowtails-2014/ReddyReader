var SpeedTestController = function(speedTest, view) {
  this.speedTest = speedTest;
  this.view = view;
}

SpeedTestController.prototype = {
  receiveBook: function(book) {
    this.speedTest.requestSpeedTest(book, this);
  },

  receiveParagraph: function(paragraph) {
    this.view.showParagraph(paragraph);
  }
}
