var BookCarousel = function(bookCarouselSelector) {
  return new BookCarouselController(new BookCarouselView(bookCarouselSelector));
}
