const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

const clients = new Map();

const resetGame = () => {
    clients.clear();
    wss.clients.forEach((client) => {
        client.send(JSON.stringify({ type: 'game_reset', message: 'Game over' }));
    });
};

wss.on('connection', (ws) => {
    let currentClientId = null;

    ws.on('message', (message) => {
        const data = JSON.parse(message);

        if (data.type === 'reconnect') {
            currentClientId = data.clientId;

            if (!clients.has(currentClientId)) {
                if (clients.size === 0) {
                    clients.set(currentClientId, { ws, role: 'client1', color: null });
                    ws.send(JSON.stringify({ type: 'reassign', role: 'client1', message: 'client 1' }));

                } else if (clients.size === 1) {
                    clients.set(currentClientId, { ws, role: 'client2', color: null });

                    const client1 = [...clients.values()].find(client => client.role === 'client1');

                    if (client1) {
                        const client1Color = Math.random() > 0.5 ? 'w' : 'b';

                        client1.color = client1Color;
                        clients.get(currentClientId).color = client1Color === 'w' ? 'b' : 'w';

                        client1.ws.send(JSON.stringify({ type: 'game_start', color: client1.color }));
                        ws.send(JSON.stringify({ type: 'game_start', color: clients.get(currentClientId).color }));
                    } else {
                        ws.send(JSON.stringify({ type: 'error', message: 'Failed to assign colors' }));
                        ws.close();
                        return;
                    }

                } else {
                    ws.send(JSON.stringify({ type: 'error', message: 'Server is busy' }));
                    ws.close();
                    return;
                }
            } else {
                clients.get(currentClientId).ws = ws;
                ws.send(JSON.stringify({ type: 'reassign', role: clients.get(currentClientId).role }));
            }
        } else if (data.type === 'move' || data.type === 'resign') {
            const opponent = [...clients.values()].find(client => client.ws !== ws);
            if (opponent) {
                data.type === 'move' ? opponent.ws.send(JSON.stringify({ type: 'game_move', data: data })) : opponent.ws.send(JSON.stringify({ type: 'resign', data: data }))
            }
        }
    });

    ws.on('close', () => {
        if (currentClientId && clients.has(currentClientId)) {
            clients.delete(currentClientId);
        }
        if (clients.size === 0) resetGame();
    });
});
console.log('ws://localhost:8080');