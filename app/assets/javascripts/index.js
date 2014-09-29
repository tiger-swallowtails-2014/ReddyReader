var currentRequest = null;
var searchThread = null;

$(document).ready(function(){
  var bookCarousel = new BookCarousel('#search_results_carousel')
  var searchField = new SearchField('#searchfield', bookCarousel);

  $('#results').on("click", ".book", selectBook);
  $('#logo').click(function(){
    document.location.reload(true);
  })
});

var selectBook = function(e){
  $('#results').slideUp();
  $('#results').empty();
  var $current = $(e.currentTarget);
  var title = $current.find('.title').html();
  var author = $current.find('.author').html();
  var page_count = $current.find('.page_count').html();
  var image_url = $current.find('img').attr('src');
  $('#searchform').slideUp();
  $.ajax({
    url: '/speed_test',
    data: {
      "title": title,
      "author": author,
      "page_count": page_count,
      "image_url": image_url
    }
  }).done(pageReset);
}

var pageReset = function(server_data){
  console.log(server_data)
  $('#testparagraph').text(server_data.test)
  $('#speedtest').show();
}
