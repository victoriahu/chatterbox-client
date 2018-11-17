var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    var message = {
      username: App.username,
      text: $('#message').val(),
      roomname: 'test'
    }
      //   username: 'Mel Brooks',
      //   text: 'Never underestimate the power of the Schwartz!',
      //   roomname: 'lobby'
      // };
    event.preventDefault();
    Parse.create(message, MessagesView.initialize, console.log);

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};