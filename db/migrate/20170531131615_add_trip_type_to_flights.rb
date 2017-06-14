class AddTripTypeToFlights < ActiveRecord::Migration[5.0]
  def change
    add_column :flights, :trip_type, :string
  end
end
