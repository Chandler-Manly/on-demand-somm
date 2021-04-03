class AddTastingNotesToTastings < ActiveRecord::Migration[6.1]
  def change
    add_column :tastings, :clarity, :string
  end
end
