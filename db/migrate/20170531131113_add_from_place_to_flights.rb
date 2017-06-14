class AddFromPlaceToFlights < ActiveRecord::Migration[5.0]
  def change
    add_column :flights, :from_place, :string
  end
end
