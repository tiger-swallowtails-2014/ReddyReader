class Paragraph < ActiveRecord::Base
  validates :content, presence: true
  validates :difficulty, presence: true

  def word_count
    self.content.split(" ").length
  end
end
