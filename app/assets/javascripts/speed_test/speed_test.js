var SpeedTest = function() {

}

SpeedTest.prototype = {
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
  }
}
