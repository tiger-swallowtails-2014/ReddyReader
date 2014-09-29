require 'uri'
require 'httparty'
require 'json'

class GoogleBooksParser
  def self.get_books(search_term)
    json_response = HTTParty.get(build_search_url(search_term))
    return [] unless json_response.parsed_response["items"]

    books = json_response.parsed_response["items"].map do |item|
      parseBookFromJSON(item["volumeInfo"]) 
    end

    #only gets books that have page counts
    books.select do |book| 
      book 
    end

  end

  private
    def self.parseBookFromJSON(item_json)
      book_data = {}
      book_data[:author] = (item_json["authors"] || []).join(", ")
      book_data[:title] =  item_json["title"]
      book_data[:page_count] = item_json["pageCount"] if item_json["pageCount"]
      book_data[:image_url] = item_json["imageLinks"]["thumbnail"] if item_json["imageLinks"]

        Book.new(book_data) if book_data[:page_count]
      
    end

    def self.build_search_url(search_term)
      URI.escape("https://www.googleapis.com/books/v1/volumes?q=#{search_term}")
    end
end
