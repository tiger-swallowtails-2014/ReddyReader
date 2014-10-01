ReddyReader.WPMComparisonChartFlot = function(divID){
  this.divID = divID 
  this.getRawData();
}

ReddyReader.WPMComparisonChartFlot.prototype = {
  
  // options: {
  //   series: {
  //     color: "#FFFFFF",
  //     height: "100px",
  //     width: "200px", 
  //     fill: "#FFFFFF",    
  //     ticks: [[0,"Your WPM"],[1, "Average User's WPM"]],
  //     font: {
  //       color: "#FFFFFF"
  //     }
  //   }
  // },

  getRawData: function(){
    $.ajax({
      url: '/charts/wpm_comparison'
    }).done(function(wpm_data){
     var wpm_data_array = [[0,wpm_data.user_wpm],[1, wpm_data.avg_wpm]];
      this.drawTheFuckingChart(wpm_data_array, this.divID);
    }.bind(this))
  },


  drawTheFuckingChart: function(rawData, divID){
    console.log(rawData)
    $.plot($(divID), rawData, options = {
      series: {
        data:rawData,
        bars: {
          show: true,
          fillColor: "#000",
          barWidth: 10
        },
        xaxis: {
          axisLabel: "Words Per Minute"
        },
        ticks: [["Your WPM", 0],["Average User's WPM", 1]]
        
      },

      grid: {
        show: false
      }

    })
    console.log(options)
  }
    


};
 
