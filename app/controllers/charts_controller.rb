class ChartsController < ApplicationController
  def bestsellers
    @bestsellers = Book.where.not(bestseller_rank: nil).order('bestseller_rank ASC')
    render json: @bestsellers.to_json
  end

  def wpm_history
    if current_user
      render json: current_user.reading_tests.to_json
    else
      render nothing: true
    end
  end


end
