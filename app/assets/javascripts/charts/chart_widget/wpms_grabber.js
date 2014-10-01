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

  // parseLabels: function(data) {
  //   var labels = [];
  //   for(var i = 0; i < data.length; i++) {
  //     titles[i] = data[i].title;
  //   }
  //   return titles;
  // },

  // getReadingTimes: function(data) {
  //   var readingTimes = [];
  //   var wordsPerHour = this.speedTestResults.wpm * 60;
  //   for(var i = 0; i < data.length; i++) {
  //     var wordCount = data[i].page_count * 250;
  //     readingTimes[i] = (wordCount / wordsPerHour).toFixed(1);
  //   }
  //   return readingTimes;
  // },

  // getTotalReadTime: function(readingTimes) {
  //   var readingTime = 0;
  //   for(var i = 0; i < readingTimes.length; i++) {
  //     readingTime += parseFloat(readingTimes[i]);
  //   }
  //   return readingTime.toFixed(1);
  // }
}
