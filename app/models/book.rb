class Book < ActiveRecord::Base
  validates :title, uniqueness: {case_sensitive: false}, on: create
  validates_presence_of :title, :page_count

  after_initialize :defaults

  private

    def defaults
      self.image_url ||= "/assets/no_image_found_small.png"
      self.author ||= "Unknown"
    end
end
