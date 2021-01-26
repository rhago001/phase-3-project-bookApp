class BooksController < ApplicationController
    def show 
        book = Book.find(params[:id])
        render json: book, except:[:created_at, :updated_at]
    end

    def 

end
