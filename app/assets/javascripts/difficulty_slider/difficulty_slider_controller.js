ReddyReader.DifficultySliderController = function(view, speedTestWidget) {
  this.view = view;
  this.speedTestWidget = speedTestWidget;
  this.view.bindEventListeners(this);
}

ReddyReader.DifficultySliderController.prototype = {
  receiveBook: function(book) {
    this.book = book;
    this.view.showModal();
  },

  sendDifficulty: function(difficulty) {
    this.speedTestWidget.requestSpeedTest(this.book, difficulty);
  }
}
