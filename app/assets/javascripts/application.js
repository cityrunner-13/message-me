// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require activestorage
//= require turbolinks
//= require semantic-ui
//= require_tree .

// Automatically scrolls to the bottom by the scroll height of the 0th element
// of the messages
scroll_bottom = function() {
  if ($('#messages').length > 0) {
    $('#messages').scrollTop($('#messages')[0].scrollHeight);
  };
};

// Looks for enter key being pressed. Checks event keydown in function(e) and
// if it matches 13 (the 'enter' keycode) click the button
submit_message = function() {
  $('#message_body').on('keydown', function(e) {
    if (e.keyCode == 13) {
      $('button').click();
      // Removes the text from textbox after clicking enter
      e.target.value = "";
    };
  });
};

// Waits for turbolinks and DOM to load before calling function
$(document).on('turbolinks:load', function() {
  // enables dropdown
  $('.ui.dropdown').dropdown();
  // allows flash message close icon to close message
  $('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade');
  });
  submit_message();
  scroll_bottom();
});



// Renders page without an HTTP request or websocket
// $(docuemnt).ready(function(){
//   $('#msg-lookup-form').on('ajax:complete', function(event, data, status){
//     $('#results').html(data.responseText)
//   })
// })
