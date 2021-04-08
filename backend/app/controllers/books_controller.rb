class BooksController < ApplicationController
    def index
        books = Book.all
        render json: books
    end

    def show

    end

    def create

    end
end
