require 'rails_helper'

describe Book do
  context "validations" do
    it { should validate_presence_of :title }
    it { should validate_presence_of :page_count }
    it { should validate_uniqueness_of :title }
  end

  context "associations" do
    it { should have_many :users }
  end
end
