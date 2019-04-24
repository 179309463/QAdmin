require 'test_helper'

class Examples::Components::LayoutsControllerTest < ActionDispatch::IntegrationTest
  test "should get headers" do
    get examples_components_layouts_headers_url
    assert_response :success
  end

end
