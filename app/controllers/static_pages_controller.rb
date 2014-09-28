class StaticPagesController < ApplicationController
  def index
    session.clear # To be modified when converted to one page app
  end

  def speed_test
    session[:image_url] = params[:image_url]
    session[:title] = params[:title]
    session[:author] = params[:author]
    session[:page_count] = params[:page_count].to_i
    render json: {}.to_json
  end

  def speed_test_result
    title = session[:title]
  	time = params[:time].to_f/1000 #in seconds
  	word_count = params[:word_count].to_i
    page_count = session[:page_count].to_i
    @WPM = WpmCalculator.calc_wpm(word_count, time)
    time_per_page = WpmCalculator.time_per_page(time, word_count)
    @result = WpmCalculator.time_to_read(page_count, time_per_page)

  	respond_to do |format|
  		format.json {render json: {wpm: @WPM, result: @result, title: title}}
  	end

  end

  def search_results
    @books = GoogleBooksParser.get_books(params[:book_title])
    render json: @books.to_json
  end

  def login_success
    render :'assets/spritz/login_success'
  end
end
