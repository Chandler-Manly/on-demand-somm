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

User.create!(username: 'admin', email: 'admin@email.com', password: '123456')
puts "#{User.count} users created"

@salty = Tasting.create!(name: 'salty')
@sweet = Tasting.create!(name: 'sweet')
@sour = Tasting.create!(name: 'sour')
@bitter = Tasting.create!(name: 'bitter')
@umami = Tasting.create!(name: 'umami')

puts "#{Tasting.count} Tasting created"

Wine.create!(name: 'pizza', user: @admin, tastings: [@salty, @sweet, @umami])
@ice_cream = Wine.create!(name: 'ice cream', user: @admin)

@ice_cream.tastings.push(@sweet, @salty)

@tacos = Wine.create!(name: 'tacos', user: @admin)

@salty.wines << @tacos
@sour.wines << @tacos
@umami.wines << @tacos

puts "#{Wine.count} wines created"
