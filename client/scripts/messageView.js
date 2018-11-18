var MessageView = {
    
  render: function(message) {
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
    MessagesView.$chats.prepend(msg(message));
    // debugger;
    MessagesView.$chats.children()[0].querySelector(".username").addEventListener('click', Friends.toggleStatus);
  }
};

// need to insert text

//messagesView.messageRender ==> MessageView.render