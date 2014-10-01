Rails.application.routes.draw do
  mount JasmineRails::Engine => '/specs' if defined?(JasmineRails)
  root 'static_pages#index'

  get 'search_results' => 'static_pages#search_results', as: :search_results
  get 'speed_test' => 'static_pages#speed_test', as: :speed_test
  post 'speed_test_result' => 'static_pages#speed_test_result', as: :speed_test_result

  get 'random_book_display' => 'static_pages#random_book_display', as: :random_book_display

  get 'user_book_display' => 'static_pages#user_book_display', as: :user_book_display

  post 'login' => 'sessions#create', as: :login
  get 'logout' => 'sessions#destroy', as: :logout
  post 'register' => 'users#create', as: :register
  get 'auth/:provider/callback' => 'sessions#goodreads', as: :gr_login
  get 'charts/bestsellers' => 'charts#bestsellers', as: :bestsellers_chart
end
