module Api
  module V1 #apiの下の、v1の下のRestaurantsController
    class RestaurantsController < ApplicationController
      def index
        restaurants = Restaurant.all

        render json:{
          restaurants:restaurants
        },status: :ok
      end
    end
  end
end
