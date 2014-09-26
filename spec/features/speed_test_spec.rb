feature "speed test" do
	scenario "start button is displayed" do
		visit '/speed_test'
<<<<<<< HEAD
		expect(page).to have_content "Start"
	
	end

=======

		# click_button 'Start'

		expect(page).to have_content 'Start'
	end




>>>>>>> a4cda455bcf361358f0d22e017d08b86cd1ea378
end