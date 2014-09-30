class CreateReadingTests < ActiveRecord::Migration
  def change
    create_table :reading_tests do |t|
      t.integer :time_elapsed
      t.belongs_to :user
      t.references :paragraph
      t.references :book
      t.timestamps
    end
  end
end
