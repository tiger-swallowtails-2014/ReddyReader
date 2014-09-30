class StaticPagesController < ApplicationController
  def index
  end

  def search_results
    @books = GoogleBooksParser.get_books(params[:book_title])
    render json: @books.to_json
  end

  def speed_test
    paragraph = Paragraph.all.sample
    book = Book.create(image_url: params[:image_url], title: params[:title], page_count: params[:page_count].to_i, author: params[:author])
    current_user.books << book if current_user
    session[:paragraph_id] = paragraph.id 
    render json: {content:paragraph.content}.to_json
  end

  def speed_test_result
    reading_test = ReadingTest.create( time_elapsed: params[:time], paragraph_id: session[:paragraph_id], book_id: recent_book.id)
    current_user.reading_tests << reading_test if current_user
    render json: {wpm: reading_test.wpm, result: reading_test.time_to_read, title: recent_book.title, time_per_page: reading_test.time_per_page}.to_json
  end

  def random_book_display
    random_books = Book.limit(12).order("RANDOM()")
    render json: random_books.to_json
  end
end
