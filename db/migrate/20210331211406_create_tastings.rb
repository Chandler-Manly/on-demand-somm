class CreateTastings < ActiveRecord::Migration[6.1]
  def change
    create_table :tastings do |t|
      t.string :name

      t.timestamps
    end
  end
end
