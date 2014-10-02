var ReddyReader = {};

$(document).ready(function(){
  var chartWidgets = [new ReddyReader.Charter("#bestsellers_chart_slide", "bestsellers_chart", "#bestsellers_chart_template", new ReddyReader.BestsellersGrabber()),
                      new ReddyReader.Charter("#series_chart_slide", "series_chart", "#series_chart_template", new ReddyReader.SeriesGrabber()),
                      new ReddyReader.Charter("#wpm_comparison_chart_slide", "wpm_comparison_chart", "#wpm_comparison_chart_template", new ReddyReader.WPMsGrabber())];

  // create page widgets
  var randomBooksList = new ReddyReader.BookList('#random_books_list', $('#random_book_template').html());
  var userBooksCarousel = new ReddyReader.BookCarousel('#user_books_carousel', $('#user_book_template').html());
  var userBooksGrabber = new ReddyReader.UserBooksGrabber(userBooksCarousel);
  var toReadCarousel = new ReddyReader.BookCarousel('#to_read_carousel', $('#to_read_template').html());
  var toReadGrabber = new ReddyReader.GoodreadsGrabber(toReadCarousel);

  var testResults = new ReddyReader.TestResults('#resultsarea', chartWidgets);
  var randomBooksGrabber = new ReddyReader.RandomBooksGrabber(randomBooksList);
  var speedTester = new ReddyReader.SpeedTester('#speedtest', testResults, randomBooksGrabber);
  var difficultySlider = new ReddyReader.DifficultySlider('#difficulty_modal', speedTester)
  var bookSearchCarousel = new ReddyReader.BookCarousel('#search_results_carousel', $('#search_book_template').html(), difficultySlider)
  var searchField = new ReddyReader.SearchField('#searchfield', bookSearchCarousel);
  new ReddyReader.LoginFormValidator("#login_form");
  new ReddyReader.RegisterFormValidator("#register_form");

  new ReddyReader.WPMHistoryChart('WPMHistoryChart');
  // new ReddyReader.WPMComparisonChart('WPMComparisonChart');


  $('#logo').click(function(){
    document.location.reload(true);
  });
});
