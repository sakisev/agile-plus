const WEB_SOCKET_SERVER = require("websocket").server;
const http = require("http");

const WEB_SOCKET_SERVER_PORT = 8000;

const HTTP_SERVER = http.createServer();
HTTP_SERVER.listen(WEB_SOCKET_SERVER_PORT);
console.log("listening on port " + WEB_SOCKET_SERVER_PORT);

const wsServer = new WEB_SOCKET_SERVER({
  httpServer: HTTP_SERVER,
});

const clients = {};

const getUniqueID = () => {
  const s4 = () =>
    Math.floor((1 + Math.random()) * 10000)
      .toString(16)
      .substring(1);
  return s4() + s4() + "-" + s4();
};

wsServer.on("request", (request) => {
  const uuid = getUniqueID();
  console.log(`
    ${new Date()} Recieved a new connection from origin ${request.origin}.`);

  const connection = request.accept(null, request.origin);

  clients[uuid] = connection;

  connection.on("message", (message) => {
    if (message.type === "utf8") {
      console.log(`Received message: ${message.utf8Data}`);

      for (var key in clients) {
        clients[key].sendUTF(message.utf8Data);
        console.log(`Sent message to: ${clients[key]}`);
      }
    }
  });
});
