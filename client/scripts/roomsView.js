var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'), 
  //<select></select>

  initialize: function() {
    RoomsView.$button.on('click', Rooms.add);
  },

  render: function() {
  },
  renderRoom: function(roomname) {
    var room = '<option>roomname</option>';
    RoomsView.$select.append(room);
  }
};
