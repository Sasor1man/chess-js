const WebSocket = require('ws');
const clients = new Set();

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('Клиент подключился');

    ws.on('message', (message) => {
        console.log(JSON.parse(message))
        let move = JSON.parse(message)
        const clients = wss.clients.size
        switch (clients) {
            case 1: wss.clients.forEach((client) => {
                client.send('wait');
                console.log('wait')
            }); break;
            case 2: wss.clients.forEach((client) => {
                client.send(JSON.stringify(move));
                console.log('send')
            }); break;
        }

    })

});

console.log('ws://localhost:8080');