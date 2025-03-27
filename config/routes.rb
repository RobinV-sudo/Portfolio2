Rails.application.routes.draw do
  root to: "pages#home"
  get "/about", to: 'pages#about'
  get "/project", to: 'pages#project'
  get "/test", to: 'pages#test'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
