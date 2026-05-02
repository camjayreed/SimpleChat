const WebSocket = require('ws');
const ws = new WebSocket.Server({ port: 8080 });

console.log('WebSocket server is running on port 8080');

ws.on('connection', (ws) => {
  console.log('New client connected');

  ws.on('error', console.error);

  /* if we get message */
  ws.on('message', (data) => {
    console.log(`User message received: "${data.toString()}"`)
    ws.send(data.toString());
    console.log("Message sent to all users!")
  });

  ws.on('close', () => {
    console.log('Client disconnected');
    /* on close actually disconnect user from chatroom */
  });
});
