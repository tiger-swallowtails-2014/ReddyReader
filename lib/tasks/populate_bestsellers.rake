namespace :db do
  desc "Seed the database with the NY Times bestsellers list"
  task "seed:bestsellers" => :environment do
    Book.where.not(bestseller_rank: nil).delete_all

    bestsellers = NytimesBestsellerParser.get_bestseller_titles

    bestsellers.each_with_index do |book, index|
      book = GoogleBooksParser.get_books(book).first
      book.bestseller_rank = index
      book.save
    end
  end

end
