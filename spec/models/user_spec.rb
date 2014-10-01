require 'rails_helper'

RSpec.describe User, :type => :model do
  pending "add some examples to (or delete) #{__FILE__}"
end

describe User do
  context "validations" do
    it { should validate_presence_of :username }
    it { should validate_presence_of :password_digest }
    it { should validate_uniqueness_of :username }
  end

  context "associations" do
    it { should have_many :reading_tests }
  end
end
