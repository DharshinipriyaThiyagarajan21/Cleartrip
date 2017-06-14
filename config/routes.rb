Rails.application.routes.draw do
  get 'flights/index'

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'flights#index'

  get "/flights/results" =>"flights#results"

  resources 'flights' do
    collection do
     get 'get_flights'
    end
  end
end
