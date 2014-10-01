ReddyReader.SeriesGrabber = function() {}

ReddyReader.SeriesGrabber.prototype = {
  getChartData: function(speedTestResults, controller) {
    this.speedTestResults = speedTestResults;
    this.controller = controller;
    this.serveSeriesData(this.series);
  },

  series: [
    {
      title: "The Wheel of Time",
      wordCount: 4410036
    },
    {
      title: "A Song of Ice and Fire",
      wordCount: 1770000
    },
    {
      title: "The Dark Tower",
      wordCount: 1375000
    },
    {
      title: "Harry Potter",
      wordCount: 1090739
    },
    {
      title: "The Bible",
      wordCount: 774746
    },
    {
      title: "Twilight",
      wordCount: 591434
    },
    {
      title: "The Lord of the Rings",
      wordCount: 481103
    },
    {
      title: "Hunger Games",
      wordCount: 205800
    }
  ],

  serveSeriesData: function(data) {
    var titles = this.parseSeriesTitles(data);
    var readingTimes = this.getReadingTimes(data);
    this.controller.renderChart(titles, readingTimes);
  },

  parseSeriesTitles: function(data) {
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
      readingTimes[i] = (data[i].wordCount / wordsPerHour).toFixed(1);
    }
    return readingTimes;
  }
}
