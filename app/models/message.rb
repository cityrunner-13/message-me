class Message < ApplicationRecord
  belongs_to :user
  validates :body, presence: true
  # pulls last 20 messages from db
  scope :custom_display, -> { order(:created_at).last(20) }
end
