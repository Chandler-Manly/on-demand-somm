# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

Wine.destroy_all
Tasting.destroy_all
User.destroy_all

@admin = User.create!(username: 'admin', email: 'admin@email.com', password: '123456')
puts "#{User.count} users created"

@red = Tasting.create!(name: 'Red')
@white = Tasting.create!(name: 'White')
@bubbles = Tasting.create!(name: 'Bubbles')

puts "#{Tasting.count} Tasting created"

@cabernet_sauvignon = Wine.create!(name: 'Cabernet Sauvignon', user: @admin, tastings: [@red])
@syrah = Wine.create!(name: 'syrah', user: @admin, tastings: [@red])
@pinot_noir = Wine.create!(name: 'Pinot Noir', user: @admin, tastings: [@red])
@sauvignon_blanc = Wine.create!(name: 'Sauvignon Blanc', user: @admin, tastings: [@white])
@chardonnay = Wine.create!(name: 'Chardonnay', user: @admin, tastings: [@white])
@pinot_grigio = Wine.create!(name: 'Pinot Grigio', user: @admin, tastings: [@white])
@prosecco = Wine.create!(name: 'Prosecco', user: @admin, tastings: [@bubbles])
@cava = Wine.create!(name: 'Cava', user: @admin, tastings: [@bubbles])
@champagne = Wine.create!(name: 'Champagne', user: @admin, tastings: [@bubbles])

puts "#{Wine.count} wines created"
