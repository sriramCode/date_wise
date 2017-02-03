class FriendsController < ApplicationController
  def show
     User.where(id: '1').find_each do |first|
         @first_user = first.username
     end
     User.where(id: '2').find_each do |second|
         @second_user = second.username
     end
     @first_friend = Friend.joins(:user).where("user_id='1'")
     @second_friend = Friend.joins(:user).where("user_id='2'")
      
     @test = User.includes(:friends)
      
      @first_friend.each do |first|
          @second_friend.each do |second|
             if first.name == second.name
                 @mutual = first.name
             end
          end
      end

  end
end
