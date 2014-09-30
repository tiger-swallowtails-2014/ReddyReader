namespace :db do
  desc "Seed the database with the NY Times bestsellers list"
  task "seed:bestsellers" => :environment do
    Book.where(bestseller: true).delete_all

    bestsellers = NytimesBestsellerParser.get_bestseller_titles

    bestsellers.each do |book|
      book = GoogleBooksParser.get_books(book).first
      book.bestseller = true
      book.save
    end
  end

end
