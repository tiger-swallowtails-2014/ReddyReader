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
  
  def goodreads
    auth = request.env["omniauth.auth"]
    # request_token = GOODREADS_CONSUMER.get_request_token
    # session[:request_token] = request_token
    # auth_url = request_token.authorize_url + "&oauth_callback=#{CGI.escape sign_in_callback_url}"
    # redirect_to auth_url
    user = User.find_by(provider: auth["provider"], uid: auth["uid"]) || User.create_with_omniauth(auth)
    session[:user_id] = user.id
    redirect_to :root
  end
end
