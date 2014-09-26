require 'rails_helper'

describe StaticPagesController do
  context "#index" do
    it "renders the index page" do
      get :index
      expect(response).to render_template("index")
    end
  end

  context "#search_results" do
    it "renders the search results page"
  end

  context "#speed_test" do
    it "renders the speed test page"
  end

  context "#speed_test_result" do
    it "renders the search test results page"
    it "calculates my WPM"
    it "calculates the time it will take to read my selected book"
  end
end
