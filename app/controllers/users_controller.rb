class UsersController < ApplicationController

    def show 
        user = User.find(params[:id]) 
        if user
        render json:user, except:[:created_at, :updated_at],include: {books: {except:[:created_at, :updated_at]}}
        # user,include: :books
            else  
        render json: {messege: "Sorry but there is noone here :-(" }
        end
    end

    def create 
        user = User.new(user_params)
        if user.save
        render json:user, include: :books
        end
    end

    def update 
        user = User.find(params[:id])
        user.update(user_params)
        render json:user, include: :books 
    end

    private
    def user_params
        params.require(:user).permit(:name, :email)
    end




    #be able to delete a user if there is enough time
    #be able to create a new user if there is enough time
    #be able to edit a user if there is enough time

end
