ReddyReader.BookCarousel = function(bookCarouselSelector, bookTemplate, bookReceiverWidget) {
  return new ReddyReader.BookCarouselController(new ReddyReader.BookCarouselView(bookCarouselSelector, bookTemplate), bookReceiverWidget);
}
