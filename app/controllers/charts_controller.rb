class ChartsController < ApplicationController
  def bestsellers
    @bestsellers = Book.where.not(bestseller_rank: nil).order('bestseller_rank ASC')
    render json: @bestsellers.to_json
  end

  def wpm_history
    if current_user
      wpms = []
      current_user.reading_tests.each{|test| wpms << test.wpm}

      render json: {tests: current_user.reading_tests, wpms: wpms}.to_json
    else
      render nothing: true
    end
  end

  def wpms
    render json: ReadingTest.get_wpm_json(current_user)
  end
end
