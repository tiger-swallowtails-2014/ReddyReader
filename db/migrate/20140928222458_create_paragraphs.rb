class CreateParagraphs < ActiveRecord::Migration
  def change
    create_table :paragraphs do |t|
      t.text :test #CR This name confuses me - maybe content
    end
  end
end
