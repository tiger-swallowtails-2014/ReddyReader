ReddyReader.WPMComparisonChart = function(divID){
  this.divID = divID 
  this.getRawData();
}

ReddyReader.WPMComparisonChart.prototype = {
  
  getRawData: function(){
    $.ajax({
      url: '/charts/wpm_comparison'
    }).done(function(wpm_data){
      this.drawTheFuckingChart(wpm_data, this.divID);
    }.bind(this))
  },

  drawTheFuckingChart: function(rawData, divID){

     ctx = document.getElementById(divID).getContext("2d");
      
      data = {
          labels: ["Your WPM", "Average User's WPM"],

          datasets: [
              {
                  label: "WPM",

                  fillColor: "#FFFFFF",
                  strokeColor: "#FFFFFF",
                  highlightFill: "#FFFFFF",
                  highlightStroke: "#FFFFFF",
                  data: [rawData.user_wpm,rawData.avg_wpm]
              }
              
          ]

      };


      WPMComparisonChart = new Chart(ctx).Bar(data,{
          //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
          scaleFontColor : "#FFFFFF"

      });
  }


};
 
