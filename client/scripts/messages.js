var Messages = {

    _data: {}, 

    add: function(message, callback = ()=> {}) {
        Messages._data[message.objectId] = message;
        callback(message);
    },

    update: function(arrayResults, callback = ()=> {}) {
        for (var i = 0; i < arrayResults.length; i++) {
            Messages.add(arrayResults[i]);
        }
        callback(Messages._data);
    },

    items: function() {
        return Messages._data;
    }
    // var results = data.results;
    // for (var i = 0; i < results.length; i++) {
    //   Messages._data[results[i].objectId] = results[i];
    // } 
};

// var message = {
//     username: 'shawndrost',
//     text: 'trololo',
//     roomname: '4chan'
//   };