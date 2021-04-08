Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :authors, only: [:index, :show, :create]
  resources :books, only: [:index, :show, :create]
end
