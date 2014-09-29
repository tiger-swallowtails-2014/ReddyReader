class UsersController < ApplicationController
  def new
    @user = User.new
  end
  
  def create
    @user = User.new(username: params[:user][:username], password: params[:user][:password_digest])
  end
end
