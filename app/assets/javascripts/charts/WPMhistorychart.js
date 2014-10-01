ReddyReader.WPMHistoryChart = function(divID){
  this.divID = divID 
  this.getRawData();
}

ReddyReader.WPMHistoryChart.prototype = {

  getRawData: function(){
    $.ajax({
      url: '/charts/wpm_history'
    }).done(function(reading_tests){
      this.drawTheFuckingChart(reading_tests, this.divID);
    }.bind(this))
  },

  drawTheFuckingChart: function(rawData, divID){
    getLabels = function(rawData){
      var labels = [];
      var tests = rawData.tests 
      for (var i = 0; i < tests.length; i++){
        labels.push(tests[i].updated_at.slice(0,10));
      }
      return labels;
    }

    var chartElem = $("#" + divID)[0];
    if(!chartElem) return;
    
    ctx = chartElem.getContext("2d");

    data = {
      labels: getLabels(rawData),

      datasets: [
      {
        label: "Words Per Minute",
        fillColor: "rgba(220,220,220,0.5)",
        highlightFill: "rgba(220,220,220,0.75)",
        highlightStroke: "rgba(220,220,220,1)",
        data: rawData.wpms
      },

      ]

    };


    WPMHistoryChart = new Chart(ctx).Bar(data,{
          //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
          scaleBeginAtZero : true,

          //Boolean - Whether grid lines are shown across the chart
          scaleShowGridLines : false,


          //Number - Width of the grid lines
          scaleGridLineWidth : 1,

          //Boolean - If there is a stroke on each bar
          barShowStroke : false,


          //Number - Spacing between data sets within X values
          barDatasetSpacing : 2,

          //String - A legend template
          legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

        });
  }


};

