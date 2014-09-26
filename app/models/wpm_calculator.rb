class WpmCalculator
  def self.calc_wpm(word_count, time_in_seconds)
    return (word_count * 60) / time_in_seconds
  end

  def self.time_per_page(time_in_seconds, word_count)
    return time_in_seconds * (250.0/word_count)
  end

  def  self.time_to_read(page_count, time_per_page)
    return  ((time_per_page * page_count)/60.0)/60
  end
end
