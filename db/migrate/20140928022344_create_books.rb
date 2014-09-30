class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :title, null: false, unique: true
      t.string :author
      t.string :image_url, null: false
      t.string :isbn
      t.integer :page_count, null: false, default: 0
      t.timestamps
    end
  end
end
