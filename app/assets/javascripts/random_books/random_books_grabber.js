ReddyReader.RandomBooksGrabber = function(displayWidget) {
	this.displayWidget = displayWidget;
}

ReddyReader.RandomBooksGrabber.prototype =	{
	getRandomBooks: function(time_per_page) {
		$.ajax({
			url: '/random_book_display'
		}).done(function(books){
			books = this.addWPMToBooks(books, time_per_page);
			this.displayWidget.handleBookList(books);
			$("#randombookdisplay").show();
		}.bind(this));
	},

	addWPMToBooks: function(books, time_per_page) {
		for(var i = 0; i < books.length; i++) {
			console.log(books[i])
			console.log(books[i].page_count)
			console.log(time_per_page)

			books[i].timeToRead = ((books[i].page_count * time_per_page)/60).toFixed(2);
		}
		return books;
	}
}
