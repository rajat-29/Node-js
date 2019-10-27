var express = require('express')
var app = express()

var http = require('http')
var server = http.Server(app);

const socketIO = require('socket.io');
var io = socketIO(server);

var path = require('path')
var port = 3000

//Express Middleware
app.use(express.json()); //A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body).
app.use(express.urlencoded({extended: true})); 
app.use(express.static(path.join(__dirname, 'public'))); // To serve static files
//ByDefault serve /public/index.html 


io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    socket.emit('chat message', msg);
  });
  console.log("Connection Established")
});
  
server.listen(port , ()=>{console.log(`Listening on Port ${port}`)})
