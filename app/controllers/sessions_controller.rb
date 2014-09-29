class SessionsController < ApplicationController
  def create
    user = User.where(username: params[:username]).first
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to :root
    else
      flash[:error] = "Username or password invalid."
      redirect_to :root
    end
  end
  
  def destroy
    session.clear
    redirect_to :root
  end
end
