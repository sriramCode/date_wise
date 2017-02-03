class RemoveColumnFromFriends < ActiveRecord::Migration[5.0]
  def change
    remove_column :friends, :user_id, :integer
  end
end
