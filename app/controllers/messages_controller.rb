class MessagesController < ApplicationController
  before_action :require_user

  def create
    message = current_user.messages.build(message_params)
    if message.save
      # Broadcasts message to chatroom_channel. Takes a hash that the
      # chatroom.coffee file will receive.
      ActionCable.server.broadcast "chatroom_channel",
                                    mod_message: message_render(message)
    end
  end

  private
  def message_params
    params.require(:message).permit(:body)
  end

  # Renders message partial, which calls a message object that is specified by
  # the argument (message under 'def create'). locals specifies where the
  # argument is passed
  def message_render(message)
    render(partial: 'message', locals: {message: message})
  end

end
