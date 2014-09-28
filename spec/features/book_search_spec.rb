require 'rails_helper'

describe "Book search feature" do
  it "renders the welcome message" do
    visit root_path
    expect(page).to have_content "What would you like to read?"
  end

  it "returns a list of matching books when I perform a search" do
    visit root_path
    fill_in 'searchfield', with: "1984"
    expect(page).to have_content "George Orwell"
  end
  it "allows me to search again when no matching books are returned"
  it "allows me to search again when the matching books aren't what I'm looking for"
end
