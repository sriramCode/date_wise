Rails.application.routes.draw do
 

  get 'users/index'
    get 'users/mutual_friends'
    get 'users/friends'
    get 'users/pending'

  root 'welcome#index'
  resources :users
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
