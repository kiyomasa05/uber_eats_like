module Api
  module V1
    class OrdersController < ApplicationController
      def create
        posted_line_foods = LineFood.where(id:params[:line_food_ids])
        order=Order.new(
          total_price:total_price(posted_line_foods)
        )
        #複数のidの配列が[1,2,3]という形をLineFood.whereにわたすことで対象のidのデータを取得し、posted_line_foodsという変数に代入
        #それらを合算して一つのOrder.newし、orderインスタンスを生成
        if order.save_with_update_line_foods!(posted_line_foods)
          render json:{},status: :no_content
        else
          render json:{},status: :internal_server_error
        end
      end

      private
        def total_price(posted_line_foods)
          posted_line_foods.sum {|line_food| line_food.total_amount } + posted_line_foods.first.restaurant.fee
        end
        #order.save_with_update_line_foods!(posted_line_foods)が成功した場合にはstatus: :no_contentと空データを返す。失敗した場合にはstatus: :internal_server_errorを返す。

    end
  end
end
