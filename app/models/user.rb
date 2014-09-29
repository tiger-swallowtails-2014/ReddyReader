class User < ActiveRecord::Base
  has_secure_password
  has_many :books
  has_many :wpms
  
  validates_presence_of :username
  validates_presence_of :password_digest, on: :create
end
