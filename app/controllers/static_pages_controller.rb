class StaticPagesController < ApplicationController
  def index
    session.clear # To be modified when converted to one page app
  end
  
  def search_results
    @search_results = GoogleBooksParser.get_books(url)
    # Soon to be AJAX
  end

  def speed_test
    session[:image_url] = params[:image_url]
    session[:title] = params[:title]
    session[:author] = params[:author]
    session[:page_count] = params[:page_count].to_i
    # To be modified when converted to one page app
  end

  def speed_test_result
  	#TODO: WPM calculation
  	time = params[:time].to_f
    #page_count = params[:page_count].to_i
    page_count = 483
  	words = 134.0
    @time = time/1000 #in seconds
    @WPM =  ((words * 60)/@time).to_i
    time_per_page = time * (250.0/words)  #in seconds
    time_per_book = (time_per_page * page_count)/60.0 #in minutes

    @result = (time_per_book/60.0)/60

  	respond_to do |format|
  		format.json {render json: {wpm: @WPM, result: @result}}
  	end

  end

  def search_results
    @books = GoogleBooksParser.get_books(params[:book_title])
  end

  def login_success
    render :'assets/spritz/login_success'
  end
end
