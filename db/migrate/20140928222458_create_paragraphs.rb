class CreateParagraphs < ActiveRecord::Migration
  def change
    create_table :paragraphs do |t|
      t.text :content
      t.integer :difficulty, default: 3
      t.belongs_to :reading_test
    end
  end
end
