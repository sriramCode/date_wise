require 'test_helper'

class FriendshipsControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get friendships_show_url
    assert_response :success
  end

end
