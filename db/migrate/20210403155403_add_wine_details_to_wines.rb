class AddWineDetailsToWines < ActiveRecord::Migration[6.1]
  def change
    add_column :wines, :varietal, :string
    add_column :wines, :producer, :string
  end
end
