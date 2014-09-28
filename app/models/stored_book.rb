class Stored_Book < ActiveRecord::Base
  validates :book_title, uniqueness: {case_sensitive: false}, on: create
end