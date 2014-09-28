class Stored_Book < ActiveRecord::Base
  validates :book_title, uniqueness: true
end