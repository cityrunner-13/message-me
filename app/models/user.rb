# Command: 'rails generate model User' creates both model and migration files
class User < ApplicationRecord
  validates :username, presence: true, uniqueness: {case_sensitive: false}, length: { minimum: 3, maximum: 15 }
  has_secure_password
end
