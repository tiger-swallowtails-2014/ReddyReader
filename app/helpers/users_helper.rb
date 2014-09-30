module UsersHelper
  # def current_user
  #   User.where(id: session[:user_id]).first 
  # end
<<<<<<< HEAD
=======
  
  def recent_wpm
    wpm = @current_user.reading_tests.first.wpm if @current_user
    
  end
  
  def recent_book
    user = current_user
    user.books.order(created_at: :desc).first
  end
>>>>>>> created partial view for user profile
end
