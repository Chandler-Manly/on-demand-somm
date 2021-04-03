class Wine < ApplicationRecord
  has_and_belongs_to_many :tastings
  belongs_to :user  

  

end
