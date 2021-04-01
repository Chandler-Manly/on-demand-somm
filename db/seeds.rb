# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Wine.destroy_all
Tasting.destroy_all
User.destroy_all

@admin = User.create!(username: 'admin', email: 'admin@email.com', password: '123456')
puts "#{User.count} users created"

@red = Tasting.create!(name: 'red')
@white = Tasting.create!(name: 'white')
@bubbles = Tasting.create!(name: 'bubbles')

puts "#{Tasting.count} Tasting created"

@cabernet_sauvignon = Wine.create!(name: 'Cabernet Sauvignon', user: @admin, tastings: [@red])
@sauvignon_blanc = Wine.create!(name: 'Sauvignon Blanc', user: @admin, tastings: [@white])
@champagne = Wine.create!(name: 'Champagne', user: @admin, tastings: [@bubbles])

puts "#{Wine.count} wines created"
