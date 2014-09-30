var ReddyReader = {};

$(document).ready(function(){
  // create page widgets
	var randomBookCarousel = new ReddyReader.BookCarousel('#random_books_carousel', $('#random_book_template').html());
  var testResults = new ReddyReader.TestResults('#resultsarea', randomBookCarousel);
  var randomBooksGrabber = new ReddyReader.RandomBooksGrabber(randomBookCarousel);
  var speedTester = new ReddyReader.SpeedTester('#speedtest', testResults, randomBooksGrabber);
  var bookSearchCarousel = new ReddyReader.BookCarousel('#search_results_carousel', $('#search_book_template').html(), speedTester)
  var searchField = new ReddyReader.SearchField('#searchfield', bookSearchCarousel);
  new ReddyReader.LoginFormValidator("#login_form");
  new ReddyReader.RegisterFormValidator("#register_form");

  $('#logo').click(function(){
    document.location.reload(true);
  })
});
