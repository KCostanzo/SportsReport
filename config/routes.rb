Rails.application.routes.draw do
  root to: "static_pages#root"
  
  namespace defaults: {format: :json} do
  end
end
