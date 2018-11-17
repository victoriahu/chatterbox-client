var Friends = {
    $usernames: $('#chats .username'),
    initialize: function() {
        Friends.$usernames.on('click', Friends.toggleStatus);
        console.log("friends init");
    },
    friendsList: {}, 
    toggleStatus: function(event) {
        console.log("test");
        var username = event.target.innerText;
        if (username in Friends.friendsList) {
            delete Friends.friendsList[username];
        } else {
            Friends.friendsList[username]= true;
        }
    }


};


// initialize: function() {
//     FormView.$form.on('submit', FormView.handleSubmit);
//   },