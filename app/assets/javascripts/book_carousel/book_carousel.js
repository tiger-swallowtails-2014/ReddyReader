var BookCarousel = function(bookCarouselSelector, bookTemplate, bookReceiverWidget) {
  return new BookCarouselController(new BookCarouselView(bookCarouselSelector, bookTemplate), bookReceiverWidget);
}
