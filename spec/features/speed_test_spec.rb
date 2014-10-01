require 'rails_helper'

describe "Speed test" do
  before(:each) do
    visit '/'
    fill_in('searchfield', :with => 'Game of Thrones')
    wait_for_ajax
    first('.book').click
    wait_for_ajax
    click_button 'Done'
  end

	xit "displays a block of text when I click the Start button" do
		click_button 'start'
    wait_for_ajax
		expect(page).to have_css('#testparagraph')
	end

  xit "hides the text when I click the Done button" do
    click_button 'start'
    wait_for_ajax
    click_button 'done'
    wait_for_ajax
    expect(page).to_not have_css('#testparagraph')
  end

  xit "shows the speed test results page when I click the Done button" do
    click_button 'start'
    wait_for_ajax
    click_button 'done'
    wait_for_ajax
    expect(page).to have_content 'words per minute'
  end
end
