class TastingsController < ApplicationController
  # GET /tastings
  def index
    @tastings = Tasting.all
    render json: @tastings
  end
