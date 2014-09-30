ReddyReader.RandomBooksGrabber = function(displayWidget) {
	this.displayWidget = displayWidget;
}

ReddyReader.RandomBooksGrabber.prototype =	{
	getRandomBooks: function(wpm) {
		$.ajax({
			url: '/random_book_display'
		}).done(function(books){
			books = this.addWPMToBooks(books, wpm);
			this.displayWidget.handleBookList(books);
			$("#randombookdisplay").show(); //CR move where the random books are displayed out of here
		}.bind(this));
	},

	addWPMToBooks: function(books, wpm) {
		for(var i = 0; i < books.length; i++) {
			// CFR consider just sending the right timeToRead from the server
			books[i].timeToRead = ((books[i].est_word_count / wpm) / 60).toFixed(2);
		}
		return books;
	}
}
