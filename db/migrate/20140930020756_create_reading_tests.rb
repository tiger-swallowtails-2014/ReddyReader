class CreateReadingTests < ActiveRecord::Migration
  def change
    create_table :reading_tests do |t|
      t.integer :time_elapsed
      t.belongs_to :user
      t.belongs_to :book
      t.belongs_to :paragraph
      t.timestamps
    end
  end
end
