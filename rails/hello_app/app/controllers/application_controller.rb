class ApplicationController < ActionController::Base
  def hello
    render html: "Hello, world!"
  end

  def goodbye
    render html: '<h2>Goodbye cruel world!</h2>'.html_safe
  end
end
