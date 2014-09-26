$(document).ready(function(){
  $('#searchfield').on("keyup", bookSearch);



});

var bookSearch = function(){
  var query = $('#searchfield').val();
  if (query.length > 3){
    $.ajax({
    url: '/search_results',
    data: {"book_title": query}
    }).done(displayResults);
  }

}

var displayResults = function(server_data){
  console.log(server_data)
}
