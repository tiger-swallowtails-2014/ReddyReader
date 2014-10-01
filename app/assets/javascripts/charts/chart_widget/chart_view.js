ReddyReader.ChartView = function(containerSelector, chartID, chartTemplateID) {
  this.$chartContainer = $(containerSelector);
  this.chartTemplate = $(chartTemplateID).html();
  this.chartID = chartID;
  this.createCanvas(400, 400);
}

ReddyReader.ChartView.prototype = {
  createCanvas: function(width, height) {
    var data = {chartID: this.chartID, width: width, height: height};
    this.$chartContainer.append(Mustache.render(this.chartTemplate, data));
  },

  createChart: function(labels, data) {
    var data = {
      labels: labels,
      datasets: [
        {
          // label: "My First dataset",
          fillColor: "rgba(220,220,220,0.5)",
          strokeColor: "rgba(220,220,220,0.8)",
          highlightFill: "rgba(220,220,220,0.75)",
          highlightStroke: "rgba(220,220,220,1)",
          data: data
        }
      ]
    };
    var context = $("#" + this.chartID).get(0).getContext("2d");
    new Chart(context).Bar(data, this.chartOptions);
  },

  showTotalReadTime: function(time) {
    this.$chartContainer.find(".read_time").text(time);
  },

  chartOptions: {
    //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
    scaleBeginAtZero : true,

    //Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines : true,

    //String - Colour of the grid lines
    scaleGridLineColor : "rgba(0,0,0,.05)",

    //Number - Width of the grid lines
    scaleGridLineWidth : 1,

    //Boolean - If there is a stroke on each bar
    barShowStroke : true,

    //Number - Pixel width of the bar stroke
    barStrokeWidth : 2,

    //Number - Spacing between each of the X value sets
    barValueSpacing : 5,

    //Number - Spacing between data sets within X values
    barDatasetSpacing : 1,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

  }
}
