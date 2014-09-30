class StaticPagesController < ApplicationController
  def index
  end
# CR Use REST - controllers for each resource ie WPM and BOOK

# CR This might work as a show ... COME BACK TO.

  def search_results
    @books = GoogleBooksParser.get_books(params[:book_title])
    render json: @books.to_json
  end

# CR This is too much logic for a controller .  I suspect their should be a current_book to store the session information, then move the logic to a model (probably WPM)  .  Create a current_book here
  def speed_test
    session[:image_url] = params[:image_url]
    session[:title] = params[:title]
    session[:author] = params[:author]
    session[:page_count] = params[:page_count].to_i
    speed_test = Paragraph.all.sample
    render json: {test:speed_test.test}.to_json
  end

  def speed_test_result


    title = session[:title] || "this book" # Fix this in current_book
    time = params[:time].to_f/1000 #in seconds # CR modifying time (ie /1000) a WPM model concern
    word_count = params[:word_count].to_i #CR this is ugly - the Paragaph model should supply this
    page_count = session[:page_count].to_i
    @WPM = WpmCalculator.calc_wpm(word_count, time)
  # CR create a current_user method
    user = User.get_user(session[:user_id])
    # CR this is current_book
    book = Book.create(image_url: session[:image_url], title: session[:title], page_count: page_count, est_word_count: page_count * 250, author: session[:author])
# CR - this should be current_user - see if this makes sense on User - ie set_wpm knows if current_user or not.
    if user
      User.set_wpm(@WPM, user)
      user.books << book
    end
# CR all in model
    time_per_page = WpmCalculator.time_per_page(time, word_count)
    @result = WpmCalculator.time_to_read(page_count, time_per_page)
# CR not needed if only a single format - make a team style choice
    respond_to do |format|
      format.json {render json: {wpm: @WPM, result: @result, title: title}}
    end
  end
# CR This is book_controller#index or at least on books_controller
  def random_book_display
    random_books = Book.limit(12).order("RANDOM()")
    render json: random_books.to_json
  end
end
