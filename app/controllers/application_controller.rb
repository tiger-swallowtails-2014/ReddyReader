class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  private
  def current_user
   @current_user ||=   User.where(id: session[:user_id]).first if session[:user_id]
  end
  
  def recent_book
    @recent_book ||= Book.order(created_at: :desc).first
  end

  helper_method :current_user
  helper_method :recent_book
end
