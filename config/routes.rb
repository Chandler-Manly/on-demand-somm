Rails.application.routes.draw do
post '/auth/login', to: 'authentication#login'
get '/auth/verify', to: 'authentication#verify'
resources :tastings, only :index
resources :wines
resources :users, only: create

post '/wines/:wine_id/tastings/:id', to: 'tastings#add_tasting'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
