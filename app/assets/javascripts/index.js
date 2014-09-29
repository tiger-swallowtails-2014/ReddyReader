var ReddyReader = {};

$(document).ready(function(){
  // create page widgets
	var randomBookCarousel = new ReddyReader.BookCarousel('#random_books_carousel', randomBookTemplate)
  var testResults = new ReddyReader.TestResults('#resultsarea', randomBookCarousel);
  var randomBooksGrabber = new ReddyReader.RandomBooksGrabber(randomBookCarousel);
  var speedTester = new ReddyReader.SpeedTester('#speedtest', testResults, randomBooksGrabber);
  var bookSearchCarousel = new ReddyReader.BookCarousel('#search_results_carousel', bookSearchTemplate, speedTester)
  var searchField = new ReddyReader.SearchField('#searchfield', bookSearchCarousel);

  $('#logo').click(function(){
    document.location.reload(true);
  })
});
