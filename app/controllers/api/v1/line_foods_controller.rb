module Api
  module V1
    class LineFoodsController < ApplicationController
      before_action :set_food,only: %i[create]

      def create 
        #例外パターン 
        if LineFood.active.other_restaurant(@ordered_food.restaurant_id).exists?
          #「他店舗でアクティブなLineFood」を取得し存在するかどうか？trueにある場合には、JSON形式のデータを返す
          return render json:{
            existing_restaurant:LineFood.other_restaurant(@ordered_food.restaurant_id).first.restaurant.name,
            new_restaurant:Food.find(params[:food_id]).restaurant.name
          },status: :not_acceptable
        end

          set_line_food(@ordered_food)


        if @line_food.save#保存できれば
          render json:{
            line_food:@line_food
          },status: :created
        else
          render json:{},status: :internal_server_error
        end
      end

      private
        #params[:food_id]を受け取って、対応するFoodを１つ抽出し
        #@ordered_foodというインスタンス変数に代入
        def set_food
          @ordered_food=Food.find(params[:food_id])
        end

        def set_line_food(ordered_food)
          if ordered_food.line_food.present?#もし引数（ordered_food）のline_foodがあれば
            @line_food=ordered_food.line_food   #引数（ordered_food）のline_foodを代入
            @line_food.update_attributes = {
              count: ordered_food.line_food.count+params[:count],#引数のline_foodの数とparams:countの数を足して更新
              active: true
            }
          else
            @line_food=ordered_food.build_line_food(
              count:params[:count],
              restaurant:ordered_food.restaurant,
              active:true
            )
          end
        end
    end
  end
end
