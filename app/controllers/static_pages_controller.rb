class StaticPagesController < ApplicationController
  def index
  end

  def search_results
    @books = GoogleBooksParser.get_books(params[:book_title])
    render json: @books.to_json
  end

  def speed_test
    session[:image_url] = params[:image_url]
    session[:title] = params[:title]
    session[:author] = params[:author]
    session[:page_count] = params[:page_count].to_i

    paragraph = Paragraph.all.sample
    session[:paragraph_id] = paragraph.id 

    render json: {content:paragraph.content}.to_json
  end

  def speed_test_result
    

    book = Book.create(image_url: session[:image_url], title: session[:title], page_count: session[:page_count], author: session[:author])

    reading_test = ReadingTest.create( time_elapsed: params[:time], paragraph_id: session[:paragraph_id], book_id: book.id)


    if @current_user
      reading_test.user_id << current_user.id
      user.books << book
    end

    p reading_test
    
    render json: {wpm: reading_test.wpm, result: reading_test.time_to_read, title: book.title}.to_json
  end

  def random_book_display
    random_books = Book.limit(12).order("RANDOM()")
    render json: random_books.to_json
  end
end
