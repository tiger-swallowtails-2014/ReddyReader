ReddyReader.SpeedTestController = function(speedTest, view, resultsWidget, randomBooksWidget) {
  this.speedTest = speedTest;
  this.view = view;
  this.resultsWidget = resultsWidget;
  this.randomBooksWidget = randomBooksWidget;
  this.view.bindEventListeners(this);
}

ReddyReader.SpeedTestController.prototype = {
  receiveBook: function(book) {
    this.speedTest.requestSpeedTest(book, this);
  },

  receiveParagraph: function(paragraph) {
    this.view.showParagraph(paragraph);
  },

  startSpeedTest: function() {
    this.speedTest.startTimer();
  },

  stopSpeedTest: function() {
    this.speedTest.stopTimer();
  },

  displaySpeedTestResults: function(results) {
    this.resultsWidget.displaySpeedTestResults(results);
    this.randomBooksWidget.getRandomBooks(results.wpm);
  }
}
