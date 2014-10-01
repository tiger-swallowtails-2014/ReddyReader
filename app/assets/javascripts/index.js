var ReddyReader = {};

$(document).ready(function(){
  var chartWidgets = [new ReddyReader.Charter("#chart_area", "bestsellers_chart", "#bestsellers_chart_template", new ReddyReader.BestsellersGrabber()),
                      new ReddyReader.Charter("#chart_area", "series_chart", "#series_chart_template", new ReddyReader.SeriesGrabber())];

  // create page widgets
  var randomBookCarousel = new ReddyReader.BookCarousel('#random_books_carousel', $('#random_book_template').html());
  var userBooksCarousel = new ReddyReader.BookCarousel('#user_books_carousel', $('#user_book_template').html());
  var userBooksGrabber = new ReddyReader.UserBooksGrabber(userBooksCarousel);

  var testResults = new ReddyReader.TestResults('#resultsarea', chartWidgets);
  var randomBooksGrabber = new ReddyReader.RandomBooksGrabber(randomBookCarousel);
  var speedTester = new ReddyReader.SpeedTester('#speedtest', testResults, randomBooksGrabber);
  var difficultySlider = new ReddyReader.DifficultySlider('#difficulty_modal', speedTester)
  var bookSearchCarousel = new ReddyReader.BookCarousel('#search_results_carousel', $('#search_book_template').html(), difficultySlider)
  var searchField = new ReddyReader.SearchField('#searchfield', bookSearchCarousel);
  new ReddyReader.LoginFormValidator("#login_form");
  new ReddyReader.RegisterFormValidator("#register_form");

  new ReddyReader.WPMHistoryChart('WPMHistoryChart');
  new ReddyReader.WPMComparisonChart('WPMComparisonChart');


  $('#logo').click(function(){
    document.location.reload(true);
  });
});
