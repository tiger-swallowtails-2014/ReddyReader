require 'rails_helper'

describe StaticPagesController do
  context "#index" do
    it "renders the index page" do
      get :index
      expect(response).to render_template("index")
    end
  end

  context "#search_results" do

  end

  context "#speed_test" do

  end

  context "#speed_results" do

  end
end