class CreateBooksUsers < ActiveRecord::Migration
  def change
    create_table :books_users do |t|
      t.integer :user_id
      t.integer :book_id
      t.timestamps
    end
  end
end
