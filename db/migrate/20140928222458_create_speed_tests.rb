class CreateSpeedTests < ActiveRecord::Migration
  def change
    create_table :speed_tests do |t|
      t.text :test
    end
  end
end
