feature "speed test" do
	scenario "start button is displayed" do
		visit '/speed_test'

		# click_button 'Start'

		expect(page).to have_content 'Start'
	end




end