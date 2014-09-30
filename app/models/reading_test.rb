class ReadingTest < ActiveRecord::Base
  belongs_to :book
  belongs_to :paragraph
  belongs_to :user


  def wpm
    wpm = (self.paragraph.word_count * 60) /(time_elapsed/1000.0)
    wpm.to_i
  end

  def time_per_page
    return (time_elapsed/1000.0) * (250.0/self.paragraph.word_count)
  end

  def  time_to_read
    return  ((time_per_page * self.book.page_count)/60.0)/60
  end


end

