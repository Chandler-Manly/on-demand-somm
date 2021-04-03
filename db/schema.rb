# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_04_03_155403) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "tastings", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "clarity"
    t.string "intensity_aromatics"
    t.string "color"
    t.string "observations"
    t.string "condition"
    t.string "intensity_palate"
    t.string "aromas_primary"
    t.string "aromas_secondary"
    t.string "aromas_tertiary"
    t.string "development"
    t.string "sweetness"
    t.string "acidity"
    t.string "tannin"
    t.string "alcohol"
    t.string "body"
    t.string "mousse"
    t.string "intensity_flavor"
    t.string "flavor_characteristics_primary"
    t.string "flavor_characteristics_secondary"
    t.string "flavor_characteristics_tertiary"
    t.string "finish"
    t.string "quality_level"
    t.string "ageing_potential"
  end

  create_table "tastings_wines", id: false, force: :cascade do |t|
    t.bigint "wine_id", null: false
    t.bigint "tasting_id", null: false
    t.index ["tasting_id", "wine_id"], name: "index_tastings_wines_on_tasting_id_and_wine_id"
    t.index ["wine_id", "tasting_id"], name: "index_tastings_wines_on_wine_id_and_tasting_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "wines", force: :cascade do |t|
    t.string "name"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "varietal"
    t.string "producer"
    t.index ["user_id"], name: "index_wines_on_user_id"
  end

  add_foreign_key "wines", "users"
end
