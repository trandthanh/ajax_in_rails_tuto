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

  def mark_as_favorite # toggle_favorite
    @restaurant = Restaurant.find(params[:id])
    @restaurant.toggle(:favorite)
    @restaurant.save!
    respond_to do |format|
      format.html
      format.js do
        render partial: "favorite", locals: { restaurant: @restaurant }
        # @restaurant.toggle(:favorite)
        # @restaurant.save!
      end
    end
  end
end


