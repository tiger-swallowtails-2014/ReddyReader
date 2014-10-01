class ChartsController < ApplicationController
  def bestsellers
    @bestsellers = Book.where.not(bestseller_rank: nil).order('bestseller_rank ASC')
    render json: @bestsellers.to_json
  end
end
