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
    speed_test = Paragraph.all.sample
    render json: {test:speed_test.test}.to_json
  end

  def speed_test_result
    title = session[:title] || "this book"
    time = params[:time].to_f/1000 #in seconds
    word_count = params[:word_count].to_i
    page_count = session[:page_count].to_i
    @WPM = WpmCalculator.calc_wpm(word_count, time)
    
    user = User.where(id: session[:user_id]).first
    user.wpms.create(speed: @WPM) if user
    
    time_per_page = WpmCalculator.time_per_page(time, word_count)
    @result = WpmCalculator.time_to_read(page_count, time_per_page)

    book = Book.create(image_url: session[:image_url], title: session[:title], page_count: page_count, est_word_count: page_count * 250, author: session[:author])
    user.books << book if user

    respond_to do |format|
      format.json {render json: {wpm: @WPM, result: @result, title: title}}
    end
  end

  def random_book_display
    random_books = Book.limit(12).order("RANDOM()")
    render json: random_books.to_json
  end
end
