class User < ApplicationRecord
    has_many :friendships
    has_many :friends,->{where(friendships: {status: 'true'})}, :through => :friendships
    has_many :inverse_friendships, :class_name => "Friendship", :foreign_key => "friend_id"
    has_many :inverse_friends, ->{where(friendships: {status: 'true'})}, :through => :inverse_friendships, :source => :user   
    scope :pending_requests, ->(user_id) {               User.find(User.find(user_id).inverse_friendships.where("status='pending'").pluck(:user_id)).pluck(:name)
    }
    scope :friends, ->(user_id) {
        User.find(user_id).friends + User.find(user_id).inverse_friends
        }
    scope :mutual_friends, ->(user_one,user_two) {
        friend_array = User.friends(user_one) + User.friends(user_two)
        friend_array.select{ |e| friend_array.count(e) > 1 }.uniq
        }
end
