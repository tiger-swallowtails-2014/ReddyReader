class CreateStoredBooks < ActiveRecord::Migration
  def change
    create_table :stored_books do |t|
      t.string :book_title
      t.string :author
      t.string :image_url
      t.integer :page_count
      t.integer :est_word_count
      t.timestamps
    end
  end
end
