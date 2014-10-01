require 'rails_helper'

describe Paragraph do
  context "validations" do
    it { should validate_presence_of :content }
    it { should validate_presence_of :difficulty }
  end

  context "methods" do
    it "should return a word count" do
      expect(Paragraph.first.word_count).to be > 0
    end
  end
end
