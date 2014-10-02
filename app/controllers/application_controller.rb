class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  
  GOODREADS_CONSUMER = OAuth::Consumer.new('6MoLC9gwmQrLKAG6Ko3Pw', 'Dfa9NvO7rPRVMLuSEfJ1MrnduTXwtw9P1tkc4S1kA', {:site => "http://www.goodreads.com"})

  private
  def current_user
   @current_user ||=   User.where(id: session[:user_id]).first if session[:user_id]
  end

  def recent_book
    @recent_book = (current_user ? current_user.books.last : Book.last)
  end

  helper_method :current_user
  helper_method :recent_book
end
