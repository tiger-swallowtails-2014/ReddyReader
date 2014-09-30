ReddyReader.SpeedTestView = function(speedTestSelector) {
  this.$speedTest = $(speedTestSelector);
}

ReddyReader.SpeedTestView.prototype = {
  bindEventListeners: function(controller) {
    this.controller = controller;
    this.$speedTest.find("#start").on("click", this.handleStartClick.bind(this));
    this.$speedTest.find("#done").on("click", this.handleDoneClick.bind(this));
  },

  handleStartClick: function() {
    this.$speedTest.find('#testparagraph').slideDown();
    this.$speedTest.find("#start").hide();
    this.$speedTest.find('#done').show();
    this.controller.startSpeedTest();
  },

  handleDoneClick: function() {
    this.$speedTest.slideUp("slow");
    this.controller.stopSpeedTest(this.getWordCount());
  },

  showParagraph: function(paragraph) {
    this.$speedTest.find('#testparagraph').text(paragraph);
    this.$speedTest.show();
  },

  getWordCount: function() {
    // CR word_count from server
    return this.$speedTest.find('#testparagraph').html().split(" ").length;
  }
}
