class Book
  attr_reader :author, :title, :image_url, :page_count

  def initialize(params)
    @author = params.fetch(:author)
    @title = params.fetch(:title)
    @image_url = params.fetch(:image_url, nil)
    @page_count = params.fetch(:page_count)
  end
end
