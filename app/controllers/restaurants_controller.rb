class RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.all.order(:name)
    @restaurant_count = Restaurant.count
    respond_to do |format|
      format.html
      format.json { render json: { restaurants: @restaurants }}
    end
  end

  def show
    @restaurant = Restaurant.find(params[:id])
    @review = Review.new
  end

  def mark_as_favorite
    @restaurant = Restaurant.find(params[:id])
    @restaurant.toggle(:favorite)
    @restaurant.save
    redirect_to restaurants_path
  end
end
