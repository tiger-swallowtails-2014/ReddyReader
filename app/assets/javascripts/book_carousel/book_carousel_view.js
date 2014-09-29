var BookCarouselView = function(bookCarouselSelector, bookTemplate) {
  this.bookCarouselSelector = bookCarouselSelector;
  this.$bookCarousel = $(bookCarouselSelector);
  this.bookTemplate = bookTemplate;
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
    this.$bookCarousel.find(".carousel-controls").empty();

    this.$bookCarousel.show();
  },

  buildCarousel: function(books) {
    var numSlides = Math.ceil(books.length / 4);
    this.addCarouselIndicators(numSlides);
    this.addCarouselSlides(numSlides);
    this.addCarouselControls();
    this.addBooksToCarousel(books, numSlides);
  },

  addCarouselIndicators: function(count) {
    for(var i = 0; i < count; i++) {
      this.addCarouselIndicator(i);
    }
    this.$bookCarousel.find(".carousel-indicators li").first().addClass("active");
  },

  addCarouselIndicator: function(index) {
    var indiciatorHTML = Mustache.render(carouselIndicatorTemplate, { index: index, carouselSelector: this.bookCarouselSelector})
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

  addCarouselControls: function() {
    var carouselControlHTML = Mustache.render(carouselControlTemplate, { carouselSelector: this.bookCarouselSelector })
    this.$bookCarousel.find(".carousel-controls").append(carouselControlHTML);
  },

  addBooksToCarousel: function(books, numSlides) {
    for (var i = 0; i < books.length; i++){
      var slideNum = Math.floor(i / 4);
      this.addBookToSlide(books[i], slideNum);
    }
  },

  addBookToSlide: function(book, slideNum) {
    $slides = this.$bookCarousel.find(".carousel-inner .item .row > div");
    $($slides[slideNum]).append(Mustache.render(this.bookTemplate, book));
  },

  bindBookClickListener: function(bookCarouselController) {
    this.bookCarouselController = bookCarouselController;
    this.$bookCarousel.on("click", ".book", this.handleBookClick.bind(this));
  },

  handleBookClick: function(evt) {
    $('#searchform').hide();
    this.clearCarousel();
    var bookJSON = this.getBookJSON($(evt.currentTarget));
    this.bookCarouselController.selectBook(bookJSON);
  },

  getBookJSON: function(elem) {
    var title = elem.find('.title').html();
    var author = elem.find('.author').html();
    var page_count = elem.find('.page_count').html();
    var image_url = elem.find('img').attr('src');

    return {
      "title": title,
      "author": author,
      "page_count": page_count,
      "image_url": image_url
    }
  }
}


