describe "Speed test" do
	xit "displays a block of text when I click the Start button" do
		visit '/speed_test'

		# click_button 'Start'

		expect(page).to have_content 'Start'
	end

  it "hides the text when I click the Done button"
  it "show the speed test results page when I click the Done button"
end
