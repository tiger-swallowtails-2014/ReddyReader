require 'rails_helper'

RSpec.describe GoogleBooksParser do
  context "#get_books" do

    let(:search_data) {
      {
        "items" => [{
            "volumeInfo" => {
              "title" => "Title",
              "authors" => ["Author"],
              "pageCount" => 1000,
              "imageLinks" => { "thumnail" => "Image URL" }
            }
          }
        ]
      }
    }

    xit "returns an array of books" do
      response = double("Response", parsed_response: search_data)
      expect(HTTParty).to receive(:get).and_return(response)

      # GoogleBooksParser.get_books("test")
    end
  end

end
