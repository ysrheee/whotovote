class CreateRegions < ActiveRecord::Migration
  def change
    create_table :regions do |t|
      
      t.string :region
      t.string :r_id
      t.string :goo_id
      t.string :goo_name
      t.string :boundary

      t.timestamps null: false
    end
  end
end
