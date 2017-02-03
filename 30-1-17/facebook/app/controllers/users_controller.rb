class UsersController < ApplicationController
  def show
     @friends = Friend.where(user_id: '2')
    
  end
  
end
