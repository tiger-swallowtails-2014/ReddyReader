class Paragraph < ActiveRecord::Base
  validates :content, presence: true

  def word_count
    self.content.split(" ").length
  end
end
