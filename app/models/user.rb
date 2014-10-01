class User < ActiveRecord::Base
  has_secure_password
  has_and_belongs_to_many :books
  has_many :reading_tests
  
  validates_presence_of :username
  validates_uniqueness_of :username
  validates_presence_of :password_digest, on: :create
  
  def recent_wpm
    test = self.reading_tests.last
    test.wpm if test
  end
  
  def from_goodreads?
    self.provider === "goodreads"
  end
  
  def self.create_with_omniauth(auth)
    create! do |user|
      user.provider = auth["provider"]
      user.uid = auth["uid"]
      user.username = auth["info"]["user_name"] || User.random_username
      user.name = auth["info"]["name"]
      user.password = User.random_password
    end
  end
  
  private
  def self.random_username
    "user#{User.count + 1}"
  end
  
  def self.random_password
    SecureRandom.hex
  end
end
