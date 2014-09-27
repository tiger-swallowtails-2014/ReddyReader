var currentRequest
$(document).ready(function(){
  $('#searchfield').on("keyup", bookSearch);

  $('#results').on("click", ".book", selectBook)


});

var bookSearch = function(){
  if (currentRequest) {
    currentRequest.abort()
  }
  var query = $('#searchfield').val();
  if (query.length > 3){
   currentRequest = $.ajax({
    url: '/search_results',
    data: {"book_title": query}
    }).done(displayResults);
  }

}

var displayResults = function(server_data){
  var $results = $('#results')
  $results.empty()
  server_data = server_data.splice(0,4);
  for (var i=0; i<server_data.length; i++){
    $results.append(Mustache.render(bookTemplate, server_data[i]))
  }
}

var selectBook = function(e){
  var $current = $(e.currentTarget)
  var title = $current.find('.title').html()
  var author = $current.find('.author').html()
  var page_count = $current.find('.page_count').html()
  var image_url = $current.find('img').attr('src')
  console.log(image_url)
}
