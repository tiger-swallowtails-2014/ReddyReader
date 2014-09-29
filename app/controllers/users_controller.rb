class UsersController < ApplicationController
  def create
    user = User.new(username: params[:username], password: params[:password])
    if user.valid?
      user.save!
      session[:user_id] = user.id
      redirect_to :root
    else
      flash[:error] = "Username or password invalid."
      redirect_to :root
    end
  end
end
