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

    speed_test = ReadingTest.create(book_id: book.id, time_elapsed: params[:time], paragraph_id: session[:paragraph_id])


    if @current_user
      speed_test.user_id << current_user.id
      user.books << book
    end

    
    # title = session[:title] || "this book"
    # time = params[:time].to_f/1000 #in seconds
    # word_count = params[:word_count].to_i
    # page_count = session[:page_count].to_i
    # @WPM = WpmCalculator.calc_wpm(word_count, time)
    
    # user = User.get_user(session[:user_id])
    
    
    # time_per_page = WpmCalculator.time_per_page(time, word_count)
    # @result = WpmCalculator.time_to_read(page_count, time_per_page)

    render json: {wpm: speed_test.wpm, result: time_to_read, title: book.title}.to_json
  end

  def random_book_display
    random_books = Book.limit(12).order("RANDOM()")
    render json: random_books.to_json
  end
end
