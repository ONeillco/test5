class CreateHeroes < ActiveRecord::Migration[6.1]
  def change
    create_table :heroes do |t|
      t.string :name
      t.string :story
      t.string :category
      t.integer :user_id

      t.timestamps
    end
  end
end
