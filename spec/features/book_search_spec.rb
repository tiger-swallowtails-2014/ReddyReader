require 'rails_helper'

describe "Book search feature" do
  it "renders the welcome message" do
    visit root_path
    expect(page).to have_content "What would you like to read?"
  end

  it "returns a list of matching books when I perform a search" do
    visit root_path
    fill_in 'searchfield', with: "1984"
    wait_for_ajax
    expect(page).to have_css(".book")
  end

  it "allows me to search again when no matching books are returned" do
    visit root_path
    fill_in 'searchfield', with: "!@#$%"
    wait_for_ajax
    expect(page).to_not have_css(".book")
    fill_in 'searchfield', with: "1984"
    wait_for_ajax
    expect(page).to have_css(".book")
  end

  it "allows me to search again when the matching books aren't what I'm looking for" do
    visit root_path
    fill_in 'searchfield', with: "harry potter"
    wait_for_ajax
    expect(page).to_not have_content "George Orwell"
    fill_in 'searchfield', with: "1984"
    wait_for_ajax
    expect(page).to have_content "George Orwell"
  end
end
