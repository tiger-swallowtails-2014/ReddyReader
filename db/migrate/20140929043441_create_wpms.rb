class CreateWpms < ActiveRecord::Migration
  def change
    create_table :wpms do |t|
      t.integer :speed
      t.belongs_to :user
      t.timestamps
    end
  end
end
