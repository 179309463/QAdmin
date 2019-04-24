Rails.application.routes.draw do
  namespace :examples do
    get 'home'
    namespace :components do
      get 'layouts/headers'
    end
  end
  root "application#index"
end
