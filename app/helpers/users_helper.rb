module UsersHelper
  def current_user
    User.where(id: session[:user_id]).first
  end
  # CR this might work better on the model
  def recent_wpm
    user = current_user
    wpm = user.wpms.order(created_at: :desc).first
    wpm.speed if wpm
  end

  def recent_book
    user = current_user
    user.books.order(created_at: :desc).first
  end
end
