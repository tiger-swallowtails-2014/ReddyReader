ReddyReader.BestsellersGrabber = function() {}

ReddyReader.BestsellersGrabber.prototype = {
  getChartData: function(speedTestResults, controller) {
    this.speedTestResults = speedTestResults;
    this.controller = controller;

    $.ajax({
      url: "/charts/bestsellers",
      type: "get",
      success: this.handleBestsellersResponse.bind(this)
    });
  },

  handleBestsellersResponse: function(serverData) {
    var titles = this.parseBestsellerTitles(serverData);
    var readingTimes = this.getReadingTimes(serverData);
    this.controller.renderChart(titles, readingTimes);
    this.controller.showTotalReadTime(this.getTotalReadTime(readingTimes));
  },

  parseBestsellerTitles: function(data) {
    var titles = [];
    for(var i = 0; i < data.length; i++) {
      titles[i] = data[i].title;
    }
    return titles;
  },

  getReadingTimes: function(data) {
    var readingTimes = [];
    var wordsPerHour = this.speedTestResults.wpm * 60;
    for(var i = 0; i < data.length; i++) {
      var pageCount = data[i].page_count * 250;
      readingTimes[i] = (pageCount / wordsPerHour).toPrecision(1);
    }
    return readingTimes;
  },

  getTotalReadTime: function(readingTimes) {
    var readingTime = 0;
    for(var i = 0; i < readingTimes.length; i++) {
      readingTime += parseFloat(readingTimes[i]);
    }
    return readingTime.toPrecision(2);
  }
}
