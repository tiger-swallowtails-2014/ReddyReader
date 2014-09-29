describe "Speed test results" do
  before(:each) do 
    visit '/'
    fill_in('searchfield', :with => 'Game of Thrones')
    page.should have_content 'George'
    first('.book').click
    wait_for_ajax
  end

  it "displays how long it will take to read my selected book" do
    click_button 'start'
    synchronize(seconds = 60)
    page.should have_content 'You read 145 words per minute'
  end
  
  it "allows me to search for a new book and immediately see how long it will take me to read"
end
