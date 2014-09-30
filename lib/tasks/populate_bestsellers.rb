include 'google_books_parser'
include 'nytimes_bestseller_parser'

bestsellers = NytimesBestsellerParser.get_bestseller_titles

bestsellers.each do |book|
  GoogleBooksParser.get_books(book).first.save
end
