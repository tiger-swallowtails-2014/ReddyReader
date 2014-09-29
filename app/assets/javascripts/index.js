var currentRequest = null;
var searchThread = null;

$(document).ready(function(){
  var bookCarousel = new BookCarousel('#search_results_carousel')
  var searchField = new SearchField('#searchfield', bookCarousel);

  $('#logo').click(function(){
    document.location.reload(true);
  })
});

var pageReset = function(server_data){
  console.log(server_data)
  $('#testparagraph').text(server_data.test)
  $('#speedtest').show();
}
