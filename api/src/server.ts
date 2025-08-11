import { createServer } from 'http';
import { Server as SocketServer } from 'socket.io';
import app from './app';
import { initializeSocket } from './modules/websocket/socket.handler';

const server = createServer(app);
const io = new SocketServer(server, {
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000'
  }
});

initializeSocket(io);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
