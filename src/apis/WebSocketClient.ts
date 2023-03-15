// import WebSocket from 'wEBS';

export class WebSocketClient {
    private socket: WebSocket;

    constructor(url: string) {
        this.socket = new WebSocket(url);

        this.socket.addEventListener('open', () => {
            console.log('WebSocket connection established.');
        });

        this.socket.addEventListener('message', (event: any) => {
            console.log(`Received message: ${event.data}`);
        });

        this.socket.addEventListener('close', () => {
            console.log('WebSocket connection closed.');
        });
    }

    send(message: string) {
        this.socket.send(message);
    }

    close() {
        this.socket.close();
    }
}
