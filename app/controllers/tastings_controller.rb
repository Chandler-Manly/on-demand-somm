class TastingsController < ApplicationController
  # GET /tastings
  def index
    @tastings = Tasting.all
    render json: @tastings
  end
def add_tasting
  @wine = Wine.find(params[:wine_id])
  @tasting = Tasting.find(params[:id])
  @wine.tastings << @tasting
  render json: @wine, include :tastings
end
end