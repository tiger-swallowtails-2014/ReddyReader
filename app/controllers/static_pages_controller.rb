class StaticPagesController < ApplicationController
  def index
    session.clear # To be modified when converted to one page app
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
    render json: {}.to_json
    @speed_test = SpeedTest.all.sample
  end

  def speed_test_result
    title = session[:title] || "this book"
    time = params[:time].to_f/1000 #in seconds
    word_count = params[:word_count].to_i
    page_count = session[:page_count].to_i
    @WPM = WpmCalculator.calc_wpm(word_count, time)
    time_per_page = WpmCalculator.time_per_page(time, word_count)
    @result = WpmCalculator.time_to_read(page_count, time_per_page)

    Book.create(image_url: session[:image_url], title: session[:title], page_count: page_count, est_word_count: page_count * 250, author: session[:author])

    respond_to do |format|
      format.json {render json: {wpm: @WPM, result: @result, title: title}}
    end

  end

  def random_book_display
    random_books = Book.limit(4).order("RANDOM()")
    render json: random_books.to_json
  end


end
