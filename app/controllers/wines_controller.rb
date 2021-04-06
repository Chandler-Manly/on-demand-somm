class WinesController < ApplicationController
  before_action :authorize_request, only: [ :create, :update, :destroy ]
  before_action :set_wine, only: [ :update, :destroy ]

  # GET /wines
  def index
    @wines = Wine.all

    render json: @wines
  end

  # GET /wines/1
  def show
    @wine = Wine.find(params[:id])
    render json: @wine, include: :tastings
    
  end

  # POST /wines
  def create
    @wine = Wine.new(wine_params.except(:tastingData))
    @wine.user = @current_user
    @tasting = Tasting.new(wine_params[:tastingData])
    @wine.tastings << @tasting


    if @wine.save
      render json: @wine, status: :created, include: :tastings
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
      params.require(:wine).permit(:name, :producer, :varietal, tastingData:[
        :name,
        :clarity,
        :intensity_aromatics,
        :color,
        :observations,
        :condition,
        :intensity_palate,
        :aromas_primary,
        :aromas_secondary,
        :aromas_tertiary,
        :development,
        :alcohol,
        :sweetness,
        :acidity,
        :tannin,
        :body,
        :mousse,
        :intensity_flavor,
        :flavor_characteristics_primary,
        :flavor_characteristics_secondary,
        :flavor_characteristics_tertiary,
        :finish,
        :quality_level,
        :ageing_potential,
        
      ]

      )
    end
end
