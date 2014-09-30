class Book < ActiveRecord::Base
  validates_uniqueness_of :title, on: :create
  validates_presence_of :title, :page_count

  has_and_belongs_to_many :users
  
  after_initialize :defaults

  private

    def defaults
      self.image_url ||= "/assets/no_image_found_small.png"
      self.author ||= "Unknown"
    end
end
