describe "Speed test results" do
  before(:each) do 
    visit '/'
    fill_in('searchfield', :with => 'Game of Thrones')
    page.should have_content 'George'
    first('.book').click
    wait_for_ajax
  end
  
  it "allows me to search for a new book and immediately see how long it will take me to read"
end
