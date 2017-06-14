class AddToPlaceToFlights < ActiveRecord::Migration[5.0]
  def change
    add_column :flights, :to_place, :string
  end
end
