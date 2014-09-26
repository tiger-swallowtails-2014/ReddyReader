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
    @books = GoogleBooksParser.get_books(params[:book_title])
  end
end
