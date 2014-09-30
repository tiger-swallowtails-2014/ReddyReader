class User < ActiveRecord::Base
  has_secure_password
  has_and_belongs_to_many :books
  has_many :reading_tests
  
  validates_presence_of :username
  validates_presence_of :password_digest, on: :create
  
  def recent_wpm
    test = self.reading_tests.order(created_at: :desc).first
    test.wpm if test
  end
end
