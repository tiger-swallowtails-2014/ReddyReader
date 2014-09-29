var SpeedTestView = function(speedTestSelector) {
  this.$speedTest = $(speedTestSelector);
}

SpeedTestView.prototype = {
  showParagraph: function(paragraph) {
    $('#testparagraph').text(paragraph);
    $('#speedtest').show();
  }
}
