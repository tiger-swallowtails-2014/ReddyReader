Rails.application.config.middleware.use OmniAuth::Builder  do
  provider :goodreads, ENV["GR_API_KEY"], ENV["SECRET"] 
end
