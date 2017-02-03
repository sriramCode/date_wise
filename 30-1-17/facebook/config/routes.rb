Rails.application.routes.draw do
    resources :users
    root 'welcome#index'
    get 'friends/show'

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'  
end
