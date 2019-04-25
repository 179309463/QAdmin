Rails.application.routes.draw do
  namespace :examples do
    get 'home'
    namespace :components do
      get 'layouts/headers'
    end
  end

  namespace :application do
    get 'error'
    get 'locked'
    get 'login'
    get 'maintenance'
    get 'no_auth'
    get 'site_map'

    namespace :system do
      get 'account'
      get 'blacklist'
      get 'department'
      get 'log_table'
      get 'log'
      get 'menu'
      get 'message'
      get 'password'
      get 'settings_display'
      get 'settings_log'
      get 'user'     
    end
  end

  root "application#index"
end
