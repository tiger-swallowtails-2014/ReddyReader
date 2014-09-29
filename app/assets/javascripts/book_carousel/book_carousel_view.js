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
    var $carouselIndicators = this.$bookCarousel.find(".carousel-indicators");
    for(var i = 0; i < count; i++) {
      var indiciatorHTML = Mustache.render(carouselIndicatorTemplate, { index: i })
      $carouselIndicators.append(indiciatorHTML);
    }
    $carouselIndicators.find("li").first().addClass("active");
  },

  addCarouselSlides: function(count) {
    var $carouselSlides = this.$bookCarousel.find(".carousel-inner");
    for(var i = 0; i < count; i++) {
      var carouselSlideHTML = Mustache.render(carouselSlideTemplate)
      $carouselSlides.append(carouselSlideHTML);
    }
    $carouselSlides.find(".item").first().addClass("active");
  },

  addBooksToCarousel: function(books, numSlides) {
    $slides = this.$bookCarousel.find(".carousel-inner .item .row div");
    for (var i = 0; i < books.length; i++){
      var slideNum = Math.floor(i / 4);
      $($slides[slideNum]).append(Mustache.render(bookTemplate, books[i]));
    }
  }
}


