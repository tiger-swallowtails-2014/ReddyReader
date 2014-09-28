def book_seeder(term)
  book = GoogleBooksParser.get_books(term)
  book = book[0]
  est_word_count = book.page_count * 250 
  
  Stored_Book.create(book_title: book.title, est_word_count: est_word_count, image_url: book.image_url, page_count: book.page_count, author: book.author)
end

book_seeder("Lord of the Rings")
book_seeder("les miserables")