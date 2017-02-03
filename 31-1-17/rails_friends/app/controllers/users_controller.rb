class UsersController < ApplicationController
    def index
        
    end
    def create
        redirect_to :action => 'show'
    end
    def mutual_friends
        user_one = 5
        user_two = 1
        @mutual_friends = User.mutual_friends(user_one,user_two)
        @first_user = User.find(5)
        @second_user = User.find(1)
    end
    def friends
      user_id = 5
      @user_name = User.find(user_id)
      @friends = User.friends(user_id)
    end
    def pending
        user_id = 4
        @pending_user_name = User.find(user_id)
        @pending_friends_names = User.pending_requests(user_id)
    end
end
