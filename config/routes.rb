Rails.application.routes.draw do
  root 'static_pages#index'

  get 'search_results' => 'static_pages#search_results', as: :search_results
  get 'speed_test' => 'static_pages#speed_test', as: :speed_test
  post 'speed_test_result' => 'static_pages#speed_test_result', as: :speed_test_result
  get '/login_success' => 'static_pages#login_success'
  
end
