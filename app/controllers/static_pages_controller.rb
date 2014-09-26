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
    @search_results = GoogleBooks.find_books(url)
    # @search_results = {image_url: "http://bks5.books.google.com/books?id=btpIkZ6X6egC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", 
    #                     title: "Game of Thrones", 
    #                     author: "George R.R. Martin", 
    #                     page_count: 854}
    @image = @search_results[:image_url]
    @title = @search_results[:title]
    @author = @search_results[:author]
    @page_count = @search_results[:page_count]
  end
end
