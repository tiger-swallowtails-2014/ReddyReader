var BookCarousel = function(bookCarouselSelector, bookReceiverWidget) {
  return new BookCarouselController(new BookCarouselView(bookCarouselSelector), bookReceiverWidget);
}
