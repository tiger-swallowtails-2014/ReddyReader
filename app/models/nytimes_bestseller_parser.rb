require 'uri'
require 'httparty'
require 'json'

class NYTimesBestsellerParser
  def self.get_bestseller_titles
    json_response = HTTParty.get(build_search_url)
    return [] unless json_response.parsed_response["results"]

    bestsellers = json_response.parsed_response["results"].map do |result|
      parseBestsellerFromJSON(result["book_details"]).first
    end
  end

  private
    def self.parseBestsellerFromJSON(item_json)
      titles = []

      item_json.each{|title| titles << title["title"]}

      titles
      
    end

    def self.build_search_url
      URI.escape("http://api.nytimes.com/svc/books/v2/lists//combined-print-and-e-book-fiction.json?&offset=&sortby=published-date&sortorder=&api-key=32a733e9b929d7c45881a08ecf0a1da8:6:61713050")
    end
end

NYTimesBestsellerParser.get_bestsellers
