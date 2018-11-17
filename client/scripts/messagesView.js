var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    var populateMsgs = function(data) {
      debugger;
      var results = data.results;
      for (var i = 0; i < results.length; i++) {
        Messages[results[i].objectId] = results[i];
      } 
      MessagesView.render(Messages);
    }
    Parse.readAll(populateMsgs, console.log);
  },

  render: function(Messages) {
    for (var key in Messages) {
      MessagesView.renderMessage(Messages[key]);
    }
  },

  renderMessage: function(message) {
    // if (message.username) {
    //   message.username = message.username; 
    // } else {
    //   message.username = 'anonymous';
    // };
    message.username = message.username || 'anonymous';
    message.text = message.text || '[blank]';
    
    var msg = _.template(`
    <div class="chat">
      <div class="username"><%- username %></div>
      <div class="text"><%- text %></div>
    </div>
  `)
    MessagesView.$chats.append(msg(message));
    // debugger;
    MessagesView.$chats.children()[0].querySelector(".username").addEventListener('click', Friends.toggleStatus);
  }
};


// var message = {
//   username: 'Mel Brooks',
//   text: 'Never underestimate the power of the Schwartz!',
//   roomname: 'lobby'
// };

// render: _.template(`
// <!--
// <div class="chat">
//   <div class="username"></div>
//   <div></div>
// </div>
// -->
// `)

// var compiled = _.template("hello: <%= name %>");
// compiled({name: 'moe'});
// => "hello: moe"
//{results: [100]}