class ReadingTest < ActiveRecord::Base
  has_one :book
  has_one :paragraph
  belongs_to :user


  def wpm
    return ((self.paragraph.word_count * 60) / time_elapsed/1000).to_i
  end

  def time_per_page
    return (time_elapsed/1000) * (250.0/self.paragraph.word_count)
  end

  def  time_to_read
    return  ((time_per_page * self.book.page_count)/60.0)/60
  end


end

