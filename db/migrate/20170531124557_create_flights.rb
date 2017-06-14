class CreateFlights < ActiveRecord::Migration[5.0]
  def change
    create_table :flights do |t|
      t.string :airline_name
      t.time :depart_time
      t.time :arrival_time
      t.string :duration
      t.integer :adult_price
      t.integer :child_price
      t.integer :infant_price
      t.date :date

      t.timestamps
    end
  end
end
