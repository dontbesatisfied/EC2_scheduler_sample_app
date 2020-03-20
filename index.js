// Setup basic express server
var express = require("express");
var app = express();
var path = require("path");
var server = require("http").createServer(app);
var io = require("socket.io")(server);
var port = process.env.PORT || 3000;
var redis = require("socket.io-redis");

// Routing
app.use(express.static(path.join(__dirname, "public")));

require("./socket")(io);

server.listen(port, () => {
  console.log("Server listening at port %d", port);
});
