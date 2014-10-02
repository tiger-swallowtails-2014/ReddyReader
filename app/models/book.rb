class Book < ActiveRecord::Base
  validates_numericality_of :page_count, less_than_or_equal_to: 2000
  validates_uniqueness_of :title
  validates_presence_of :title, :page_count

  has_and_belongs_to_many :users
  after_initialize :defaults

  private

    def defaults
      self.image_url ||= "/assets/no_image_found_small.png"
      self.author ||= "Unknown"
    end
end
