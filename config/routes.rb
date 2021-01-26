Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :users 
  resources :books
  resources :notes
  
  
  
  # get "/users/:id", to: "users#show"


  # get "/notes/:id", to: "notes#show"
  # post "/notes", to: "notes#new"
  


end
