// materialize date picker for age on user sign up
// document.addEventListener('DOMContentLoaded', function () {
//   var elems = document.querySelectorAll('.datepicker');
//   var instances = M.Datepicker.init(elems, options);
// });

// materialize dropdown for choosing flag of native language
$('.dropdown-trigger').dropdown();

// array of flag art to replace user input of native language choice
// for loop to loop through array of flag options
var app = require("express")();
var http = require('http').Server(app);
var io = require('socket.io')(http);
io.on('connection', function(socket){
    console.log('a user connected!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    socket.on('chat message', function(msg){
      io.emit('chat message', msg);
    });
  });