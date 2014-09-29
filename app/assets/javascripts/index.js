$(document).ready(function(){
  var speedTester = new SpeedTester('#speedtest');
  var bookCarousel = new BookCarousel('#search_results_carousel', speedTester)
  var searchField = new SearchField('#searchfield', bookCarousel);

  $('#logo').click(function(){
    document.location.reload(true);
  })
});
