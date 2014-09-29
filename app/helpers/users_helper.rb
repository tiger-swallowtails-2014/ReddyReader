module UsersHelper
  def current_user
    User.where(id: session[:user_id]).first 
  end
  
  def recent_wpm
    user = current_user
    user.wpms.order(created_at: :desc).first.speed
  end
  
  def recent_book
    user = current_user
    user.books.order(created_at: :desc).first
  end
end
