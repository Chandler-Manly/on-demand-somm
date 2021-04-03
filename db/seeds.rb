# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

Wine.destroy_all
Tasting.destroy_all
User.destroy_all

@admin = User.create!(username: 'admin', email: 'admin@email.com', password: '123456')
puts "#{User.count} users created"

@red = Tasting.create!(
  name:'red', 
  clarity:'clear', 
  intensity_aromatics:'pronounced', 
  color:'salmon', 
  observations:'tears',
  condition:'clean', 
  intensity_palate:'pronounced',  
  aromas_primary:'Red fruit', 
  aromas_secondary:'Oak',
  aromas_tertiary:'Deliberate oxidation', 
  development: 'Fully developed', 
  sweetness: 'medium-dry', 
  acidity: 'medium+', 
  tannin:'medium+', 
  alcohol:'high', 
  body: 'medium+', 
  mousse:'delicate', 
  intensity_flavor: 'pronounced', 
  flavor_characteristics_primary:'Black fruit',
  flavor_characteristics_secondary:'Oak',
  flavor_characteristics_tertiary:'Earth, tobacco',
  finish:'medium+',
  quality_level:'Very good',
  ageing_potential:'Drink now: not suitable for ageing or further ageing'
  )

  @white = Tasting.create!(
    name:'white', 
    clarity:'clear', 
    intensity_aromatics:'pronounced', 
    color:'salmon', 
    observations:'tears',
    condition:'clean', 
    intensity_palate:'pronounced',  
    aromas_primary:'Red fruit', 
    aromas_secondary:'Oak',
    aromas_tertiary:'Deliberate oxidation', 
    development: 'Fully developed', 
    sweetness: 'medium-dry', 
    acidity: 'medium+', 
    tannin:'medium+', 
    alcohol:'high', 
    body: 'medium+', 
    mousse:'delicate', 
    intensity_flavor: 'pronounced', 
    flavor_characteristics_primary:'Black fruit',
    flavor_characteristics_secondary:'Oak',
    flavor_characteristics_tertiary:'Earth, tobacco',
    finish:'medium+',
    quality_level:'Very good',
    ageing_potential:'Drink now: not suitable for ageing or further ageing'
    )

@bubbles = Tasting.create!(
  name:'bubbles', 
  clarity:'clear', 
  intensity_aromatics:'pronounced', 
  color:'salmon', 
  observations:'tears',
  condition:'clean', 
  intensity_palate:'pronounced',  
  aromas_primary:'Red fruit', 
  aromas_secondary:'Oak',
  aromas_tertiary:'Deliberate oxidation', 
  development: 'Fully developed', 
  sweetness: 'medium-dry', 
  acidity: 'medium+', 
  tannin:'medium+', 
  alcohol:'high', 
  body: 'medium+', 
  mousse:'delicate', 
  intensity_flavor: 'pronounced', 
  flavor_characteristics_primary:'Black fruit',
  flavor_characteristics_secondary:'Oak',
  flavor_characteristics_tertiary:'Earth, tobacco',
  finish:'medium+',
  quality_level:'Very good',
  ageing_potential:'Drink now: not suitable for ageing or further ageing'
  )

puts "#{Tasting.count} Tasting created"

@cabernet_sauvignon = Wine.create!(
  name: 'Cabernet Sauvignon', 
  user: @admin, 
  tastings: [@red], 
  varietal:'Cabernet Sauvignon', 
  producer:'Far Niente')

@syrah = Wine.create!(
  name: 'Syrah', 
  user: @admin, 
  tastings: [@red],
  varietal:'Syrah', 
  producer:'JL Chave Hermitage'
  
  )
@pinot_noir = Wine.create!(
  name: 'Pinot Noir', 
  user: @admin, 
  tastings: [@red],
  varietal:'Pinot Noir',
  producer:'DRC'
  )
@sauvignon_blanc = Wine.create!(
  name: 'Sauvignon Blanc', 
  user: @admin, 
  tastings: [@white],
  varietal:'Sauvignon Blanc', 
  producer:'Domaine Franck Millet'
  )

@chardonnay = Wine.create!(
  name: 'Chardonnay', 
  user: @admin, 
  tastings: [@white],
  varietal:'Chardonnay', 
  producer:'Keenan'
  )

@pinot_grigio = Wine.create!(
  name: 'Pinot Grigio', 
  user: @admin, 
  tastings: [@white],
  varietal:'Pinot Grigio', 
  producer:'Venica'
  )

@prosecco = Wine.create!(
  name: 'Prosecco', 
  user: @admin, 
  tastings: [@bubbles],
  varietal:'Glera', 
  producer:'Aurantis'
  )

@cava = Wine.create!(
  name:'Cava', 
  user: @admin, 
  tastings: [@bubbles],
  varietal:'Cava', 
  producer:'Raventos'
  )

  @champagne = Wine.create!(
    name: 'Champagne', 
    user: @admin, 
    tastings: [@bubbles],
    varietal:'Champagne', 
    producer:'Dom Perignon'
    )

puts "#{Wine.count} wines created"
