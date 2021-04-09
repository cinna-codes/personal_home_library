class BooksController < ApplicationController
    def index
        if params[:author_id]
            books = Book.where(author_id: params[:author_id])
        else
            books = Book.all
        end
        render json: books
    end

    def show
        book = Book.find(params[:id])
        render json: book
    end

    def create
        book = Book.new(book_params)
        if book.save
            render json: book
        end
    end

    private
    def book_params
        params.require(:book).permit(:title, :pages, :author_id)
    end
end
