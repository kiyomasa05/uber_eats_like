class LineFood < ApplicationRecord
  belongs_to :food
  belongs_to :restaurant
  belongs_to :order,optional:true

  validates :count,numericality:{greater_than:0}

  scope :active,-> {where(active:true)}#activeがtrueのものを探す?
  scope :other_restaurant, -> (picked_restaurant_id) { where.not(restaurant_id: picked_restaurant_id) }
  #引数を渡し、その引数でない物を探して渡す?
  #restaurant_idが特定の店舗IDではないもの一覧を返す。もし「他の店舗のLineFood」があった場合、ここには１つ以上の関連するActiveRecord_Relationが入る

  def total_amount
    food.price * count
  end
end
