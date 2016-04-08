class CreateCandidates < ActiveRecord::Migration
  def change
    create_table :candidates do |t|

      t.string :do
      t.string :goo
      t.string :goo_id
      t.string :photo
      t.string :name
      t.string :party
      t.integer :c_id
      t.string :num
      t.string :disc
      t.string :terror
      t.string :num_p
      t.string :dropout
      t.string :birth
      t.string :age
      
      t.integer :reply_num, default: 0
      t.integer :rate_sum, default: 0
      
      t.timestamps null: false
    end
  end
end
