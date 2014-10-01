ReddyReader.WPMsGrabber = function() {}

ReddyReader.WPMsGrabber.prototype = {
  getChartData: function(speedTestResults, controller) {
    this.speedTestResults = speedTestResults;
    this.controller = controller;

    $.ajax({
      url: "/charts/wpms",
      type: "get",
      success: this.handleWPMsResponse.bind(this)
    });
  },

  handleWPMsResponse: function(serverData) {
    serverData = this.addToWPMs(serverData);
    this.controller.renderChart(serverData.labels, serverData.wpms);
  },

  addToWPMs: function(wpmData) {
    wpmData.labels.push("You");
    wpmData.wpms.push(this.speedTestResults.wpm);

    return wpmData;
  }
}
