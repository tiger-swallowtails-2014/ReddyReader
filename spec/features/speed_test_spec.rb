require 'rails_helper'

describe "Speed test" do
  before(:each) do
    visit '/'
    fill_in('searchfield', :with => 'Game of Thrones')
    wait_for_ajax
    expect(page).to have_content 'George'
    first('.book').click
    wait_for_ajax
  end

	it "displays a block of text when I click the Start button" do
		click_button 'start'
    wait_for_ajax
		expect(page).to have_content 'Marie Curie'
    # Change Marie Curie to allow for switching of test text
	end

  it "hides the text when I click the Done button" do
    click_button 'start'
    wait_for_ajax
    click_button 'done'
    wait_for_ajax
    expect(page).to have_no_content 'Marie Curie'
    # Change Marie Curie to allow for switching of test text
  end

  it "show the speed test results page when I click the Done button" do
    click_button 'start'
    wait_for_ajax
    click_button 'done'
    wait_for_ajax
    expect(page).to have_content 'words per minute'
  end
end
