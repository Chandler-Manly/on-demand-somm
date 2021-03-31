class CreateJoinTableWinesTastings < ActiveRecord::Migration[6.1]
  def change
    create_join_table :wines, :tastings do |t|
      t.index [:wine_id, :tasting_id]
      t.index [:tasting_id, :wine_id]
    end
  end
end
