class BooksController < ApplicationController
    def index 
        books = Book.all 
        render json: books
    end


    def show 
        book = Book.find(params[:id])
        render json: book, except:[:created_at, :updated_at]
    end

    def create 
        book = Book.new(book_params)
        if book.save
        render json: book
        end
    end

    def update
        book = Book.find(params[:id])
        book.update(book_params)
        render json: book
    end

    def destroy
        book = Book.find(params[:id])
        book.destroy
    end

    def book_params
        params.require(:book).permit(:user_id, :title, :author, :pages, :summary, :image)
    end


end
