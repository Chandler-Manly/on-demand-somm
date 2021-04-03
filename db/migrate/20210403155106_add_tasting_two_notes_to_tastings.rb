class AddTastingTwoNotesToTastings < ActiveRecord::Migration[6.1]
  def change
    add_column :tastings, :intensity_aromatics, :string
    add_column :tastings, :color, :string
    add_column :tastings, :observations, :string
    add_column :tastings, :condition, :string
    add_column :tastings, :intensity_palate, :string
    add_column :tastings, :aromas_primary, :string
    add_column :tastings, :aromas_secondary, :string
    add_column :tastings, :aromas_tertiary, :string
    add_column :tastings, :development, :string
    add_column :tastings, :sweetness, :string
    add_column :tastings, :acidity, :string
    add_column :tastings, :tannin, :string
    add_column :tastings, :alcohol, :string
    add_column :tastings, :body, :string
    add_column :tastings, :mousse, :string
    add_column :tastings, :intensity_flavor, :string
    add_column :tastings, :flavor_characteristics_primary, :string
    add_column :tastings, :flavor_characteristics_secondary, :string
    add_column :tastings, :flavor_characteristics_tertiary, :string
    add_column :tastings, :finish, :string
    add_column :tastings, :quality_level, :string
    add_column :tastings, :ageing_potential, :string
  end
end
