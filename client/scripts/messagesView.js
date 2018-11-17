var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {
  },

  renderMessage: function(message) {
    var msg = _.template(`
    <div class="chat">
      <div class="username"><%= username %></div>
      <div class="text"><%= text %></div>
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