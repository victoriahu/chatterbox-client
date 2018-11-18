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
    var callback = function(metaData) {
      _.extend(message, metaData); 
      Messages.add(message , MessageView.render);
    }
    Parse.create(message, callback, console.log);
    // if () {

    // }
    // MessagesView.render();
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};