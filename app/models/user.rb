class User < ActiveRecord::Base
  has_secure_password
  has_many :books
  has_many :wpms
  
  validates_presence_of :username
  validates_presence_of :password_digest, on: :create

  def self.get_user(id)
    return User.where(id: id).first
  end

  def self.set_wpm(wpm, user)
    user.wpms.create(speed: wpm)
  end

end
