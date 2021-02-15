class AddFavoriteToRestaurants < ActiveRecord::Migration[6.0]
  def change
    add_column :restaurants, :favorite, :boolean, default: false
  end
end
