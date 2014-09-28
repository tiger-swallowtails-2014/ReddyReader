class CreateBookstats < ActiveRecord::Migration
  def change
    create_table :bookstats do |t|
      t.string :book_title
      t.string :image_url
      t.integer :page_count
      t.integer :est_word_count
      t.timestamps
    end
  end
end
