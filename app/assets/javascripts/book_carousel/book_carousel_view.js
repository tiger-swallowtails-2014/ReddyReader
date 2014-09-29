var BookCarouselView = function(bookCarouselSelector) {
  this.$bookCarousel = $(bookCarouselSelector);
}

BookCarouselView.prototype = {
  displayBooks: function(books) {
    this.clearCarousel();
    this.buildCarousel(books);
  },

  clearCarousel: function() {
    this.$bookCarousel.hide();
    this.$bookCarousel.find(".carousel-indicators").empty();
    this.$bookCarousel.find(".carousel-inner").empty();
    this.$bookCarousel.show();
  },

  buildCarousel: function(books) {
    var numSlides = Math.ceil(books.length / 4);
    this.addCarouselIndicators(numSlides);
    this.addCarouselSlides(numSlides);
    this.addBooksToCarousel(books, numSlides);
  },

  addCarouselIndicators: function(count) {
    for(var i = 0; i < count; i++) {
      this.addCarouselIndicator(i);
    }
    this.$bookCarousel.find(".carousel-indicators li").first().addClass("active");
  },

  addCarouselIndicator: function(index) {
    var indiciatorHTML = Mustache.render(carouselIndicatorTemplate, { index: index })
    this.$bookCarousel.find(".carousel-indicators").append(indiciatorHTML);
  },

  addCarouselSlides: function(count) {
    for(var i = 0; i < count; i++) {
      this.addCarouselSlide();
    }
    this.$bookCarousel.find(".carousel-inner .item").first().addClass("active");
  },

  addCarouselSlide: function() {
    var carouselSlideHTML = Mustache.render(carouselSlideTemplate)
    this.$bookCarousel.find(".carousel-inner").append(carouselSlideHTML);
  },

  addBooksToCarousel: function(books, numSlides) {
    for (var i = 0; i < books.length; i++){
      var slideNum = Math.floor(i / 4);
      this.addBookToSlide(books[i], slideNum);
    }
  },

  addBookToSlide: function(book, slideNum) {
    $slides = this.$bookCarousel.find(".carousel-inner .item .row > div");
    $($slides[slideNum]).append(Mustache.render(bookTemplate, book));
  }
}


