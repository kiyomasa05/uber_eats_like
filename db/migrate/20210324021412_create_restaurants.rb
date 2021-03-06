class CreateRestaurants < ActiveRecord::Migration[6.1]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false #string型のnameというカラムを作成し、オプションとしてnullにはできないようにする
      t.integer :fee, null: false, default: 0
      t.integer :time_required, null: false
      
      t.timestamps
    end
  end
end
