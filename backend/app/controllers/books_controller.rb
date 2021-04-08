class BooksController < ApplicationController
    def index
        books = Book.all
        render json: books
    end

    def show
        book = Book.find(params[:id])
        render json: book
    end

    def create

    end

    private
    def book_params
        params.require(:book).permit(:title, :pages)
    end
end
