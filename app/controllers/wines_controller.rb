class WinesController < ApplicationController
  before_action :authorize_request, only: [ :create, :update, :destroy ]
  before_action :set_wine, only: [ :update, :destroy ]

  # GET /wines
  def index
    @wines = Wine.all

    render json: @wines.limit(10).offset(20)
  end

  # GET /wines/1
  def show
    render json: @wine, include: tastings
  end

  # POST /wines
  def create
    @wine = Wine.new(wine_params)
    @wine.user = @current_user

    if @wine.save
      render json: @wine, status: :created, location: @wine
    else
      render json: @wine.errors, status: :unprocessable_entity
    end
  end

  # PUT /wines/1
  def update
    if @wine.update(wine_params)
      render json: @wine
    else
      render json: @wine.errors, status: :unprocessable_entity
    end
  end

  # DELETE /wines/1
  def destroy
    @wine.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_wine
      @wine = Wine.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def wine_params
      params.require(:wine).permit(:name)
    end
end
