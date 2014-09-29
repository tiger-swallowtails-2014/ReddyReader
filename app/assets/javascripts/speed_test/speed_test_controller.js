var SpeedTestController = function(speedTest, view, resultsWidget, randomBooksWidget) {
  this.speedTest = speedTest;
  this.view = view;
  this.resultsWidget = resultsWidget;
  this.randomBooksWidget = randomBooksWidget;
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
  },

  displaySpeedTestResults: function(results) {
    this.resultsWidget.displaySpeedTestResults(results);
    this.randomBooksWidget.getRandomBooks(results.wpm);
  }
}
