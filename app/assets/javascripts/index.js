var currentRequest = null;
var searchThread = null;

$(document).ready(function(){
  var searchField = new SearchField('#searchfield', this);

  $('#results').on("click", ".book", selectBook);
  $('#logo').click(function(){
    document.location.reload(true);
  })
});

var displayResults = function(books){
  clearCarousel();

  var numSlides = Math.ceil(books.length / 4);
  addCarouselIndicators(numSlides);
  addCarouselSlides(numSlides);
  addBooksToCarousel(books, numSlides);
  $("#results").slideDown();
}

var clearCarousel = function() {
  $("#results").hide();
  $(".carousel-indicators").empty();
  $(".carousel-inner").empty();
}

var addCarouselIndicators = function(count) {
  var $carouselIndicators = $(".carousel-indicators");
  for(var i = 0; i < count; i++) {
    var indiciatorHTML = Mustache.render(carouselIndicatorTemplate, { index: i })
    $carouselIndicators.append(indiciatorHTML);
  }
  $carouselIndicators.find("li").first().addClass("active");
}

var addCarouselSlides = function(count) {
  var $carouselSlides = $(".carousel-inner");
  for(var i = 0; i < count; i++) {
    var carouselSlideHTML = Mustache.render(carouselSlideTemplate)
    $carouselSlides.append(carouselSlideHTML);
  }
  $carouselSlides.find(".item").first().addClass("active");
}

var addBooksToCarousel = function(books, numSlides) {
  $slides = $(".carousel-inner .item .row div");
  for (var i = 0; i < books.length; i++){
    var slideNum = Math.floor(i / 4);
    $($slides[slideNum]).append(Mustache.render(bookTemplate, books[i]));
  }
}

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
