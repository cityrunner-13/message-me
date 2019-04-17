class ChatroomChannel < ApplicationCable::Channel
  def subscribed
    # Requests and subscribes to the chatroom_channel
    stream_from "chatroom_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
