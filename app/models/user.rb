class User < ActiveRecord::Base
  has_secure_password
  has_and_belongs_to_many :books
  has_many :reading_tests
  
  validates_presence_of :username
  validates_presence_of :password_digest, on: :create

end
