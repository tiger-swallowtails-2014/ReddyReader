class ReadingTest < ActiveRecord::Base
  belongs_to :book
  belongs_to :paragraph
  belongs_to :user


  def wpm
    wpm = (self.paragraph.word_count * 60) /(time_elapsed/1000.0)
    wpm.to_i
  end

  def time_per_page
    return ((time_elapsed/1000.0) * (250.0/self.paragraph.word_count))/60.0
    #in minutes
  end

  def  time_to_read
    return  ((time_per_page * self.book.page_count))/60
    #in minutes
  end

  def self.get_wpm_json(current_user)
    wpm_data = { labels: [], wpms: [] }

    wpm_data[:labels] << "3rd grade student"
    wpm_data[:wpms] << 150

    wpm_data[:labels] << "8th grade student"
    wpm_data[:wpms] << 250

    wpm_data[:labels] << "College student"
    wpm_data[:wpms] << 450

    wpm_data[:labels] << "Speed reader"
    wpm_data[:wpms] << 1000

    wpm_data[:labels] << "Speed reading world record"
    wpm_data[:wpms] << 4251

    wpm_data[:labels] << "Site Average"
    wpm_data[:wpms] << ReadingTest.get_average_wpm

    if current_user
      wpm_data[:labels] << "Your Average"
      wpm_data[:wpms] << current_user.get_average_wpm
    end

    wpm_data.to_json
  end

  def self.get_average_wpm
    sum = ReadingTest.all.reduce(0) do |sum, test_result|
      sum + test_result.wpm
    end
    sum / ReadingTest.count
  end

end

