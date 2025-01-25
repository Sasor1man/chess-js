const WebSocket = require('ws');


const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('Клиент подключился');


});

console.log('ws://localhost:8080');