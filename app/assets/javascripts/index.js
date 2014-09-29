$(document).ready(function(){
	var randomBookCarousel = new BookCarousel('#random_books_carousel', randomBookTemplate)
  var testResults = new TestResults('#resultsarea', randomBookCarousel);
  var randomBooksGrabber = new RandomBooksGrabber(randomBookCarousel);
  var speedTester = new SpeedTester('#speedtest', testResults, randomBooksGrabber);
  var bookSearchCarousel = new BookCarousel('#search_results_carousel', bookSearchTemplate, speedTester)
  var searchField = new SearchField('#searchfield', bookSearchCarousel);

  $('#logo').click(function(){
    document.location.reload(true);
  })
});
