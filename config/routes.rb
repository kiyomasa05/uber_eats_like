Rails.application.routes.draw do
  namespace :api do #これはコントローラーをグルーピング,URLにもその情報を付与する
    namespace :v1 do
      resources :restaurants do
        resources :foods,only: %i[index]#Restaurant一覧/api/v1/restaurants #Food一覧/api/v1/restaurants/:restaurant_id/foodsを取得
      end
      resources :line_foods, only: %i[index create]
      put 'line_foods/replace', to: 'line_foods#replace'
      resources :orders, only: %i[create]
    end
  end
end
