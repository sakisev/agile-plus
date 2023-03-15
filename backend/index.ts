import * as WebSocket from 'ws';


const server = new WebSocket.Server({port: 8080});

server.on('connection', (socket: WebSocket) => {
    console.log('Client connected.');

    socket.on('message', (message: string) => {
        console.log(`Received message: ${message}`);

        // Echo the message back to the client
        socket.send(`You said: ${message}`);
    });

    socket.on('close', () => {
        console.log('Client disconnected.');
    });
});

//
// wsServer.on('request', (req: request) => {
//     const uuid = getUniqueID();
//     console.log(`
//     ${new Date()} Recieved a new connection from origin ${req.origin}.`);
//
//     const connection = req.accept(null, req.origin);
//
//     clients[uuid] = connection;
//
//     connection.on('message', (message: Message) => {
//         if (message.type === 'utf8') {
//             console.log(`Received message: ${message.utf8Data}`);
//
//             for (var key in clients) {
//                 clients[key].sendUTF(message.utf8Data);
//                 console.log(`Sent message to: ${clients[key]}`);
//             }
//         }
//     });
// });
