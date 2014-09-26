feature "speed test" do
	scenario "start button is displayed" do
		visit '/speed_test'
		expect(page).to have_content "Start"
	
	end

end