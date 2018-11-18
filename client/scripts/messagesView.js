var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    var populateMsgs = function(data) {
      debugger;
      var results = data.results;
      Messages.update(results);
      MessagesView.render();
    }
    Parse.readAll(populateMsgs, console.log);
  },

  render: function() {
    debugger;
    var arr = [];
    var items = Messages.items();
    for (var key in items) {
      arr.push(items[key]);
    }
    for (var i = arr.length - 1; i >= 0; i--) {
      MessageView.render(arr[i]);
    }
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