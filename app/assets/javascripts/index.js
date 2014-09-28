var currentRequest = null;
var searchThread = null;

$(document).ready(function(){
  $('#searchfield').focus();
  $('#searchfield').on("keyup", initBookSearch);
  $('#results').on("click", ".book", selectBook);
});

var initBookSearch = function() {
  clearTimeout(searchThread);
  searchThread = setTimeout(bookSearch, 500);
}

var bookSearch = function(){
  if (currentRequest) {
    currentRequest.abort();
  }
  var query = $('#searchfield').val();
  if (query.length > 3){
    currentRequest = $.ajax({
      url: '/search_results',
      data: {"book_title": query}
    }).done(displayResults);
  }
}

var displayResults = function(books){
  var $results = $('#results');
  $results.empty();
  books = books.splice(0,4);
  for (var i = 0; i < books.length; i++){
    $results.append(Mustache.render(bookTemplate, books[i]));
  }
}

var selectBook = function(e){
  $('#results').empty();
  var $current = $(e.currentTarget);
  var title = $current.find('.title').html();
  var author = $current.find('.author').html();
  var page_count = $current.find('.page_count').html();
  var image_url = $current.find('img').attr('src');
  $('#searchform').hide();
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

var pageReset = function(){
  $('#speedtest').show();
}
