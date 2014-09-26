class StaticPagesController < ApplicationController
  def index
  end

  def speed_test
  end

  def speed_test_result
  	render nothing: true
  	p params[:time].to_i
  end
  
end
