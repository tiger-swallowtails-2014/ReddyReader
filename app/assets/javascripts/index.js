var ReddyReader = {};

$(document).ready(function(){
  // create page widgets
  // CR consider an application controller / view that knows all the widgets and their dependencies.
	var randomBookCarousel = new ReddyReader.BookCarousel('#random_books_carousel', $('#random_book_template').html());
  var testResults = new ReddyReader.TestResults('#resultsarea', randomBookCarousel);
  var randomBooksGrabber = new ReddyReader.RandomBooksGrabber(randomBookCarousel);
  var speedTester = new ReddyReader.SpeedTester('#speedtest', testResults, randomBooksGrabber);
  var bookSearchCarousel = new ReddyReader.BookCarousel('#search_results_carousel', $('#search_book_template').html(), speedTester)
  var searchField = new ReddyReader.SearchField('#searchfield', bookSearchCarousel);
  new ReddyReader.Session('#modal_login', '#login_lightbox', '#modal_register', '#register_lightbox', '.close');

// CR make it a link
  $('#logo').click(function(){
    document.location.reload(true);
  })
});
