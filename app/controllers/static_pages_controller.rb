class StaticPagesController < ApplicationController
  def index
  end

  def speed_test
  end

  def speed_test_result
  	#TODO: WPM calculation
  	time = params[:time].to_i
  	@result = time/1000

  	respond_to do |format|
  		format.json {render json: @result}
  	end

  end

  def search_results
    @search_results = GoogleBooksParser.get_books(url)
    # Soon to be AJAX
  end
end
