class StaticPagesController < ApplicationController
  def index
  end

  def search_results
    @books = GoogleBooksParser.get_books(params[:book_title])
    render json: @books.to_json
  end

  def speed_test
    paragraph = Paragraph.where(difficulty: params[:difficulty]).sample
    book = Book.find_by(title: params[:book][:title], author: params[:book][:author])
    book ||= Book.create(book_params)
    current_user.books << book if current_user
    session[:paragraph_id] = paragraph.id
    render json: {content:paragraph.content}.to_json
  end

  def speed_test_result
    reading_test = ReadingTest.create( time_elapsed: params[:time], paragraph_id: session[:paragraph_id], book_id: recent_book.id)
    current_user.reading_tests << reading_test if current_user && params[:give_user_wpm]
    render json: {author: recent_book.author, image_url: recent_book.image_url, wpm: reading_test.wpm, result: reading_test.time_to_read, title: recent_book.title, time_per_page: reading_test.time_per_page}.to_json
  end

  def random_book_display
    random_books = Book.where(bestseller_rank: nil).limit(12).order("RANDOM()")
    render json: random_books.to_json
  end

  def user_book_display
    if current_user
      last_test = current_user.reading_tests.last
      time_per_page = (last_test ? last_test.time_per_page : 0)
      render json: {books: current_user.books, time_per_page: time_per_page}.to_json
    else
      render nothing: true
    end
  end

  def shelves
    if current_user && current_user.from_goodreads? && current_user.recent_wpm
      all_books = HTTParty.get('https://www.goodreads.com/review/list?format=xml&v=2', :query => {:key => ENV["GR_API_KEY"], :id => current_user.uid, :sort => 'date_updated', :page => 1-3})["GoodreadsResponse"]["reviews"]["review"]
      books = []
      all_books.each do |review|
        if review["shelves"]["shelf"]["name"] === "to-read"
          books << {title: review["book"]["title"], author: review["book"]["authors"]["author"]["name"], image_url: review["book"]["image_url"], page_count: review["book"]["num_pages"]}
        end
      end
      render json: {books: books, time_per_page: current_user.reading_tests.last.time_per_page}.to_json
    else
      render json: {books: [], time_per_page: 0}.to_json
    end
  end
  
  def all_gr_books
    if current_user && current_user.from_goodreads? && current_user.recent_wpm
      all_books = HTTParty.get('https://www.goodreads.com/review/list?format=xml&v=2', :query => {:key => ENV["GR_API_KEY"], :id => current_user.uid, :sort => 'date_updated', :page => 1-3})["GoodreadsResponse"]["reviews"]["review"]
      books = []
      all_books.each do |review|
        books << {title: review["book"]["title"], author: review["book"]["authors"]["author"]["name"], image_url: review["book"]["image_url"], page_count: review["book"]["num_pages"]}
      end
      render json: {books: books, time_per_page: current_user.reading_tests.last.time_per_page}.to_json
    else
      render json: {books: [], time_per_page: 0}.to_json
    end
  end
  
  def skip_speed_test
    test = current_user.reading_tests.last
    session[:paragraph_id] = test.paragraph.id
    render json: {elapsedTime: test.time_elapsed}.to_json
  end

  private

  def book_params
    params.require(:book).permit(:title, :author, :image_url, :isbn, :page_count)
  end


end
