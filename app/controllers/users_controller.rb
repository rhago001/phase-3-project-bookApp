class UsersController < ApplicationController

    def show 
        user = User.find_by(id: params[:id])
        if user
        render json:user, except:[:created_at, :updated_at],include: {books: {except:[:created_at, :updated_at]}}
        # user,include: :books
            else  
        render json: {messege: "Sorry but there is noone here :-(" }
        end
    end

    #be able to delete a user if there is enough time
    #be able to create a new user if there is enough time
    #be able to edit a user if there is enough time

end
