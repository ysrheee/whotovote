class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
  
      t.string :c_id
      t.integer :rate
      t.string :message

      t.timestamps null: false
    end
  end
end
